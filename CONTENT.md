# Portfolio content guide

## Add a project
1. Add an entry to `projects` in `src/types/project.ts` (choose `section`: featured / more / brand).
2. Put real exports in `public/images/projects/<slug>/` and set `isPlaceholder: false`.
3. Optional case study: `src/content/case-studies/<slug>.mdx`, then `hasCaseStudy: true`.
   No other file needs editing.

## Add a Playground experiment
Append to `src/content/experiments.ts`, drop the export in `public/images/experiments/`,
set `width`/`height` to the export's real pixel size, `isPlaceholder: false`.

## Visibility rules
- Featured projects always render (titled shell if no assets yet).
- More / brand / experiments with `isPlaceholder: true` show in `next dev` only.
- Placeholder or hidden projects have no public page and are not in the sitemap.

## Never add without explicit sign-off
- Farmsville (NDA). Confirm exactly what may be shown first.
- Any screen whose project/feature is unconfirmed. No invented screens or functionality.
