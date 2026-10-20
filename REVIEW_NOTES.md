# Mini Reset — local pre-launch review

Status: local working-tree changes only. No commit, push, deployment, domain change, repository rename, account change or WordPress edit was performed for this task.

## Changes prepared

- Exact requested hero paragraph and metadata title/description, with the original main headline retained.
- Requested three audience experiences, plus the existing invitation and founder introduction.
- Clear immediate benefits: a few minutes per day, beginner friendly, delivered by email. The existing clear CTA stays unchanged.
- Improved post-signup and FAQ copy explains the email sequence without claiming that an email has already been delivered.
- Added the field and server error containers expected by the existing MailerLite script. Native email validation has an accessible inline explanation.
- Improved readability of small form copy on phones. Corrected portrait height metadata. Social preview reuses the existing beach photo; its absolute URL and canonical URL keep the existing GitHub Pages subpath.

The one-field form action, hidden fields, wrapper ID, success callback, deployment workflow, brand assets, colours, typography, section structure and founder biography are preserved. No new dependency or subscriber was created.

## Remaining launch requirements

### 1. Separate optional marketing consent in MailerLite

The owner previously confirmed that this form also joins the community mailing list. Its supplied HTML has only `fields[email]`, `ml-submit` and `anticsrf`; it contains no provider-configured marketing preference field or optional group choice. The current code therefore cannot truthfully offer a recorded opt-out from ongoing email marketing.

The local draft explicitly discloses the existing combined behavior. **This is not completion of the requested optional-consent flow and must be resolved before launch.** No disconnected checkbox or fabricated group/permission ID has been added.

For the existing Mini Reset form `201841479851705858`:

1. In MailerLite, make the form's automatically assigned group(s) specific to delivering the Mini Reset. Remove any unconditional addition to the general marketing audience, including such actions inside automations.
2. In the embedded form editor, add a real optional marketing preference (Marketing permissions or a separate optional Interest group). Leave it unticked and not required. Suggested label: “Yes, I’d also like occasional updates, new practices, and invitations from Amora School of Love.”
3. Keep Mini Reset automation entry and the three lesson emails independent of that marketing choice. Send ongoing marketing only to recipients whose recorded permission/group indicates that they chose it, rather than to all subscribers.
4. Save and export fresh HTML from this SAME form. Its actual field names, permission/group identifiers and any validation requirements must be used on the website. No permission identifiers should be invented.
5. Once the actual preference is integrated, replace the combined-signup disclosure with: “Receive your free 3-Day Mini Reset by email. You can also choose to receive occasional updates, new practices, and invitations from Amora School of Love.”
6. Test both unticked and ticked submissions with owner-authorized addresses: both receive the free reset; only the ticked subscriber enters the marketing audience, and the saved choice/source/timestamp can be located in MailerLite.

Reference: https://www.mailerlite.com/help/how-to-create-an-embedded-form

### 2. Actual privacy notice

No existing policy URL was supplied; the owner confirmed they do not currently have one identified. No placeholder, invented policy, generic claim of compliance, or link to a third party's policy has been presented as Amora's policy.

Prepare the actual notice for the newsletter/freebie processing, including the real controller identity and contact, purposes and applicable basis, MailerLite and other relevant recipients/processors, actual retention practices, rights and contact route, and any applicable transfers. These details need confirmation from the owner; they must not be guessed. A notice can live on the same GitHub Pages site, without connecting a custom domain.

Once reviewed, add a real “Privacy notice” link next to signup copy and in the footer. This remains incomplete until the notice and its actual URL are supplied or approved.

Slovenian Information Commissioner reference: https://www.ip-rs.si/obrazci/varstvo-osebnih-podatkov/

### 3. Bot protection — fresh embed integrated locally

The owner supplied an updated export of the SAME form containing real Google reCAPTCHA markup and its public site key. That challenge and its script are now integrated into the local styled form, preserving MailerLite's required validation class and existing endpoint. Narrow containers use Google's compact widget. The owner confirms Double opt-in is ON.

Verify CAPTCHA enforcement, failure, expiry, keyboard access and layout on the actual GitHub Pages hostname after approving publication. No challenge was solved or bypassed and no real subscriber was submitted. Double opt-in does not guarantee that bots never reach the pending/unconfirmed list. Preserve the active Mini Reset automation's connection to this form.

References:
- https://www.mailerlite.com/help/how-to-use-recaptcha
- https://www.mailerlite.com/help/how-to-use-double-opt-in-when-collecting-subscribers

## Manual end-to-end verification after account-side setup

No live subscription was submitted during this refinement. Use owner-approved test addresses only.

- Open the existing GitHub Pages URL, follow a signup CTA and submit with optional marketing unchecked. Complete CAPTCHA and email confirmation if enabled. Check the profile's consent/group membership and the Day 1 email. Check Day 2 and Day 3 at their actual scheduled times.
- Repeat with marketing checked. Confirm that the freebie still works and the marketing preference is separately recorded.
- Check a deliberately invalid email and a disconnected connection: show an understandable error and allow retry; do not display success.
- Verify the real privacy link, phone layout, keyboard navigation, and sharing target.
- Approve the local draft before any commit/push/deployment. The workflow publishes automatically on push to main.

## Verification completed locally

- Served the page under `/Free-3-day-mini-reset/`, with relative CSS, JS, image and icon paths resolving correctly.
- Checked 1440, 1024, 768, 390 and 320px widths: no horizontal overflow; one form and one H1; primary signup button within the tested first viewport; full-width footer preserved.
- All internal anchor targets exist. No JavaScript exceptions or browser error-level log entries were observed during initial loading and layout checks.
- The actual MailerLite script loaded and registered its handler. In a browser-only test, its AJAX transport and native submission were blocked: an example-domain address generated the expected endpoint/payload; simulated error responses displayed a visible error and allowed retry; simulated success displayed and focused confirmation. Success remained hidden before a successful response. No live test subscriber was created.
- Empty/invalid email explanations work; native validity accepts a correctly formatted address. This verifies formatting only, not deliverability.
- `git diff --check` passes. There is no package manifest, framework build, lint script or existing test runner; this is buildless static HTML/CSS/JS.
- Review screenshots: `.tools/review/desktop.png` and `.tools/review/mobile.png` (ignored local artifacts, outside the deployed `site/` directory).

Coordinate account-side CAPTCHA enforcement with integrating the fresh embed and approving its publication: the currently published HTML does not contain the challenge. Changing the same form's enforcement before updating the website may leave the live form unable to submit until the matching challenge is installed. This refinement has not changed account settings.


## Confirmation reminder refinement

The existing signup success panel now prominently asks visitors to check their inbox, explains why email confirmation may be needed, and gives short next steps. An expandable help area covers Promotions/Updates/Spam/Junk, moving Gmail messages to Primary and adding the sender to contacts, without promising inbox placement. This is an on-page reminder, not an additional email or automated resend.

The owner has now confirmed double opt-in is ON. The panel directly asks new subscribers to confirm their email. Help text explains that already-active subscribers may receive the reset without another confirmation email, consistent with MailerLite's documented behavior. The actual sender subject/address has not been guessed. This remains local-only.

MailerLite account checklist: form Overview → Double opt-in ON; verify the right form is connected to the active automation. In the Double opt-in tab, review the confirmation message and post-confirmation page. Custom editing of the confirmation email requires a paid plan; the standard email can still be used if custom editing is unavailable. Do not repurpose Day 1 as the confirmation email, and do not send the series to unconfirmed subscribers. Add a short inbox-placement hint to Day 1 independently, where the owner can edit it.

References: https://www.mailerlite.com/help/how-to-use-double-opt-in-when-collecting-subscribers and https://support.google.com/mail/answer/3094499

The CAPTCHA and confirmation wording updates received structural checks only; the browser layout and mocked transport checks above predate the CAPTCHA integration and must be repeated before publishing.
