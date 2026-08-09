## Git Workflow

**MANDATORY RULE**: Every new user-requested change set MUST begin on a new short-lived branch.
- Never implement a new requested change directly on `main`.
- One coherent user request = one branch.
- Multiple files/edits belonging to the same request stay on that branch.
- Preserve existing uncommitted work.
- Do not force push.
- Do not automatically merge.
- Do not automatically push or commit unless explicitly requested.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
