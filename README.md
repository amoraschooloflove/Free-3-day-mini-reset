# Amora School of Love — Mini Reset

Live website: https://nelihevir.github.io/
Repository: https://github.com/nelihevir/nelihevir.github.io

Static HTML, CSS and JavaScript in `site/`. No build dependencies. Preview with `python3 -m http.server 8080 --directory site`.

Every push to `main` publishes `site/` through `.github/workflows/pages.yml`.

## Signups

The primary Mini Reset calls to action point to the existing public MailerLite page: https://free-3-day-mini-reset.subscribepage.io

The separate community signup uses the user-supplied MailerLite form `160030360653006212` (callback `28441096`). It currently adds subscribers to the community mailing list. **It is not confirmed to trigger the Mini Reset automation.** Keep these signups distinct until the corresponding MailerLite automation is activated and verified.

Email and country remain required, as in the provided embed; first name is optional. Optional surname was omitted. MailerLite handles submission and invokes the success callback. The success state must never appear merely from a button click. No API keys or subscriber details are stored in this repository.

To enable direct Mini Reset signup, create or select a dedicated MailerLite embedded form, connect it to the correct active automation, and replace the primary signup slot with that form. Email sequence: Day 1, delay one day, Day 2, delay one day, Day 3. If a different form is used, replace its action, fields, wrapper identifiers and success callback together. Verify with an owner-controlled address after configuration.

## Design and content

Cream, sage and blush palette, responsive layout, keyboard accessible form and FAQ, native sharing with clipboard fallback, page metadata. Portrait and biographical facts come from the existing public Amora MailerLite page; portrait is compressed locally. External fonts load from Google Fonts. The MailerLite embedded-form script is the only external application script. No custom analytics or artificial deadlines/testimonials.

Unused source image downloads are retained under ignored `.tools/source-assets/`, outside the published site.
