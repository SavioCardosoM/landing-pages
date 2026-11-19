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
})();
