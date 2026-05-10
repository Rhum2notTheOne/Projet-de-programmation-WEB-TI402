# Site vitrine — Département Informatique EFREI Paris

Projet de programmation Web **TI402** — Année 2025-2026
Enseignant : M. Mohamed HAMIDI

---

## 🎯 Présentation

Site vitrine en **HTML5 / CSS3 / JavaScript pur** (aucun framework ni bibliothèque) présentant le département d'informatique de l'EFREI Paris, campus de Villejuif.

Le site comporte 4 pages reliées par un header et un footer communs, dans le respect strict de la charte graphique fournie.

---

## 📂 Structure du projet

```
site/
├── index.html          # Accueil — hero + carrousel + chiffres + actualités
├── formations.html     # Bachelors, Cycle Ingénieur, Alternance
├── equipe.html         # Corps enseignant, recherche, publications
├── contact.html        # Contact, admissions, FAQ, À propos
├── css/
│   └── style.css       # Feuille de styles unique (~600 lignes)
├── js/
│   └── main.js         # Toutes les interactions
└── img/                # Logos et illustrations SVG
    ├── logo-efrei.svg
    ├── slide-1-campus.svg
    ├── slide-2-labs.svg
    ├── slide-3-coworking.svg
    ├── slide-4-projets.svg
    ├── news-jpo.svg
    ├── news-conf.svg
    └── news-hackathon.svg
```

---

## 🎨 Charte graphique respectée

| Couleur | HEX | Usage |
|---|---|---|
| Bleu Académique | `#0A316C` | Fonds principaux, headers institutionnels |
| Blanc Pur | `#FFFFFF` | Typographie sur fond sombre, logo |
| Cyan Technologique | `#81ECEC` | Hovers, éléments interactifs, reflets tech |
| Jaune Électrique | `#FDCB6E` | Call-to-action secondaires, accents |

**Typographies :** Montserrat (titres) + Open Sans (corps) via Google Fonts.
**Identité visuelle :** ambiance dark-mode, néons cyan/jaune, hero banners avec découpe diagonale (`clip-path`), puces triangulaires (▶).

---

## ⚙️ Fonctionnalités JavaScript

- **Carrousel hero** : autoplay 5 s, flèches, dots de navigation, swipe tactile
- **Menu hamburger** responsive (≤768 px)
- **Onglets de formations** : filtrage dynamique Bachelors / Cycle Ingénieur / Alternance
- **FAQ accordéon** : un seul item ouvert à la fois
- **Validation de formulaire** : nom (≥2), email (regex), message (≥10), feedback inline
- **Animations au scroll** : `IntersectionObserver` pour fade-up à l'apparition

---

## 📱 Responsive design

- Mobile-first via `<meta viewport>`
- Breakpoints CSS : 1024 px (tablette), 768 px (mobile), 480 px (petit mobile)
- Header transformé en hamburger sous 768 px
- Grilles converties en colonne unique sur petits écrans

---

## ✅ Conformité W3C

- `<!DOCTYPE html>` HTML5 sur toutes les pages
- Tags sémantiques : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Attributs ARIA et `alt` sur toutes les images
- Pages testées sans erreur de balise

---

## 🚀 Lancement

Ouvrir `index.html` dans un navigateur moderne. Aucune dépendance, aucun build, aucun serveur requis.

```bash
# Sous Linux/macOS, optionnellement :
python3 -m http.server 8000
# puis http://localhost:8000
```

---

## 👥 Membres du projet
- Benjamin Bouchoucha
- Romain Malot

---

*Projet réalisé dans le cadre du module TI402 — EFREI Paris Panthéon-Assas Université.*
