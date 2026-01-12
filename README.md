# BetterHealth (GitHub Pages)

## Quick publish
1. Create a GitHub repo (public).
2. Upload **index.html**, **styles.css**, **script.js**, and the **assets/** folder to the repo root.
3. Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **main** → Folder: **/(root)**.
4. Your site will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Make the contact form send messages
GitHub Pages is static, so the form doesn't email by itself.
Easy options:
- **Formspree**: create a form endpoint and add `action="https://formspree.io/f/XXXX"` and `method="POST"` on the `<form>`.
- **Netlify Forms**: if you deploy via Netlify, add `data-netlify="true"` on the `<form>`.

Replace the contact details on the page with your real address/phone/email.
