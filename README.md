# Laura Castilho — Portfolio

Personal portfolio site built with Vite, React, TypeScript, shadcn-ui and Tailwind CSS.

**Live site:** https://laura-castilho.github.io

---

## Local development

```bash
# Install dependencies
pnpm install

# Start the local development server
pnpm dev
```

## Deployment

Every push to `main` triggers a GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) that builds the site and publishes it to GitHub Pages.

---

## i18n

This site ships a minimal browser-side i18n baseline built on:

- `i18next`
- `react-i18next`
- `i18next-http-backend`
- `i18next-browser-languagedetector`

### Source-of-truth files

- `i18n.config.json` — language manifest (`fallbackLng`, `languages[].{code,label,detect,dir}`)
- `public/locales/{code}.json` — flat dotted-key translations, one file per language
- `src/i18n/config.ts` + `src/i18n/util.ts` — runtime entry and pure helpers
- `src/components/language-switcher.tsx` — language switcher UI

### Runtime behavior

- reads the manifest from `i18n.config.json`
- loads translations from `public/locales/{code}.json` via `i18next-http-backend`
- detects language from cookie, browser, then html tag; caches in the `i18next` cookie
- normalizes unsupported languages to `fallbackLng` (no invalid values stored in cookies)
- syncs `<html lang>` and `<html dir>` on init and on `languageChanged`
- treats keys as flat strings: both `keySeparator` and `nsSeparator` are disabled

### Using translations in components

```tsx
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  return <h1>{t("home.hero.title")}</h1>;
};
```

For language switching, the `i18n` instance also comes from `useTranslation()`:

```tsx
const { i18n } = useTranslation();
void i18n.changeLanguage("pt-BR");
```

`languageOptions`, `normalizeLanguage`, `getLanguageDirection`, and `fallbackLng` can be imported from `@/i18n/config` (re-exports from `util.ts`).

### Adding a language

1. Add an entry under `languages` in `i18n.config.json` with `code`, `label`, `detect`, `dir`.
2. Create `public/locales/{code}.json` with the same key set as `public/locales/{fallbackLng}.json`.
3. Translate values, preserving any `{{variables}}` and `<tag>...</tag>` structures.

### Adding a translation key

1. Add the key to `public/locales/{fallbackLng}.json` first.
2. Add the same key to every other locale file with its translated value.
3. Use it via `t("group.key")` in components.

---

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
