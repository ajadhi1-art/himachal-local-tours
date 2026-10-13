# Himachal Local Tours — Website Starter

A responsive, bilingual (English/Hindi) static website with tour cards, destination highlights, about section, review placeholders and a WhatsApp booking form.

## Files
- `index.html` — website content and sections
- `style.css` — responsive design
- `script.js` — language switch, booking form and WhatsApp links

## Before publishing (important)
1. Open `script.js` in a text editor.
2. Find `const WHATSAPP_NUMBER = "91XXXXXXXXXX";`
3. Replace it with your WhatsApp number in international format, digits only. For India, use `91` followed by your 10-digit mobile number. Do not include `+`, spaces or hyphens.
4. Replace `CONTACT_PHONE` and `CONTACT_EMAIL` with your real details.
5. In `index.html`, edit the About section so it accurately describes your business. Replace review placeholders only with genuine customer reviews and permission.
6. Review the sample tour durations and destination descriptions. Add prices only when you know your actual rates.
7. Images currently load from Unsplash, and fonts load from Google Fonts. Internet access is needed for these assets. Replace image URLs with your own licensed images if preferred.

## Test locally
- Extract the ZIP file.
- Open `index.html` in Chrome or Edge.
- Fill in the booking form and submit it after configuring your WhatsApp number. It should open WhatsApp with a pre-filled message. It does not automatically confirm a booking.

## Publish free with GitHub Pages
1. Sign in or create an account at https://github.com/
2. Create a new **public** repository named `himachal-local-tours` (or another available name).
3. Upload `index.html`, `style.css`, `script.js`, and this README to the repository root. Do not upload the ZIP as the only file; GitHub Pages needs the extracted files.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then click **Save**.
7. Wait a few minutes. GitHub will show the published website URL in Settings → Pages, usually `https://YOUR-USERNAME.github.io/himachal-local-tours/`.
8. Open the URL on your phone and test every link and the WhatsApp form.

## Before promoting your website
- Add a real phone number, email and business location/service area.
- Use genuine reviews only; sample reviews are clearly marked as placeholders.
- State what's included/excluded and cancellation terms before accepting paid bookings.
- Confirm applicable local guide, transport, business and tax requirements for the services you offer.
- Use only photos you own or have permission to use.
- GitHub Pages is static hosting: the form opens WhatsApp; it does not store inquiries or process payments.
