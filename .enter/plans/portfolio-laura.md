# Plano — Site Portfólio Laura Castilho (estilo matheusgalhani.com.br)

## Contexto

O usuário quer um site de portfólio pessoal **bem parecido** com o site de referência
`https://www.matheusgalhani.com.br/#contact`, usando as informações do currículo
**"Laura Castilho - Full Stack Developer.pdf"**.

O usuário anexou 3 capturas da referência (hero, seção **Serviços** e seção **Skills**) e pediu para ficar
bem parecido com elas. Detalhes visuais confirmados das capturas:
- **Tema:** fundo azul-marinho/meia-noite muito escuro (`#060814` / `#080c1d`), cards em azul-marinho `#0d1127`, acento neon roxo `#a855f7` / `#9333ea`.
- **Títulos de seção:** brancos, grandes, com **sublinhado gradiente roxo → ciano**.
- **Corpo de texto:** cinza-ardósia claro (`~#94a3b8`).
- **Seção "Serviços":** layout 2 colunas assimétrico — esquerda: título + parágrafos descritivos; direita: grid 2x2 de 4 itens **sem borda de card**, cada item com ícone de linha neon roxo acima do título + descrição.
- **Seção "Skills":** grid de **8 cards** (2 linhas x 4), cada card = retângulo azul-marinho `#0d1127` com borda sutil, **ícone roxo em caixa quadrada** no canto superior, título branco, descrição cinza e **rating de 5 estrelas** (roxas preenchidas + vazadas) com valor numérico (ex.: 4.5).

Decisões do usuário:
- **Idioma:** português e inglês, **priorizando inglês** (inglês como fallback/padrão, seletor PT-BR).
- **Contato:** apenas links (WhatsApp, Email, LinkedIn) — sem backend, sem formulário funcional.
- **Foto do hero:** avatar 3D estilizado gerado por IA (não a foto do CV).

Sem necessidade de Enter Cloud / backend (contato é só links).

## Estrutura do site (página única com âncoras)

1. **Header fixo** — logo "Laura Castilho" ("Laura" branco + "Castilho" roxo), navegação (Sobre Mim, Serviços, Skills, Contato), seletor de idioma EN/PT-BR. Menu hambúrguer no mobile.
2. **Hero** — coluna esquerda: label "OLÁ, EU SOU |" / "HELLO, I AM |", nome grande em roxo, cargo "Desenvolvedora Full Stack / Full Stack Developer", bio curta, CTAs "Falar comigo" (WhatsApp) e "Ver LinkedIn". Coluna direita: card do avatar gerado com borda roxa brilhante, ícone de código flutuante, badge "Disponível para projetos / Available for projects", anéis orbitais decorativos.
3. **Stats** — 3 números: "6+ Anos de experiência / Years of experience", "3 Idiomas / Languages", "∞ Aprendizado contínuo / Continuous learning".
4. **Sobre Mim (About)** — bio completa do CV + botão LinkedIn.
5. **Serviços (Services)** — layout igual à referência: esquerda título + 2 parágrafos; direita grid 2x2 sem bordas com 4 itens (ícones roxos acima do título):
   - Development — "Projetos end-to-end: APIs REST, backend .NET e websites dinâmicos ou estáticos."
   - Mobile-friendly — "Design responsivo com conceito Mobile First, acessível em qualquer dispositivo."
   - Integrações & APIs — "Integrações com instituições financeiras e fluxos de pagamento."
   - Clean code & Testes — "Código limpo com testabilidade, testes unitários e de integração."
6. **Skills** — grid de 8 cards idêntico à referência (ícone em caixa, título, descrição, rating de 5 estrelas + valor):
   - C# & .NET (5.0), REST APIs & BFF (4.5), React.js (4.5), SQL & Databases (4.5), HTML/CSS/JS & Bootstrap (4.5), Python & R (4.0), Git & GitHub (4.5), AWS & Azure DevOps (4.0).
7. **Experiência (Experience)** — timeline com as 3 posições na Tecnologia Única (Mid-level 2025–presente, Junior 2021–2025, Estágio 2020–2021) e bullet points do CV.
8. **Educação (Education)** — 2 cards: Inteligência Artificial (2025–2027), Desenvolvimento Web (2019–2021).
9. **Contato (Contact)** — texto de introdução + 3 cards de link: WhatsApp (`https://wa.me/5511996290434`), Email (`laura.andrade.castilho@gmail.com`), LinkedIn (`https://www.linkedin.com/in/laura-castilho/`).
10. **Footer** — © Laura Castilho, âncoras sociais.

## Design system (src/index.css, tailwind.config.ts, index.html)

- Tema **escuro roxo** como padrão: `:root`/`.dark` com fundo `#060814`, cards `#0d1127`, acento neon roxo `#a855f7`, texto ardósia, bordas escuras roxas; forçar `class="dark"` no `<html>` em `index.html`.
- Tokens semânticos: `--gradient-primary` (roxo→magenta), `--gradient-title` (roxo→ciano, usado no sublinhado dos títulos de seção), `--shadow-glow`, `--card-border`; `--radius` maior.
- Fonte estilo Inter/Plus Jakarta Sans importada no `index.css` e aplicada via `--font-sans` no `tailwind.config.ts`.
- Keyframes/animations: `float`, `orbit`, `pulse-glow`, `fade-up`, `blob`.
- Customizar variantes: `Button` (variante `premium` gradiente roxo, `outline`/`ghost` escuros com texto visível), `Badge`, `Card` conforme tema.

## Arquivos a criar / modificar

**Novos componentes** em `src/components/portfolio/` (pequenos e focados):
- `Header.tsx`, `Hero.tsx`, `Stats.tsx`, `About.tsx`, `Services.tsx`, `Skills.tsx`, `Experience.tsx`, `Education.tsx`, `Contact.tsx`, `Footer.tsx`
- `SkillCard.tsx` (card de skill reutilizável com rating de estrelas) e `SectionHeading.tsx` (título com sublinhado gradiente roxo→ciano) — reutilizáveis entre seções.

**Modificados:**
- `src/pages/Index.tsx` — monta todos os componentes (substitui boilerplate).
- `src/index.css` — tokens dark roxo, gradientes, animações, fonte.
- `tailwind.config.ts` — cores semânticas, fonte, keyframes/animations.
- `index.html` — `class="dark"` no `<html>`.
- `i18n.config.json` — adiciona `pt-BR` (`detect: ["pt-BR","pt"]`, `dir: ltr`, label "Português"); remove `zh-CN`.
- `public/locales/en.json` — reescrito com todo o conteúdo em inglês (fallback).
- `public/locales/pt-BR.json` — novo, mesmas chaves em português.
- `public/locales/zh-CN.json` — deletado.
- `src/components/language-switcher.tsx` — ajustar visual pill escuro (fonte de dados do manifesto intacta).

## i18n (seguir skill enter_i18n — fluxo add-language)

- Manter `fallbackLng: "en"` (prioriza inglês). `src/i18n/util.ts` já está na versão corrigida — não mexer.
- Chaves planas (`"home.hero.title"`), mesmo conjunto exato de chaves em `en.json` e `pt-BR.json`, valores não vazios.
- Todos os componentes usam `useTranslation()` com chaves literais.
- Rodar no fim: `node /workspace/.agents/skills/enter_i18n/assets/scripts/check-i18n.mjs` e `scan-i18n.mjs`.

## Avatar (hero)

- Gerar avatar 3D estilizado (mulher jovem, cabelo cacheado escuro longo, sorriso, casaco escuro — inspirado na foto do CV), estilo do avatar 3D da referência.
- Antes de gerar, perguntar ao usuário qual modelo de imagem usar (regra da ferramenta); recomendar `nano-banana-pro`.
- Salvar em `public/` e referenciar no `Hero.tsx`.

## Implementação

- Ícones do `lucide-react` (sem emojis): `Github`, `Linkedin`, `Mail`, `MessageCircle`, `ArrowRight`, `Code2`, `Download`, `Menu`, `X`, `Sparkles`, `GraduationCap`, `Briefcase`, `Languages`, `Smartphone`, `Plug`, `TestTube`, `Star`, etc.
- Animações de scroll sutil com `framer-motion` (já instalado).
- Responsivo: 2 colunas no desktop, empilhado no mobile; grid 2x2 em desktop / 1 coluna em mobile.

## Implementation checklist

- [ ] `src/index.css`: reescrever tokens para tema dark roxo; gradientes, sombras, fonte importada, keyframes.
- [ ] `tailwind.config.ts`: cores semânticas, `fontFamily.sans`, novas `keyframes`/`animation`.
- [ ] `index.html`: adicionar `class="dark"` no `<html>`.
- [ ] `i18n.config.json`: adicionar `pt-BR`, remover `zh-CN`.
- [ ] `public/locales/en.json`: reescrever com todo o conteúdo (fallback, inglês).
- [ ] `public/locales/pt-BR.json`: criar com as mesmas chaves traduzidas.
- [ ] `public/locales/zh-CN.json`: deletar.
- [ ] `src/pages/Index.tsx`: montar hero, stats, about, services, skills, experience, education, contact, footer.
- [ ] `src/components/portfolio/Header.tsx`: nav fixa, logo, links âncora, seletor de idioma, menu mobile.
- [ ] `src/components/portfolio/Hero.tsx`: label, nome, cargo, bio, CTAs e card do avatar (badge, ícone flutuante, anéis orbitais).
- [ ] `src/components/portfolio/Stats.tsx`: linha de estatísticas (6+, 3 idiomas, ∞).
- [ ] `src/components/portfolio/About.tsx`: bio completa + botão LinkedIn.
- [ ] `src/components/portfolio/Services.tsx`: layout 2 colunas assimétrico, 4 itens sem borda de card com ícones roxos.
- [ ] `src/components/portfolio/Skills.tsx`: grid de 8 cards estilo referência, cada um com ícone em caixa, título, descrição e rating de 5 estrelas + valor.
- [ ] `src/components/portfolio/SkillCard.tsx`: card reutilizável com rating (estrelas preenchidas/vazadas + valor numérico).
- [ ] `src/components/portfolio/SectionHeading.tsx`: título de seção com sublinhado gradiente roxo→ciano.
- [ ] `src/components/portfolio/Experience.tsx`: timeline das 3 posições na Tecnologia Única.
- [ ] `src/components/portfolio/Education.tsx`: cards das 2 formações.
- [ ] `src/components/portfolio/Contact.tsx`: cards de links WhatsApp/Email/LinkedIn.
- [ ] `src/components/portfolio/Footer.tsx`: rodapé com âncoras sociais.
- [ ] Gerar avatar 3D (perguntar modelo ao usuário antes) e salvar em `public/`.
- [ ] `src/components/language-switcher.tsx`: ajustar estilo pill escuro (fonte de dados do manifesto intacta).
- [ ] Rodar `check-i18n.mjs` e `scan-i18n.mjs` (devem passar).

## Verification checklist

- [ ] `pnpm run check` (lint + typecheck) sem erros.
- [ ] `pnpm run build` sem erros.
- [ ] `check-i18n.mjs` imprime "i18n check passed." e `scan-i18n.mjs` escreve relatórios sem erro.
- [ ] Preview desktop (1280): header fixo, hero 2 colunas com avatar, stats, sobre mim, **serviços 2 colunas com sublinhado gradiente**, **skills 8 cards com estrelas**, timeline, educação, contato com 3 links, footer.
- [ ] Preview mobile (390): menu hambúrguer, seções empilhadas, sem overflow horizontal.
- [ ] Trocar idioma EN ↔ PT-BR: atualiza imediatamente e persiste (cookie).
- [ ] Links de contato apontam para WhatsApp, email e LinkedIn corretos (do CV).
- [ ] Âncoras do header rolam para as seções corretas.
- [ ] Contrastes/legibilidade OK em tema escuro (texto claro sobre fundo escuro, sem texto branco invisível).
