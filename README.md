🧾Web_Glass.html
---

#📘Breve Descripción

Este archivo es una página estática HTML que implementa una interfaz tipo "glass" (efecto translúcido) y completamente responsive. 
Incluye layout con header, aside, main, sección de tarjetas (articles) y footer; modal/JS mínimo para el menú lateral en móviles; 
estilos centralizados con variables CSS en `:root`.

---

🧰 Características principales

- Diseño "glass" con variables CSS para personalización (colores, blur, sombras).
- Layout en CSS Grid: header / contenido / footer; aside en columna izquierda (overlay en móvil).
- Tarjetas (cards) con reflejo y borde neón animado al hover.
- Fondo con imagen (`cover.png`) y blobs decorativos (animados).
- Comportamiento responsive: aside se transforma en overlay con botón hamburger.
- Variables CSS para control rápido: color de acento, blur, sombras, etc.

---

## 🖼️ Vista previa
![Web_Glass](preview.gif)

--- 

## ✨ Pruebalo Online

[Maquetacion_Web](https://jcduro.bexartideas.com/proyectos/maquetacion_web/index.html)

--- 

## 📊 Lenguajes y Herramientas

[![My Skills](https://skillicons.dev/icons?i=html,css,js,github,vscode,windows,&theme=light&perline=8)](https://skillicons.dev)


---

💾 Uso

1. Coloca `web_glass.html` y `cover.png` en la misma carpeta.
2. Abre `web_glass.html` en el navegador (doble clic o `http://localhost/...` si sirves por servidor).
3. En pantallas estrechas usa el botón hamburger para abrir/cerrar el aside.

---

# Variables importantes (editar en :root)
- `--bg-1` — color base del fondo.
- `--accent-a`, `--accent-b` — gradientes/acento.
- `--glass-bg` — fondo de los paneles glass.
- `--glass-border` — borde de los paneles.
- `--glass-filter`, `--glass-backdrop` — valores `blur(...)` aplicados (aumentar para más desenfoque).
- `--glass-shadow` — sombra general.
- `--mirror` — color del brillo en el borde (sheen).

---

# Consejos de personalización

- Aumenta `--glass-filter` / `--glass-backdrop` para un efecto glass más marcado.
- Si `backdrop-filter` no se nota en tu navegador, aumenta `filter: blur(...)` en los elementos de fondo (blobs) como fallback.
- Ajusta `grid-template-columns` en `.layout` para cambiar la anchura del aside en escritorio.
- Para más tarjetas, añade más elementos `<article class="card glass">...</article>` dentro de `<section class="grid">`.

---

# Compatibilidad y notas

- `backdrop-filter` tiene soporte parcial en navegadores; Chrome, Edge y Safari recientes lo soportan mejor.
- Footer fluye con el documento; si se solapa al añadir mucho contenido, asegúrate que `main` use `overflow: visible` (ya configurado).

---

# Solución rápida de problemas

- Footer sube o queda detrás: verifica que `.layout` use `min-height:100vh` y que `main` no tenga `overflow:auto` fijo.
- Aside no ocupa toda la altura: `aside` está configurado para `align-self: stretch` y `overflow:auto` para scroll interno.
- Hover sheen no se ve: confirma que `.card` tenga `position:relative` y `overflow:hidden`.

---

# Licencia y créditos

- Diseño y código: JcDuro!. Adaptar y reutilizar libremente.
- Fuentes: Google Fonts (Nunito).

---

# Contacto

- Este README describe únicamente `web_glass.html`. Para integrar con otros scripts (PHP, servidor), revisa rutas y permisos de archivos si sirve desde XAMPP/Apache.
