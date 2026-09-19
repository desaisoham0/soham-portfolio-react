/**
 * Site feature flags.
 *
 * CONTACT_ENABLED — master switch for the contact form and every UI surface
 * that points at it (the #contact section, the navbar link, the Hero CTA).
 * Turned off while the form is being abused by spam. Nothing is deleted:
 * flip this back to `true` to restore all of it.
 *
 * The serverless handler in api/send_email.js is gated separately by the
 * CONTACT_FORM_ENABLED env var — the endpoint stays publicly reachable even
 * when this flag hides the UI, so both must be on to accept messages again.
 */
export const CONTACT_ENABLED = false;
