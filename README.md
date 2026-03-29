# psychologue-nancy-florent-simon.fr

Site vitrine statique du cabinet de psychologie (Florent Simon, Nancy), généré avec [Astro](https://astro.build/) 6.

## Prérequis

- Node.js **22.12** ou supérieur (voir `.nvmrc`)

## Commandes

```bash
npm install
npm run dev      # développement
npm run build    # sortie dans dist/
npm run preview  # prévisualisation du build
```

## Déploiement

Le dépôt est prévu pour **Netlify** (`netlify.toml` : build `npm run build`, dossier `dist`).

Les images décoratives attendues sous `public/img/` ne sont pas versionnées ; à ajouter localement ou sur l’hébergement si besoin.
