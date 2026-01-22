# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 3D Grind — project overview

This repository contains a small React + Vite project using react-three-fiber and Three.js assets to render a 3D scene (dog model and supporting textures/materials). It includes example components in `src/components/` and model/data in `public/models/`.

Features
- React + Vite development setup with HMR
- 3D model loading (GLB/DRC) and textures
- Git LFS configured for large binary assets (models & images)

Getting started (development)
1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the app in your browser at the URL Vite prints (usually http://localhost:5173).

Build for production

```bash
npm run build
```

Serve the production build locally:

```bash
npx serve dist
```

Notes about large files
- This repo uses Git LFS for model and image binaries. If you clone the repo, ensure Git LFS is installed and initialized on your machine (`git lfs install`).

Contributing
- Create a branch for your feature or bugfix: `git checkout -b feat/my-change`
- Commit changes and open a pull request.

License
- Add a license file if you want to make this project public. Currently no license is specified.

Contact
- For questions, open an issue or contact the repo owner.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
