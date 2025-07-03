# Changelog #
Changelog du projet des **Normes Web pour les sites de l'Université Laval**

## [v1.4] - 2025-06-26
### Changements visuels
* Changements importants des styles de titre, d'espacement, de hauteur de ligne et des hyperliens
### Changements dans le pied de page
* Ajout du réseau social Bluesky dans le pied de page
* Rendre _Mesures d'urgence_ facultatif
### Formulaire de recherche
* Ajout d'un paramètre permettant de modifier le nom de l'input du formulaire de recherche en entête
* Rendre le ARIA traduisible
* Retrait de l'option "Bottin" en faveur d'un lien de menu secondaire
### Correctifs mobiles
* Correctif du menu mobile visuellement coupé sur iOS dans certains cas
* Correctif de l'alignement des éléments de menu dans certains cas

## [v1.3] - 2024-07-08
### Ajout de bouton de préférences
* Ajout d'un bouton permettant de revoir le choix des préférences de la bannière de consentement.

### Ajustement du texte de remplacement de recherche
* Le bouton pour fermer la rechercher portait le libellé chercher au lieu de fermer.

## [v1.2.2] - 2024-06-11
### Ajustement et changement de logos
* Le logo de Twitter a été remplacé par celui de X
* Toutes les mentions à Twitter ont été remplacées par X
* Le logo de Facebook a été ajusté afin de respecter les normes du logo

### Ajustement de l'année en cours
* L'année 2023 a été changée à 2024 dans le copyright de chacun des templates

## [v1.2.1] - 2023-12-14
### Changements au DOM
* Un lien pour un courriel de contact a été ajouté à la fin du paragraphe `footer-address-infos accessible-links-wrapper` :<br/>
[Voir sur Bitbucket | university.html | lignes 329 à 332](https://bitbucket.org/ulavalbsw/normes_web/src/7140da2e203c62e60f502c3311c8b8d9d157b63d/university.html?at=feature%2FBSW-2876_ajout_champ_courriel_pied_de_page#lines-329:332)
```html
<p class="footer-address-infos accessible-links-wrapper">

    <!-- @TODO: Replace address and google maps link with your own -->
    <a class="address" href="https://www.google.com/maps/place/2325+Rue+de+l'Universit%C3%A9,+Qu%C3%A9bec,+QC+G1V+0B4,+Canada" target="_blank" rel="noopener"><span class="contact-row">2325,&nbsp;rue&nbsp;de&nbsp;l'Université,</span> <span class="contact-row">Québec&nbsp;(Québec)&nbsp;G1V&nbsp;0A6</span></a>
    <br />

    <!-- @TODO: Replace phone numbers with your own -->
    <span class="contact-row">Téléphone: <a class="tel" href="tel:+14186562131">418&nbsp;656-2131</a></span>
    <span class="contact-row">Sans&nbsp;frais:&nbsp;<a class="tel" href="tel:+18777852825">1&nbsp;877&nbsp;785-2825</a></span>
    <br />

    <!-- @TODO: Replace email with your own -->
    <span>Courriel: <a class="mail" href="mailto:courriel@ulaval.ca">courriel@ulaval.ca</a></span>
</p>
```

### Changements aux styles
* Un SCSS a été mis à jour. Remplacer l'élément suivant avec la nouvelle version :
    * `/assets/src/scss/layout/footer.scss`
* Recompiler le SCSS, avec vos paramètres dans le SCSS de configuration `_settings.scss`

## [v1.2] - 2023-10-19
### Changements au DOM
* La structure du bouton bascule de recherche `header-search-trigger` a changé pour la suivante :<br/>
[Voir sur Bitbucket | university.html | lignes 98 à 113](https://bitbucket.org/ulavalbsw/normes_web/src/89e88d0/university.html?at=master#lines-98:113)
```html
<button type="button" class="header-search-trigger header-main-utilities-action" aria-expanded="false" aria-controls="header-search" aria-label="Chercher">
    <span class="switch-toggle switch-toggle--close">
        <!-- @TODO: Include this SVG as an inline SVG -->
        <!-- ./assets/dist/svg/close.svg -->
    </span>
    <span class="switch-toggle switch-toggle--search">
        <!-- @TODO: Include this SVG as an inline SVG -->
        <!-- ./assets/dist/svg/search.svg -->
    </span>
</button>
```
* La structure de la composante du sélecteur de langues `header-language-switcher` a changé pour la suivante :<br/>
[Voir sur Bitbucket | university.html | lignes 155 à 177](https://bitbucket.org/ulavalbsw/normes_web/src/89e88d0/university.html?at=master#lines-155:177)
```html
<nav class="header-language-switcher">
    <button type="button" class="header-language-switcher-trigger header-main-utilities-action" aria-expanded="false" aria-controls="header-language-switcher-list" aria-label="Langue actuelle : Français, Sélectionnez votre langue">
        <span aria-hidden="true" aria-role="presentation">fr</span>

        <!-- @TODO: Include this SVG as an inline SVG -->
        <!-- ./assets/dist/svg/chevron-right-angle-down.svg -->
    </button>
    <ul id="header-language-switcher-list" class="header-language-switcher-list menu" role="listbox" aria-label="Sélectionnez une langue" hidden>
        <li class="header-language-switcher-list-item" role="option" tabindex="-1" aria-posinset="1" aria-setsize="2" aria-selected="false">
        <a href="#">
            <span lang="en" aria-label="English">en</span>
        </a>
        </li>
        <li class="header-language-switcher-list-item" role="option" tabindex="-1" aria-posinset="2" aria-setsize="2" aria-selected="false">
        <a href="#">
            <span lang="es" aria-label="Español">es</span>
        </a>
        </li>
    </ul>
</nav>
```
* La structure du bouton de menu mobile `header-menu-trigger` a changé pour la suivante :<br/>
[Voir sur Bitbucket | university.html | lignes 179 à 193](https://bitbucket.org/ulavalbsw/normes_web/src/89e88d0/university.html?at=master#lines-179:193)
```html
<button type="button" class="header-menu-trigger header-main-utilities-action" aria-expanded="false" aria-controls="ul-mobile-menu">
    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/menu.svg -->

    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/close.svg -->

    <span class="screen-reader-text visually-hidden">Ouvrir le menu principal</span>
</button>
```
* L'input avec l'ID `search-in--website` a maintenant l'attribut `checked="checked"`
* La structure du bouton `header-search-button` a changé pour la suivante :<br/>
[Voir sur Bitbucket | university.html | lignes 266 à 272](https://bitbucket.org/ulavalbsw/normes_web/src/89e88d0/university.html?at=master#lines-266:272)
```html
<button class="header-search-button" tabindex="0" type="submit" value="" aria-label="Chercher">
    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/search.svg -->
</button>
```
* Dans `footer-navigation`, le texte du titre `footer-navigation-title` avec le libellé `Carrière à l'UL` a changé pour `Carrière`
* Dans `footer-legal`, le texte du lien avec le libellé `Avis de confidentialité` a changé pour `Confidentialité`
* Dans `footer-logo`, le `logo-ul-footer.svg` est remplacé par `logo-ul-city.svg`
* La structure de la composante `header-secure-area` a changé pour la suivante :
    * Lorsque l'utilisateur est déconnecté<br/>
    [Voir sur Bitbucket | unit--with-submenu.html | lignes 106 à 112](https://bitbucket.org/ulavalbsw/normes_web/src/89e88d0/unit--with-submenu.html?at=master#lines-106:112)
    ```html
    <a href="#" class="header-main-utilities-action" aria-label="Espace sécurisé" title="Espace sécurisé">
    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/user-void.svg -->
    </a>
    ```
    * Lorsque l'utilisateur est connecté<br/>
    [Voir sur Bitbucket | unit--with-submenu.html | lignes 115 à 143](https://bitbucket.org/ulavalbsw/normes_web/src/89e88d0/unit--with-submenu.html?at=master#lines-115:143)
    ```html
    <nav class="header-secure-area">
        <button type="button" id="ul-secure-menu-button" aria-haspopup="true" class="header-secure-area-trigger header-main-utilities-action" aria-expanded="false" aria-controls="ul-secure-menu" aria-label="Ouvrir le menu sécurisé" title="Espace sécurisé">
            <!-- @TODO: Include this SVG as an inline SVG -->
            <!-- ./assets/dist/svg/user-filled.svg -->

            <!-- @TODO: Include this SVG as an inline SVG -->
            <!-- ./assets/dist/svg/chevron-right-angle-down.svg -->
        </button>

        <ul id="header-secure-area-list" class="header-secure-area-list menu" role="listbox" aria-label="Faites un choix" hidden>
            <li class="header-secure-area-list-item" role="option" tabindex="-1" aria-posinset="1" aria-setsize="2" aria-selected="false">
            <a href="#">
                <span>Espace sécurisé</span>
            </a>
            </li>
            <li class="header-secure-area-list-item" role="option" tabindex="-1" aria-posinset="2" aria-setsize="2" aria-selected="false">
            <a href="#">
                <span>Déconnexion (IDUL00)</span>
            </a>
            </li>
        </ul>
    </nav>
    ```
#### Spécifique aux sites des unités
* Le div `header-tools` est retirée en conservant son contenu
#### Spécifique aux sites des sous-unités, en répertoire ou en sous-domaine
* Le div `header-tools` est retirée en conservant son contenu
* La structure du bouton de menu secondaire `header-sub-nav-button` a changé pour la suivante :<br/>
[Voir sur Bitbucket | unit--with-submenu.html | lignes 277 à 284](https://bitbucket.org/ulavalbsw/normes_web/src/89e88d0/unit--with-submenu.html?at=master#lines-277:284)
```html
<button type="button" class="header-sub-nav-button" aria-expanded="false" aria-controls="header-sub-nav-main" aria-label="Menu de sous-navigation">
    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/chevron-right-angle-down.svg -->
</button>
```

### Changements aux styles
* Dans le SCSS de configuration, un paramètre a changé. Remplacer les instances de l'ancienne variable :
    * `/assets/src/scss/abstracts/_settings.scss`: `$menu-is-always-mobile` devient `$always-force-mobile-menu`
* Plusieurs SCSS ont été mis à jour de façon importante. Remplacer les éléments suivants avec la nouvelle version :
    * `/assets/src/scss/layout/header.scss`
    * `/assets/src/scss/layout/_header-with-submenu.scss`
    * `/assets/src/scss/layout/footer.scss`
* Les SCSS suivants ont été retirés avec leurs styles réintégrés ailleurs. Supprimer les éléments suivants :
    * `/assets/src/scss/normes.scss`
    * `/assets/src/scss/normes/_icons.scss`
    * `/assets/src/scss/normes/_secure.scss`
* Recompiler le SCSS, avec vos paramètres dans le SCSS de configuration `_settings.scss`

### Changements aux scripts
* Le script normes.js a été mis à jour. Remplacer avec la nouvelle version :
    * `/assets/src/js/normes.js`: Correctif d'un sélecteur pour le menu sécurisé
* Recompiler le JS

### Changements aux icônes
* Les icônes suivantes ont été ajoutées :
    * `/assets/dist/svg/chevron-obtuse-angle-left.svg`
    * `/assets/dist/svg/chevron-right-angle-down.svg`
    * `/assets/dist/svg/close.svg`
    * `/assets/dist/svg/logo-ul-city.svg`
    * `/assets/dist/svg/menu.svg`
    * `/assets/dist/svg/search.svg`
    * `/assets/dist/svg/user-filled.svg`
    * `/assets/dist/svg/user-void.svg`
* Plusieurs icônes ont été mises à jour. Remplacer les éléments suivants avec la nouvelle version :
    * `assets/dist/svg/social-flickr.svg`
    * `assets/dist/svg/social-vimeo.svg`
* Les icônes suivantes ont été retirées. Supprimer les éléments suivants :
    * `/assets/dist/svg/chevron-bottom.svg`
    * `/assets/dist/svg/chevron-left.svg`
    * `/assets/dist/svg/logo-ul-footer.svg`

## [v1.1] - 2023-08-29
* Ajout de 2 icônes de réseaux sociaux
* Ajout d'une `mixin` pour faciliter le contrôle des `z-index`
* Ajout d'effet `hover` dans l'entête
* Ajout d'un séparateur dans le pied de page entre la section droits d'auteurs et la section de liens légaux
* Ajout d'un input sélectionné par défaut dans le formulaire de recherche en entête
* Remplacement du logo UL dans le pied de page
* Changement dans l'implantation des favicons
* Corrections typographiques

## [v1.0] - 2023-08-16
* Lancement de la première version des Normes Web
