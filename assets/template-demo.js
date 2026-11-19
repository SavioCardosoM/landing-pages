// Adiciona a faixa de demonstração usando o número definido em config.js.
(function () {
  "use strict";

  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;

  const templateKey = document.body.dataset.template;
  const template = config.templates[templateKey];
  if (!template) return;

  const banner = document.createElement("div");
  banner.className = "demo-banner";

  const message = `Olá! Vi o modelo ${template.name} no seu portfólio e quero um site assim para o meu negócio.`;

  banner.innerHTML = `<span>Modelo de demonstração</span><span class="demo-banner__dot" aria-hidden="true"></span><a href="https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener noreferrer">Quero um site assim</a>`;

  document.body.prepend(banner);
  document.body.classList.add("demo-banner-active");

  // Recursos LGPD carregados em todas as demonstrações.
  const assetsUrl = new URL("./", document.currentScript.src);
  const cookieCss = document.createElement("link");
  cookieCss.rel = "stylesheet";
  cookieCss.href = new URL("cookie-consent.css", assetsUrl).href;
  document.head.appendChild(cookieCss);

  const footer = document.querySelector("footer");
  if (footer) {
    const legalLinks = document.createElement("div");
    legalLinks.className = "template-demo-legal";
    legalLinks.innerHTML = `<a href="${new URL("../../privacidade.html", location.href).href}">Privacidade</a><span aria-hidden="true">•</span><a href="${new URL("../../termos.html", location.href).href}">Termos</a><button type="button" data-open-cookie-settings>Cookies</button>`;
    footer.appendChild(legalLinks);
  }

  const cookieScript = document.createElement("script");
  cookieScript.src = new URL("cookie-consent.js", assetsUrl).href;
  cookieScript.defer = true;
  document.body.appendChild(cookieScript);
})();
