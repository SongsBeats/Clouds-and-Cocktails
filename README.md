# Clouds & Cocktails

Responsive React/Vite implementation of the supplied CNC Dubai Figma designs. The Figma imagery and display fonts are bundled locally in `assets/`.

## Pages

- `/` — full Clouds & Cocktails homepage
- `/events` — featured event and filtered event listing
- `/events/clouds-after-dark` — full event detail and ticket tiers
- `/calendar` — August 2026 event calendar

Navigation, event filters, news controls, mobile menu, and booking/member forms are interactive.

Temporary demo member login:

- Email: `member@cnc.dxb`
- Password: `Clouds2026!`

## Local development

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:3000`.

On Windows, if npm misreads a workspace path containing `&`, start Vite directly:

```powershell
node .\node_modules\vite\bin\vite.js --port 3000 --host 0.0.0.0
```

## Validation

```bash
npm run lint
npm run build
```
