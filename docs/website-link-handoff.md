# Savvy Analytics website link handoff

**State:** Prepared; public domain destination remains on the existing live site. No automatic launch or domain change.

## Purpose

The Savvy Analytics card in the personal portfolio opens a project-details dialog. That dialog can now show a prominent **Visit Savvy Analytics** link. The central destination for this link is in `docs/site-links.js`. The GitHub profile `README.md` also has direct links to Savvy Analytics.

## Current destination

`https://www.savvyanalytics.info/` — the existing live public site, not a prototype or staging URL.

If the rebuilt website replaces the existing site **at the same hostname**, no portfolio URL change is needed: the link will automatically point to the rebuilt site after the owner's approved domain cutover. Do still verify the destination after launch.

If the approved canonical hostname **changes**, update all public Savvy Analytics URLs together:

1. `docs/site-links.js` (the portfolio project-dialog URL)
2. `README.md` (GitHub profile main link and references)
3. Any other actual public links found by searching for `savvyanalytics.info` and the newly approved domain.

## Launch gate — do not switch early

Update to a new hostname only after **all** these checks:

- [ ] New site is deployed and responds to HTTPS requests from an external browser.
- [ ] New domain, canonical URLs and any redirects are approved and verified.
- [ ] Primary corporate homepage and industry customer journeys are operational.
- [ ] Site security, privacy, mobile, SEO, and customer journey acceptance criteria are approved.
- [ ] Portfolio links are checked for the correct destination and no staging/local URLs.
- [ ] Owner explicitly approves **public launch and portfolio link promotion**.

## Release procedure

1. Website release owner announces approved production URL, release evidence and explicit authorization.
2. Open a small PR in this portfolio repository changing only public URL references, if needed.
3. Run `Check portfolio` GitHub Actions; inspect the Savvy Analytics dialog link and GitHub profile README.
4. Human reviews and merges; do not auto-merge.
5. Open `https://marvinmckinneyii0.github.io/marvinmckinneyii0/` after Pages updates and confirm both project card and direct profile link work.
6. If the site fails, use the approved old live URL and coordinate rollback with the website release owner.

## Cross-project boundary

- Website engineering repo (private): `marvinmckinneyii0/savvy_analytics.co-`.
- Personal portfolio repo (public): `marvinmckinneyii0/marvinmckinneyii0`.
- Do not use CI/CD credentials from the private website repository to give the public portfolio access to private source, private deployments, or secrets.
- No GitHub Pages/public publication occurs from this feature branch until human-reviewed merge to the configured publishing branch.
