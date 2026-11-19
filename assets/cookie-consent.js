(function () {
  "use strict";

  const storageKey = "lp_lab_cookie_consent";
  const scriptUrl = document.currentScript ? document.currentScript.src : "";
  const privacyUrl = scriptUrl ? new URL("../privacidade.html", scriptUrl).href : "privacidade.html";
  const termsUrl = scriptUrl ? new URL("../termos.html", scriptUrl).href : "termos.html";

  function setGoogleConsent(choice) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

    window.gtag("consent", "default", {
      ad_storage: choice,
      ad_user_data: choice,
      ad_personalization: choice,
      analytics_storage: choice,
      functionality_storage: "granted",
      security_storage: "granted"
    });
  }

  function saveChoice(choice) {
    try {
      localStorage.setItem(storageKey, choice);
    } catch (error) {
      // O consentimento continua válido nesta sessão mesmo sem armazenamento.
    }

    setGoogleConsent(choice === "accepted" ? "granted" : "denied");
  }

  function closeBanner() {
    const banner = document.querySelector(".cookie-banner");
    if (banner) banner.hidden = true;
  }

  function openBanner() {
    let banner = document.querySelector(".cookie-banner");

    if (!banner) {
      banner = document.createElement("aside");
      banner.className = "cookie-banner";
      banner.setAttribute("role", "dialog");
      banner.setAttribute("aria-label", "Preferências de cookies");
      banner.innerHTML = `
        <div class="cookie-banner__content">
          <p><strong>Privacidade e cookies</strong>Usamos cookies necessários e, somente com sua autorização, cookies de análise e publicidade. Você pode alterar sua escolha a qualquer momento.</p>
          <div class="cookie-banner__links">
            <a href="${privacyUrl}">Política de Privacidade</a>
            <a href="${termsUrl}">Termos de Uso</a>
          </div>
          <div class="cookie-banner__actions">
            <button type="button" data-cookie-action="reject">Recusar opcionais</button>
            <button type="button" data-cookie-action="accept">Aceitar todos</button>
          </div>
        </div>`;
      document.body.appendChild(banner);

      banner.querySelector("[data-cookie-action='accept']").addEventListener("click", function () {
        saveChoice("accepted");
        closeBanner();
      });

      banner.querySelector("[data-cookie-action='reject']").addEventListener("click", function () {
        saveChoice("rejected");
        closeBanner();
      });
    }

    banner.hidden = false;
  }

  function bindCookieSettings() {
    document.querySelectorAll("[data-open-cookie-settings]").forEach((button) => {
      button.addEventListener("click", openBanner);
    });
  }

  let savedChoice = null;
  try {
    savedChoice = localStorage.getItem(storageKey);
  } catch (error) {
    savedChoice = null;
  }

  setGoogleConsent(savedChoice === "accepted" ? "granted" : "denied");

  if (!savedChoice) {
    openBanner();
  }

  bindCookieSettings();
  document.addEventListener("DOMContentLoaded", bindCookieSettings);
})();
