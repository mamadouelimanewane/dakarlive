# 🤝 Guide de Contribution - DakarLive

Merci de votre intérêt pour contribuer à **DakarLive** ! Ce document vous guidera à travers le processus de contribution.

## 📋 Table des Matières

1. [Code de Conduite](#code-de-conduite)
2. [Comment Contribuer](#comment-contribuer)
3. [Processus de Développement](#processus-de-développement)
4. [Standards de Code](#standards-de-code)
5. [Soumettre une Pull Request](#soumettre-une-pull-request)
6. [Signaler un Bug](#signaler-un-bug)
7. [Proposer une Fonctionnalité](#proposer-une-fonctionnalité)

## 📜 Code de Conduite

En participant à ce projet, vous acceptez de respecter notre code de conduite :

- **Respectueux** : Traitez tout le monde avec respect
- **Constructif** : Fournissez des critiques constructives
- **Inclusif** : Accueillez les nouveaux contributeurs
- **Professionnel** : Maintenez un environnement professionnel

## 🚀 Comment Contribuer

Il existe plusieurs façons de contribuer à DakarLive :

### 1. Ajouter des Événements
- Proposez de nouveaux événements réels de Dakar
- Vérifiez l'exactitude des informations
- Incluez tous les détails nécessaires

### 2. Améliorer le Design
- Proposez des améliorations visuelles
- Optimisez l'expérience utilisateur
- Assurez la cohérence du design system

### 3. Corriger des Bugs
- Identifiez et corrigez les bugs
- Testez vos corrections
- Documentez les changements

### 4. Ajouter des Fonctionnalités
- Proposez de nouvelles fonctionnalités
- Discutez-en d'abord via une issue
- Implémentez selon les standards

### 5. Améliorer la Documentation
- Corrigez les fautes de frappe
- Clarifiez les instructions
- Ajoutez des exemples

## 💻 Processus de Développement

### 1. Fork le Projet
```bash
# Cliquez sur "Fork" sur GitHub
# Clonez votre fork
git clone https://github.com/VOTRE-USERNAME/dakarlive.git
cd dakarlive
```

### 2. Créez une Branche
```bash
# Créez une branche pour votre fonctionnalité
git checkout -b feature/nom-de-la-fonctionnalite

# Ou pour un bug fix
git checkout -b fix/nom-du-bug
```

### 3. Faites vos Modifications
```bash
# Éditez les fichiers nécessaires
# Testez vos changements localement
python -m http.server 8000
```

### 4. Committez vos Changements
```bash
# Ajoutez vos fichiers
git add .

# Committez avec un message descriptif
git commit -m "feat: ajout du filtre par prix"
```

### 5. Pushez vers GitHub
```bash
git push origin feature/nom-de-la-fonctionnalite
```

### 6. Créez une Pull Request
- Allez sur GitHub
- Cliquez sur "New Pull Request"
- Remplissez le template
- Attendez la review

## 📝 Standards de Code

### HTML
```html
<!-- Utilisez l'indentation à 4 espaces -->
<!-- Utilisez des balises sémantiques -->
<section class="hero">
    <div class="container">
        <h1>Titre</h1>
    </div>
</section>
```

### CSS
```css
/* Suivez l'ordre des propriétés */
.element {
    /* Positionnement */
    position: relative;
    top: 0;
    
    /* Box Model */
    display: flex;
    width: 100%;
    padding: 1rem;
    
    /* Typographie */
    font-size: 1rem;
    color: var(--text-primary);
    
    /* Visuel */
    background: var(--bg-primary);
    border-radius: var(--radius-md);
    
    /* Animations */
    transition: all var(--transition-base);
}
```

### JavaScript
```javascript
// Utilisez ES6+
// Nommage en camelCase
// Commentez le code complexe

function filterEvents() {
    // Logique de filtrage
    return eventsData.filter(event => {
        // Conditions de filtrage
        return condition;
    });
}
```

### Conventions de Nommage

#### Variables et Fonctions
```javascript
// camelCase pour variables et fonctions
const eventsList = [];
function renderEvents() {}
```

#### Classes CSS
```css
/* kebab-case pour les classes */
.event-card {}
.filter-section {}
```

#### Constantes
```javascript
// UPPER_SNAKE_CASE pour les constantes
const MAX_EVENTS_PER_PAGE = 10;
const API_BASE_URL = 'https://api.dakarlive.sn';
```

## 🔍 Soumettre une Pull Request

### Template de Pull Request

```markdown
## Description
Brève description des changements

## Type de Changement
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Amélioration
- [ ] Documentation

## Checklist
- [ ] Mon code suit les standards du projet
- [ ] J'ai testé mes changements
- [ ] J'ai mis à jour la documentation
- [ ] Mes commits sont clairs et descriptifs
- [ ] J'ai ajouté des tests si nécessaire

## Screenshots (si applicable)
Ajoutez des captures d'écran

## Notes Additionnelles
Informations supplémentaires
```

## 🐛 Signaler un Bug

### Template d'Issue pour Bug

```markdown
## Description du Bug
Description claire et concise

## Étapes pour Reproduire
1. Allez sur '...'
2. Cliquez sur '...'
3. Faites défiler jusqu'à '...'
4. Observez l'erreur

## Comportement Attendu
Ce qui devrait se passer

## Comportement Actuel
Ce qui se passe réellement

## Screenshots
Si applicable

## Environnement
- OS: [ex: Windows 11]
- Navigateur: [ex: Chrome 120]
- Version: [ex: 1.0.0]

## Informations Additionnelles
Tout autre contexte
```

## 💡 Proposer une Fonctionnalité

### Template d'Issue pour Fonctionnalité

```markdown
## Description de la Fonctionnalité
Description claire de la fonctionnalité proposée

## Problème Résolu
Quel problème cette fonctionnalité résout-elle ?

## Solution Proposée
Comment cette fonctionnalité devrait-elle fonctionner ?

## Alternatives Considérées
Quelles autres solutions avez-vous envisagées ?

## Informations Additionnelles
Mockups, exemples, etc.
```

## 🎯 Priorités de Contribution

### Haute Priorité
- 🔴 Bugs critiques
- 🔴 Problèmes de sécurité
- 🔴 Problèmes de performance

### Priorité Moyenne
- 🟡 Nouvelles fonctionnalités
- 🟡 Améliorations UX/UI
- 🟡 Optimisations

### Basse Priorité
- 🟢 Documentation
- 🟢 Refactoring
- 🟢 Tests

## 📚 Ressources Utiles

### Documentation
- [README.md](README.md) - Vue d'ensemble du projet
- [QUICKSTART.md](QUICKSTART.md) - Guide de démarrage rapide
- [PRESENTATION.md](PRESENTATION.md) - Présentation détaillée

### Outils Recommandés
- **Éditeur** : VS Code, Sublime Text, WebStorm
- **Navigateur** : Chrome DevTools, Firefox Developer Edition
- **Design** : Figma, Adobe XD
- **Git** : GitKraken, SourceTree, GitHub Desktop

### Standards Web
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## 🏆 Reconnaissance des Contributeurs

Tous les contributeurs seront ajoutés au fichier CONTRIBUTORS.md et mentionnés dans les release notes.

### Types de Contributions Reconnues
- 💻 Code
- 🎨 Design
- 📖 Documentation
- 🐛 Bug Reports
- 💡 Idées
- 🌍 Traductions
- ⚠️ Tests

## 📞 Questions ?

Si vous avez des questions, n'hésitez pas à :
- Ouvrir une issue
- Nous contacter à dev@dakarlive.sn
- Rejoindre notre Discord (bientôt disponible)

## 🙏 Merci !

Merci de contribuer à DakarLive et d'aider à promouvoir la scène culturelle de Dakar ! 🇸🇳🎵

---

**Ensemble, faisons vibrer Dakar !**
