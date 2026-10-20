# Amora School of Love — Mini Reset

Live website: https://nelihevir.github.io/
Repository: https://github.com/nelihevir/nelihevir.github.io

Static HTML, CSS and JavaScript in `site/`. No build dependencies. Preview with `python3 -m http.server 8080 --directory site`.

Every push to `main` publishes `site/` through `.github/workflows/pages.yml`.

## Signups

The primary Mini Reset signup uses the user-supplied MailerLite form `201841479851705858` (callback `47366701`). Email is its only field. The owner confirmed successful end-to-end signup and receipt of the Day 1 email on 20 October 2026. At the owner’s explicit request, the page uses final Mini Reset signup copy without a coming-soon label. The success message confirms the signup and suggests checking the inbox; it does not claim that the first lesson has already been sent. MailerLite form submission can add subscribers; the website cannot activate the account's email workflow.

The separate community signup uses form `160030360653006212` (callback `28441096`). Its email and country fields remain required; first name is optional. These forms have independent success callbacks. MailerLite invokes them after successful submission. No success state is shown merely from a button click. No API keys or subscriber details are stored in this repository.

The Mini Reset form is connected to the owner’s active MailerLite automation. Expected sequence: Day 1 email, delay one day, Day 2 email, delay one day, Day 3 email. Verify delivery with an owner-controlled address. The page is already prepared with final signup copy. No new HTML code is necessary if this same form is retained.

## Design and content

Cream, sage and blush palette, responsive layout, keyboard accessible form and FAQ, native sharing with clipboard fallback, page metadata. Portrait and biographical facts come from the existing public Amora MailerLite page; portrait is compressed locally. External fonts load from Google Fonts. The MailerLite embedded-form script is the only external application script. No custom analytics or artificial deadlines/testimonials.

Unused source image downloads are retained under ignored `.tools/source-assets/`, outside the published site.

Hero photo: owner-provided `DSCF8506-LR.jpg`, optimized as `site/assets/neli-beach.jpg`. The guide portrait remains `neli-amora.jpg`.

The Mini Reset email form appears directly in the hero. Other signup calls to action link back to that single form, preserving a unique form ID and success callback.
