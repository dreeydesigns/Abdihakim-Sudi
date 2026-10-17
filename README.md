# Abdihakim Sudi — Dextron-inspired Professional Profile

A mobile-first, premium digital business card and professional profile for **Abdihakim Sudi**, listed as **Regional Manager at Dauus Company**, based in Somalia. The design follows Dextron Enterprise's documented corporate palette and typographic style without representing that Sudi is personally employed by Dextron.

## Included

- Responsive single-page profile: `index.html`, `styles.css`, `script.js`
- Optimized portrait in `assets/sudi-portrait.webp` (original supplied picture retained at `assets/original-sudi-photo.jpg`)
- Downloadable vCard: `abdihakim-sudi.vcf`
- Scannable-site-friendly layout with quick mobile Call, Email, and Save actions
- Open Graph and SEO metadata, accessible interactions, social links, and a share button
- No build step or third-party JavaScript dependencies

## Design system

- Dextron navy: `#1E5A8E`
- Enterprise orange: `#F7941D`
- White and soft navy-tinted backgrounds
- Poppins for headings/buttons; Nunito for body text

**Brand note:** The site uses a typographic, Dextron-inspired identity; it does not reproduce the exact official Dextron logo artwork. Replace the header/footer text treatment with the approved vector logo if supplied. Dextron is described as a business partner of Dauus according to the Dextron Enterprise brand book, **not** as Sudi's employer.

## Contact-data review before printing QR codes

The phone and email fields below came from the *uploaded original profile HTML*, not from independently verified contact records. Confirm directly with Sudi before publishing widely:

- `+254 742 309 661`
- `a.sudi@dauus.com`
- `a.sudi@dextron.co.ke`

## Preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` from the project folder and visit `http://localhost:8000`.

## GitHub Pages

1. Push all files in this folder to `dreeydesigns/Abdihakim-Sudi` on the `main` branch.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, root `/`.
4. Wait for GitHub to report a successful deployment. The expected address is `https://dreeydesigns.github.io/Abdihakim-Sudi/` after Pages is enabled.
5. Test the site on a real smartphone before generating your final printed QR code.
6. Direct your QR code to the confirmed live URL, not the repository source-code URL.

## Sources and accuracy

Professional identity, title, company and geography: linked public professional profile and supplied existing HTML. Dauus/Dextron company connection and brand styling: *Dextron Enterprise Comprehensive Brand Book & Style Guide* from the team's Drive. Company consumer brands are shown as organizational context, not Sudi's personal achievements.

This website should be reviewed and approved by Sudi before public promotion.

## Mobile experience (October 2026 refresh)

The mobile-specific refinements live in `mobile.css`, loaded after `styles.css`. They include a photo-first QR-code landing view, touch-friendly CTAs, compact verified-profile details, improved readability and contact cards, a navy/orange quick-action dock with accessible icons, and iPhone safe-area support. Desktop styles are unchanged.

Test at widths 320, 360, 390, 430, 768, and 1280px before publishing. The direct phone and email contact details remain editable in both `index.html` and `abdihakim-sudi.vcf`; verify them with Sudi before sharing the QR code publicly.
