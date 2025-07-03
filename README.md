# Normes Web pour les sites de l'Université Laval #
Les normes comprennent l'entête et le pied de page pour tous les sites universitaires.

Les différentes cas d'utilisation sont démontrés dans les quatre gabarits du dépôt de code.

### Gabarits de référence ###
En fonction de votre type de site, utilisez le fichier HTML correspondant à votre URL:

* `ulaval.ca` devrait utiliser le gabarit `university.html`.
* `unite.ulaval.ca` devrait utiliser le gabarit `unit--no-submenu.html`.
* `unite.ulaval.ca/sous-unite` devrait utiliser le gabarit `subunit--with-submenu.html`.
* `sous-unite.unite.ulaval.ca` devrait utiliser le gabarit `subunit.html`.

### Structure de dossier ###
La structure de dossier suivante est recommandée pour la bonne compilation des styles et des scripts.

```bash
project/
├── assets/
│   ├── dist/
│   │   ├── css/
│   │   │   └── *.css
│   │   ├── favicon/
│   │   │   └── *.png
│   │   ├── fonts/
│   │   │   └── *.woff
│   │   ├── img/
│   │   │   └── *.jpg
│   │   ├── js/
│   │   │   └── *.js
│   │   └── svg/
│   │       └── *.svg
│   └── src/
│       ├── js/
│       │   └── *.js
│       └── scss/
│           └── *.scss
├── templates/
│   └── *.html.twig
├── .stylelintignore
├── .stylelintrc
├── package.json
├── package-lock.json
└── webpack.config.js
```

### Installation et utilisation du compilateur de code ###
```bash
# Install Node Package Manager (NPM)
npm install

# Watch folder and compile during development
npm run watch

# Build for production before any commits
npm run build
```

### Documentation ###
Documentation des normes sur le Guide des ressources Web, section [En-tête](https://ressourcesweb.ulaval.ca/identite-visuelle/en-tete/) et [Pied de page](https://ressourcesweb.ulaval.ca/identite-visuelle/pied-de-page/)

### Soutien à l'installation ###
Contacter [info@bsw.ulaval.ca](mailto:info@bsw.ulaval.ca) pour obtenir de l'aide.

### Demande d'évolution et correctifs ###
Les demandes d'évolution sont les bienvenus sous forme de *pull request*.

Pour les problèmes majeurs, veuillez ouvrir un billet en écrivant à [info@bsw.ulaval.ca](mailto:info@bsw.ulaval.ca) en expliquant comment reproduire le problème.
