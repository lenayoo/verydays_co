# AGENTS.md

## Project: Verydays Website Refactor

Refactor https://verydays.co into a calm, minimal indie app brand homepage.

---

## Core Principle

Brand atmosphere first.  
Apps after scroll.

Do NOT show apps immediately on first screen.

The homepage must feel like entering the world of Verydays.

---

## Page Structure

The page MUST follow this order:

1. Header
2. Hero (brand entrance)
3. Philosophy
4. Apps (after scroll)
5. Footer

---

## Header

- Left: "Verydays" (text logo)
- Right: language links (한국어 / 日本語 / Eng)
- Minimal, quiet, no heavy navigation

---

## Hero (First View)

Focus ONLY on brand.

Content:

```txt
Very Days

Small tools for quiet everyday moments.

---

# Analytics & Advertising

## Important

The website must keep Google Analytics and Google AdSense enabled.

Do NOT remove, modify, or duplicate these scripts unless explicitly requested.

These scripts should remain inside the `<head>` of the application.

---

## Google AdSense

Keep the following script inside `<head>`.

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js?client=ca-pub-7195864152055881"
     crossorigin="anonymous"></script>
```

---

## Google Analytics (GA4)

Keep the following Google Analytics configuration inside `<head>`.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TL7F77BC2L"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TL7F77BC2L');
</script>
```

---

## Requirements

When refactoring the website:

- Do NOT remove Google Analytics.
- Do NOT remove Google AdSense.
- Do NOT insert duplicate tracking scripts.
- Ensure these scripts are loaded only once.
- Keep all existing tracking IDs unchanged.

---

## Future Analytics Events

The architecture should allow future event tracking.

Examples include:

- app_store_click
- google_play_click
- consulting_click
- contact_submit
- linkedin_click

Do not implement these events unless explicitly requested, but keep the website architecture ready for them.

---

# SEO

When modifying the website:

- Preserve all existing metadata.
- Do not remove sitemap.xml.
- Do not remove robots.txt.
- Do not remove favicon.
- Preserve canonical URLs.
- Preserve Open Graph metadata.
- Preserve structured data if present.

SEO should never be degraded during refactoring.
