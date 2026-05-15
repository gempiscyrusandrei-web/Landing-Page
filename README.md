# Neuralift Systems Website

Premium static multi-page AI automation agency website built with HTML, CSS, JavaScript, Inter, and AOS animations.

## Pages

- `index.html` - home page
- `services.html` - premium AI automation services
- `pricing.html` - package cards with Growth highlighted
- `contact.html` - business inquiry form, FAQ, floating WhatsApp button
- `waitlist.html` - lead capture waitlist form with thank-you state

## Lead Automation Setup

The forms are ready for Netlify Forms by default. Deploy to Netlify, open **Site configuration > Forms**, and Netlify will collect submissions for `contact` and `waitlist`.

To send submissions to `cyrusandreihgempis@gmail.com`:

1. In Netlify, go to **Forms > Form notifications**.
2. Add an email notification for both `contact` and `waitlist`.
3. Set recipient to `cyrusandreihgempis@gmail.com`.
4. Enable spam filtering. The forms already include `data-netlify-recaptcha="true"` and reCAPTCHA slots for Netlify.

### Formspree Alternative

1. Create a Formspree form at `https://formspree.io`.
2. Set the recipient email to `cyrusandreihgempis@gmail.com`.
3. Replace each form `action="/"` with your Formspree endpoint, such as `https://formspree.io/f/YOUR_FORM_ID`.
4. Add `data-async="true"` to the form if you want the JavaScript success state without a page reload.
5. Configure Formspree's autoresponder using the template below.

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
- Use honeypot fields, currently included as `website`.
- Validate and sanitize inputs on the frontend and again in the form provider or serverless function.
- Never place private API keys, SMTP passwords, or CRM tokens in frontend JavaScript.
- Use environment variables for serverless functions and provider dashboards.
- Enable rate limiting through Cloudflare, Netlify Edge Functions, or the chosen form provider.
- Use Cloudflare bot protection, WAF rules, and email address obfuscation to reduce scraping and spam.
- Keep Content Security Policy restrictive. Add domains only when integrations require them.
- Review form submissions before connecting automations that write to CRM or send outbound emails.
- For GitHub Pages, use a third-party form provider with spam filtering because Pages cannot process server-side forms.

## GitHub Pages Deployment

1. Push the folder to a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Choose the main branch and root folder.
4. Add a custom domain if needed and enforce HTTPS.
5. Use Formspree or EmailJS for forms because GitHub Pages is static.

## Netlify Deployment

1. Drag the folder into Netlify Drop or connect the GitHub repository.
2. Keep the publish directory as the repository root.
3. Confirm Netlify detects the `contact` and `waitlist` forms after first deploy.
4. Add form notifications to send leads to `cyrusandreihgempis@gmail.com`.
5. Enable HTTPS, deploy previews, spam filtering, and security headers.

## Local Preview

Open `index.html` directly in a browser, or run a local static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.
