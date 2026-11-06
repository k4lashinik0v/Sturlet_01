# STURLET01 — Site oficial

Site estático feito em HTML, CSS e JavaScript, pronto para publicar no GitHub Pages.

## Publicar no GitHub
1. Extraia o arquivo ZIP.
2. Envie `index.html`, `style.css`, `script.js` e a pasta `assets` para a raiz do repositório.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, escolha `main` e `/ (root)`, e salve.

## Personalização
- Logo: `assets/logo-sturlet.png`
- Imagem da tela de carregamento: `assets/loading.gif`
- QR Code do YouTube: `assets/youtube-qr.jpg`
- QR Code do TikTok: `assets/tiktok-qr.png`

Os links de TikTok, YouTube e Discord já estão configurados no `index.html`.
A barra de carregamento avança enquanto os recursos carregam e conclui quando o navegador dispara o evento `load`.
