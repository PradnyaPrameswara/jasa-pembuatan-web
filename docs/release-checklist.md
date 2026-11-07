# Publication and SEO checks

Canonical domain: **https://www.pradnyaprameswara.web.id/**

The site is statically generated with Astro. GitHub CI validates the source and preview output; it does not deploy or validate the live DNS or hosting configuration.

## Before merging and publishing

1. Merge stacked PRs in order, after each PR's checks and screenshots pass. Confirm no duplicate commits remain after retargeting later PRs to `main`.
2. Review visual layout at 375, 390, 430, 768, 1024, 1280 and 1440px, including all three case studies, the contact form and mobile menu. Check text wrapping, focus, image crops and reduced motion.
3. Run `pnpm lint`, `pnpm typecheck`, `pnpm check`, `pnpm build`, and `pnpm exec playwright test` on the exact commit intended for release.
4. Confirm the production host serves generated `dist/404.html` with HTTP 404 for unknown routes, rather than returning HTTP 200. The static page alone cannot configure host-level status codes.
5. After deployment, check homepage and detail page canonical tags, public meta descriptions, valid Open Graph images, JSON-LD, `robots.txt` and `sitemap-index.xml` on the **live** domain. Confirm both www and apex domain behavior with the hosting provider; don't assume an unconfigured redirect.
6. Verify the visible email link and that submitting the contact form opens a draft only. It does not send or store messages.
7. Review external link destinations and ensure client/private data is not present in source, screenshots or original art. Do not describe conceptual work illustrations as actual UI.

## Performance

Compare mobile and desktop lab traces before/after release on the same device/network profiles; inspect LCP, CLS, INP where available, image candidate selection and font-loading behavior. No performance percentage or score is guaranteed by the asset markup alone.
