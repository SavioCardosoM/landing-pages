# Landing Page Lab

Portfólio de templates de landing pages desenvolvido em HTML, CSS e JavaScript puro. O projeto demonstra modelos independentes para profissionais e negócios locais, com foco em apresentação profissional, responsividade, SEO, conversão e reutilização em trabalhos freelance.

A página principal funciona como uma galeria técnica dos templates disponíveis. Cada landing page possui sua própria estrutura de HTML e CSS, facilitando a comparação de estilos e a adaptação para novos clientes.

> Os nomes, telefones, registros profissionais, textos e imagens usados nas demonstrações são fictícios e devem ser substituídos antes da publicação comercial.

## Visão geral

O Landing Page Lab reúne layouts distintos para o mesmo nicho de terapeuta de relacionamentos:

1. **Terapeuta de relacionamentos** — visual acolhedor e natural.
2. **Ana Costa — Vínculos** — composição editorial e refinada.
3. **Clara Ribeiro — Terapia** — estética elegante em tons vinho e nude.
4. **Luísa Martins — Reconexão** — conceito acolhedor com cores quentes.
5. **Espaço Vínculo** — direção contemporânea e urbana.
6. **Beatriz Lima — Relações** — visual minimalista e clínico.

A galeria principal está em `index.html`. Os templates ficam dentro da pasta `templates/` e podem ser visualizados isoladamente.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis, Flexbox e Grid
- JavaScript vanilla
- Google Fonts
- SVG inline
- Imagens locais em formato WebP
- GitHub Pages para publicação estática

O projeto não utiliza framework, processador CSS, jQuery, Tailwind, Bootstrap ou etapa de build.

## Estrutura de arquivos

```text
landing-pages/
├── index.html
├── assets/
│   └── style.css
├── templates/
│   ├── terapeuta-relacionamentos/
│   │   ├── img/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── psicologa-vinculos-editorial/
│   ├── terapia-relacoes-elegante/
│   ├── terapeuta-reconexao/
│   ├── espaco-relacional/
│   └── relacoes-conscientes/
├── LICENSE.md
├── DATA_LICENSE.md
├── ASSET_LICENSES.md
├── CLAUDE.md
└── README.md
```

Cada template é independente. Alterações no CSS de uma pasta não afetam os demais templates.

## Como visualizar o projeto

1. Abra o arquivo `index.html` em um navegador.
2. Para uma experiência mais prática durante o desenvolvimento, use a extensão Live Server no VS Code.
3. Pelo Live Server, clique com o botão direito em `index.html` e escolha **Open with Live Server**.
4. Acesse o template desejado usando os links da galeria.

Como o projeto é composto por arquivos estáticos, não é necessário instalar dependências ou executar comandos de build.

## Como publicar no GitHub Pages

1. Envie o repositório para o GitHub.
2. Abra **Settings** no repositório.
3. Acesse **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve a configuração.

Depois da publicação, a galeria estará disponível pelo endereço fornecido pelo GitHub Pages.

## Como adaptar um template para um cliente

Uma adaptação comercial deve seguir este fluxo:

1. Copie uma pasta existente dentro de `templates/`.
2. Renomeie a nova pasta usando letras minúsculas e hífenes.
3. Substitua o nome, telefone, endereço, registro profissional e imagens fictícios.
4. Ajuste as cores nas variáveis CSS dentro de `:root`.
5. Atualize o `<title>`, a descrição e as tags Open Graph.
6. Insira o domínio definitivo na URL canônica.
7. Adicione o código real do Google Tag.
8. Teste WhatsApp, links internos, FAQ e chamadas para ação.
9. Adicione o novo card à página `index.html` da raiz.

### Dados normalmente alterados

Nos templates de psicologia e terapia, procure por:

- Nome da profissional
- Foto de perfil
- Número de telefone ou WhatsApp
- Registro profissional
- Cidade e forma de atendimento
- Especialidades e abordagem
- Horários disponíveis
- Domínio do site
- Título e descrição para SEO

Não mantenha dados fictícios na página entregue ao cliente.

## Estrutura de uma landing page

Os templates seguem uma estrutura de até cinco dobras:

1. **Hero:** apresenta a dor ou o desejo principal e o CTA.
2. **Identificação:** permite que o visitante reconheça seu problema.
3. **Processo:** explica a solução em passos claros.
4. **Autoridade:** apresenta a profissional e sua formação.
5. **FAQ e CTA final:** remove dúvidas e reforça o próximo passo.

Essa organização não é fixa. Pode ser ajustada conforme o nicho e o objetivo da campanha.

## Padrões de desenvolvimento

### HTML

- Um único `<h1>` por página
- Seções com títulos `<h2>`
- Uso de `<header>`, `<main>`, `<section>` e `<footer>`
- `lang="pt-BR"` definido na página
- Links com texto claro e acessível
- Imagens com atributo `alt` descritivo
- Imagens com `width` e `height` definidos
- Uso de `loading="lazy"` em imagens fora do início da página

### CSS

- Variáveis centralizadas em `:root`
- Mobile first
- Flexbox para alinhamentos em uma direção
- Grid para organização em linhas e colunas
- Media queries com `min-width`
- Estados de foco visíveis
- Preferência por classes descritivas

### JavaScript

- JavaScript puro
- Inclusão com `defer` para não bloquear o carregamento
- Uso apenas quando houver interação ou atualização dinâmica

### Responsividade

Os layouts devem ser testados em pelo menos:

- 375 px — celular
- 768 px — tablet
- 1280 px — desktop

## SEO e rastreamento

Cada template deve revisar:

- `<title>` com aproximadamente até 60 caracteres
- `<meta name="description">` com até aproximadamente 155 caracteres
- Um único `<h1>` por página
- Hierarquia correta de títulos
- URL canônica
- Tags Open Graph
- Meta viewport
- Texto alternativo nas imagens
- Comentário para o Google Tag:

```html
<!-- Google Tag (gtag.js) aqui -->
```

O rastreamento real deve ser inserido somente após a configuração da conta de anúncios e de conversões do cliente.

## WhatsApp

Os links usam o formato:

```text
https://wa.me/55DDDNUMERO?text=MENSAGEM
```

A mensagem precisa ser codificada para uso seguro em URLs. Espaços podem ser representados por `%20`, acentuação pode exigir codificação e elementos como `&` devem ser evitados dentro do texto sem a codificação correta.

Exemplo:

```html
https://wa.me/5511987654321?text=Ol%C3%A1%2C%20gostaria%20de%20conversar
```

No projeto real, o número deve pertencer ao cliente e a mensagem deve refletir o objetivo da campanha.

## Licenças e direitos

Este repositório organiza três tipos diferentes de licença:

- `LICENSE.md` — licença MIT para o código HTML, CSS e JavaScript.
- `DATA_LICENSE.md` — orientação para dados fictícios e conteúdo demonstrativo.
- `ASSET_LICENSES.md` — documentação sobre imagens, fontes e ativos visuais.

Essas licenças não substituem validação jurídica profissional. Antes de publicar uma landing page comercial:

- Confirme os direitos das fotografias.
- Obtenha autorização para depoimentos e logotipos.
- Revise regras éticas da profissão envolvida.
- Publique política de privacidade se houver coleta de dados.
- Confirme o uso das fontes e dos nomes das marcas.
- Substitua todos os dados fictícios.

## Conteúdo e saúde

Em projetos para psicologia, terapia ou áreas da saúde:

- Não prometer cura ou resultados garantidos.
- Não classificar diagnósticos pelo site.
- Não fazer afirmações científicas sem fontes confiáveis.
- Não sugerir substituição de atendimento médico ou psicológico de urgência.
- Respeitar normas éticas do conselho profissional correspondente.
- Evitar pressão excessiva ou mensagens de escassez artificiais.

## Testes antes da entrega

Use esta checklist:

- [ ] Dados fictícios substituídos
- [ ] Nome e telefone confirmados
- [ ] Links internos funcionando
- [ ] WhatsApp abre com número e mensagem corretos
- [ ] Imagens carregam em todos os navegadores
- [ ] Nenhuma imagem fica fora de proporção
- [ ] Layout testado em celular, tablet e desktop
- [ ] Contraste de cores aprovado
- [ ] Navegação por teclado funcional
- [ ] Foco visível nos elementos interativos
- [ ] Título e descrição revisados
- [ ] Open Graph configurado
- [ ] Google Tag instalado
- [ ] Política de privacidade disponível quando necessário
- [ ] Direitos dos ativos confirmados

## Próximas melhorias possíveis

- Criar templates para outros nichos.
- Adicionar modo claro e escuro ao portfólio.
- Criar filtros por categoria na galeria.
- Criar uma página de demonstração comparando estilos.
- Adicionar checklist automática de validação.
- Registrar licenças completas de cada fotografia.
- Produzir capturas de tela para o README.
- Adicionar formulário acessível e integrado.

## Git

Os commits são realizados pelo proprietário do repositório. Sugestões de mensagem seguem o padrão:

```text
docs: atualiza README
feat: adiciona novo template
style: ajusta layout da galeria
fix: corrige responsividade
```

Não faça alterações de Git por outras pessoas sem autorização.

## Licença

Consulte `LICENSE.md`, `DATA_LICENSE.md` e `ASSET_LICENSES.md` para entender os direitos sobre código, dados fictícios e ativos visuais.