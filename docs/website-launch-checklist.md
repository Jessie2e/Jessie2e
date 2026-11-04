# 2e Studio — required website launch checklist

Use this checklist for every future 2e Studio website launch. Record evidence and outstanding items in the project's launch notes. Preserve the client's approved design and existing deployment workflow.

## Social Sharing Preview — required

- [ ] Inspect the approved brand, logo, colors, typography, existing image assets, production domain, and current metadata before creating the card.
- [ ] Create a custom branded **1200 × 630 px** social sharing image using client-owned/approved assets. Avoid generic stock when suitable existing assets are available. Keep the business name and purpose readable at a small display size, with generous edge-safe margins. Inspect normal and modestly cropped presentations; do not claim every platform crop is identical.
- [ ] Export an optimized production JPEG or PNG with the correct dimensions and aspect ratio. Prefer a versioned filename for future cache refreshes; target under 300 KB when quality permits. Retain an editable/reproducible source and record the final file path.
- [ ] Configure `og:title`, `og:description`, `og:image`, `og:image:width=1200`, `og:image:height=630`, `og:url`, and `og:type=website`. Add an accurate `og:image:alt` and image content-type metadata.
- [ ] Configure `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`, and descriptive `twitter:image:alt`. Do not invent social account handles.
- [ ] Use **absolute HTTPS production URLs** for the image and page URL. Keep canonical URLs and social metadata consistent for every intended public route, including initial server HTML and client-side navigation when applicable. Exclude localhost, preview, staging, and obsolete domains from production social URLs.
- [ ] Check accessibility: readable text, sufficient contrast, descriptive image alternative metadata, appropriate image rights, and clear branding when reduced. Check that edge cropping does not cut essential text or the focal subject.
- [ ] Verify the **deployed final domain**, not only the local build: image returns HTTP 200 with the matching `image/jpeg` or `image/png` MIME type; dimensions are 1200 × 630; no login, expiring URL, robots prohibition, WAF challenge, or hotlink protection blocks social crawlers. Check representative Facebook/Meta, Twitter/X, and LinkedIn crawler user agents where practical.
- [ ] Verify all required social fields in the actual public HTML and confirm the correct production image is referenced. Verify the production site's robots and canonical/indexing controls while preserving preview noindex/redirect protection.
- [ ] Run a social preview debugger where accessible (Meta Sharing Debugger or LinkedIn Post Inspector), inspect the fetched card, and refresh cached scrape data when needed. If account access, a developer account, CAPTCHA, or another external condition prevents testing, report the specific limit and the manual URL-refresh step. HTTP metadata checks alone do not prove that platform caches refreshed.
- [ ] Record the local asset path, public image URL, deployment identity, page/image response verification, thumbnail/crop inspection, debugger outcome, and manual follow-ups. Do not declare the step complete without distinguishing verified results from unavailable platform checks.

## Other studio launch requirements

- [ ] Exact footer credit: “Designed by 2e Studio”; use plain text unless a verified studio URL is supplied.
- [ ] Check phone, tablet, and desktop for overflow and exercise navigation and important controls. Keep repeated content and mobile/tablet footers compact, accessible, and manually controlled; avoid autoplay.
- [ ] Confirm client approvals, production authorization, final domain, and established deployment destination. Preserve email DNS and unrelated services before domain changes; stop for unexpected conflicts.
- [ ] Verify trusted HTTPS, root/www canonical behavior, all public routes, approved forms, page metadata, sitemap, robots, and preview duplicate-indexing controls. Label technical form tests clearly and distinguish endpoint acceptance from recipient inbox receipt.

## How future projects receive this requirement

The entry point on this workstation is `/Users/home/.codex/AGENTS.md`, which directs website projects here. At the start of a new repository, merge the studio requirement from `templates/AGENTS.website.md` into its own `AGENTS.md` without overwriting existing instructions, and copy this checklist to `docs/website-launch-checklist.md`. Use `templates/social-metadata.html` as an illustrative metadata seed, replacing every placeholder and adapting to the project's framework.

This shared file does not retroactively modify other repositories, machines, or non-Codex tools. A repository needs its own retained instructions/checklist for portable enforcement; other machines must copy those files or explicitly reference the shared standard. Existing project-specific instructions and the user's explicit choices remain authoritative.
