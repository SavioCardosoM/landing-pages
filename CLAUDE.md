CLAUDE.md

Instruções para o Claude ao trabalhar neste repositório.

Sobre o projeto

Portfólio de templates de landing pages de alta conversão, voltado para trabalhos freelance (terapeutas, psicólogos, nutricionistas, personal trainers, advogados, negócios locais etc.).

Cada template fica em sua própria pasta dentro de templates/.
A index.html da raiz é a galeria do portfólio, com um card e um link para cada template.
O site é publicado no GitHub Pages.

O dono do projeto está aprendendo desenvolvimento web (sabe CSS básico e é iniciante em HTML semântico e JavaScript). Por isso:

Explique em português o que cada trecho importante de código faz.
Prefira código simples e legível a soluções "espertas".
Quando introduzir um conceito novo (flexbox, grid, media query, variáveis CSS etc.), explique em 1 ou 2 frases.
⚠️ Regra sobre Git: os commits são do usuário
NUNCA rode git commit, git push, git merge, git rebase nem crie pull requests.
NUNCA adicione linhas Co-Authored-By, Generated with Claude ou qualquer outra atribuição em mensagens de commit, código ou arquivos.
O Claude só edita os arquivos. O usuário revisa, faz o git add, o git commit e o git push.
Ao terminar uma tarefa, o Claude pode sugerir uma mensagem de commit (veja o padrão abaixo) para o usuário copiar, se quiser.
Padrão de mensagem de commit (sugestão)
feat: adiciona template terapeuta-relacionamentos
style: ajusta espaçamento da seção hero
fix: corrige menu no celular
docs: atualiza README
Stack
HTML5 + CSS3 + JavaScript puro (vanilla), sem frameworks e sem build.
Fontes: Google Fonts (no máximo 2 famílias por template).
Ícones: SVG inline ou Lucide (copiando o SVG, sem instalar pacote).
Nada de jQuery, Bootstrap ou Tailwind, a menos que o usuário peça.
Estrutura de pastas
/
├── index.html               # galeria do portfólio
├── assets/                  # estilos e imagens da galeria
│   └── style.css
├── templates/
│   └── terapeuta-relacionamentos/
│       ├── index.html
│       ├── style.css
│       ├── script.js        # só se precisar
│       └── img/
├── CLAUDE.md
└── README.md
Pastas e arquivos em kebab-case (terapeuta-relacionamentos, foto-perfil.webp).
Cada template é independente: não importa CSS de outro template.
Padrões de uma landing page
Estrutura (4 a 5 dobras)
Hero: título com a dor ou o desejo do cliente, subtítulo e botão de ação (CTA)
Identificação / problema: "Você se reconhece?"
Solução / como funciona: processo em 3 passos ou benefícios
Autoridade: quem é o profissional (foto, formação, abordagem)
FAQ + CTA final

Os textos devem ser em português, claros e persuasivos, sem prometer resultados garantidos (principalmente em saúde, psicologia e direito, que têm regras éticas de publicidade).

SEO
Um único <h1> por página; seções com <h2>.
<title> com até ~60 caracteres e <meta name="description"> com até ~155.
lang="pt-BR", meta viewport e tags Open Graph (og:title, og:description, og:image).
HTML semântico: <header>, <main>, <section>, <footer>.
Todas as imagens com alt descritivo.
Performance (importa para o Google Ads)
Imagens em WebP, com width/height definidos e loading="lazy" (menos no hero).
CSS em um arquivo só; JS com defer.
Objetivo: nota 90+ no Lighthouse em mobile.
Responsividade
Mobile first: estilos base para o celular e @media (min-width: ...) para telas maiores.
Testar em 375px, 768px e 1280px.
Conversão
Botão de WhatsApp usando https://wa.me/55DDDNUMERO?text=... e/ou formulário.
CTA visível no hero e repetido no final.
Deixar um comentário <!-- Google Tag (gtag.js) aqui --> no <head> para o rastreamento de conversões do Google Ads.
CSS
Usar variáveis CSS em :root para cores, fontes e espaçamentos, para que cada template possa ser adaptado a outro cliente só trocando as variáveis.
Layout com Flexbox e Grid.
Nomes de classes descritivos (.hero, .hero__titulo, .btn-whatsapp).
Acessibilidade
Contraste adequado entre texto e fundo.
Botões e links com texto claro (nada de "clique aqui" sozinho).
Foco visível nos elementos interativos.
Ao criar um novo template
Criar a pasta em templates/<nome-do-nicho>/.
Usar dados fictícios (nome, telefone, fotos de banco gratuito como Unsplash ou Pexels).
Adicionar o card do template na index.html da raiz.
Avisar o usuário que terminou e sugerir a mensagem de commit. Não commitar.