# Fernando Méndez — Portafolio

Portafolio personal de ingeniería de datos: https://mendezfernando.github.io/

## Stack
![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)

## Estructura
```
public/              íconos (svg/) y favicon.svg
public/docs/cv.pdf   CV descargable
src/
├── pages/index.astro        página principal (arma las secciones)
├── components/              secciones: home, projects, aboutMe, contact, footer
├── collections/experiences.json   experiencia laboral (timeline)
├── React/                   componentes interactivos
└── layouts/Layout.astro     <head>, colores globales
```

## Trabajar en local
```
npm install      # solo la primera vez o si cambian dependencias
npm run dev      # abre http://localhost:4321 con recarga automática
npm run build    # compila a dist/ igual que en GitHub (para verificar)
```

## Publicar
Cada `git push` a `main` dispara `.github/workflows/astro.yml`, que compila
el sitio y lo publica en GitHub Pages en 1–2 minutos.
