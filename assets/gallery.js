// Atualiza preço, checkout e WhatsApp dos cards usando assets/config.js.
(function () {
  "use strict";

  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;

  document.querySelectorAll(".template-card[data-template]").forEach((card) => {
    const key = card.dataset.template;
    const template = config.templates[key];
    if (!template) return;

    const buyButton = card.querySelector("[data-action='buy']");
    const customButton = card.querySelector("[data-action='custom']");

    if (buyButton) {
      buyButton.textContent = template.checkout && template.checkout !== "#"
        ? `Comprar template – ${template.price}`
        : "Em breve";

      if (!template.checkout || template.checkout === "#") {
        buyButton.setAttribute("aria-disabled", "true");
        buyButton.removeAttribute("href");
        buyButton.classList.add("is-disabled");
      } else {
        buyButton.href = template.checkout;
        buyButton.target = "_blank";
        buyButton.rel = "noopener noreferrer";
      }
    }

    if (customButton) {
      const message = `Olá! Vi o modelo ${template.name} no seu portfólio e quero um site assim para o meu negócio.`;
      customButton.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
      customButton.target = "_blank";
      customButton.rel = "noopener noreferrer";
    }
  });

  const aboutButton = document.querySelector("[data-about-whatsapp]");
  if (aboutButton) {
    const message = "Olá! Vi seu portfólio e quero uma landing page personalizada para o meu negócio.";
    aboutButton.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    aboutButton.target = "_blank";
    aboutButton.rel = "noopener noreferrer";
  }

  const contactButton = document.querySelector("[data-contact-whatsapp]");
  if (contactButton) {
    const message = "Olá! Gostaria de conversar sobre uma landing page personalizada.";
    contactButton.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    contactButton.target = "_blank";
    contactButton.rel = "noopener noreferrer";
  }
})();
