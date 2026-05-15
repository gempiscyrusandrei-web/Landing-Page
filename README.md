# Neuralift Systems Website

Premium static multi-page AI automation agency website built with HTML, CSS, JavaScript, Inter, and AOS animations.

## Pages

- `index.html` - home page
- `services.html` - premium AI automation services
- `pricing.html` - package cards with Growth highlighted
- `contact.html` - business inquiry form, FAQ, floating WhatsApp button
- `waitlist.html` - lead capture waitlist form with thank-you state

## Lead Automation Setup

The forms use the best match for this static website: **Formspree with Vanilla JS/Ajax**.

Both `contact.html` and `waitlist.html` submit to:

```text
https://formspree.io/f/xykoqbdg
```

To send submissions to `cyrusandreihgempis@gmail.com`:

1. Open the Formspree dashboard for form `xykoqbdg`.
2. Confirm the recipient email is `cyrusandreihgempis@gmail.com`.
3. Enable spam protection, CAPTCHA, and domain allowlisting.
4. Enable an autoresponder using the thank-you template below.
5. Test both forms after deployment from the live domain.

### EmailJS Alternative

Use EmailJS only with a public key intended for browser use. Never expose private SMTP credentials.

1. Create an EmailJS service and template.
2. Store the public key in frontend code only if it is restricted by domain.
3. Use reCAPTCHA and EmailJS domain allowlisting.
4. Send internal lead alerts to `cyrusandreihgempis@gmail.com`.
5. Send a second autoresponder email to the visitor.

## Thank You Email Template

Subject: Your Neuralift Systems automation request was received

Hi {{name}},

Thank you for reaching out to Neuralift Systems. We received your request and will review your business type, workflow goals, and automation needs.

Our team will look for opportunities to improve response speed, lead capture, sales replies, follow-ups, customer support, and repetitive workflows with AI.

You can expect a reply soon with next steps.

Best,
Neuralift Systems

## Security Best Practices

- Enforce HTTPS through Netlify, GitHub Pages with a custom domain, or Cloudflare.
- Keep `netlify.toml` security headers enabled and update the domain in redirects before launch.
- Add reCAPTCHA or Turnstile to all public forms.
- Use honeypot fields, currently included as `_gotcha`.
- Validate and sanitize inputs on the frontend and again in the form provider or serverless function.
- Never place private API keys, SMTP passwords, or CRM tokens in frontend JavaScript.
- Use environment variables for serverless functions and provider dashboards.
- Enable rate limiting through Cloudflare, Netlify Edge Functions, or the chosen form provider.
- Use Cloudflare bot protection, WAF rules, and email address obfuscation to reduce scraping and spam.
- Keep Content Security Policy restrictive. Add domains only when integrations require them.
- Review form submissions before connecting automations that write to CRM or send outbound emails.
- For GitHub Pages, Formspree handles the server-side form processing and spam filtering.

## GitHub Pages Deployment

1. Push the folder to a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Choose the main branch and root folder.
4. Add a custom domain if needed and enforce HTTPS.
5. Keep the Formspree endpoint in the form `action` attributes because GitHub Pages is static.

## Netlify Deployment

1. Drag the folder into Netlify Drop or connect the GitHub repository.
2. Keep the publish directory as the repository root.
3. Keep Formspree as the form backend, or intentionally switch back to Netlify Forms.
4. Enable HTTPS, deploy previews, and security headers.

## Local Preview

Open `index.html` directly in a browser, or run a local static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.
