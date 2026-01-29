# 🚀 Guide de Déploiement - DakarLive

Ce guide vous explique comment déployer **DakarLive** sur différentes plateformes d'hébergement.

## 📋 Table des Matières

1. [Déploiement sur Vercel](#déploiement-sur-vercel)
2. [Déploiement sur Netlify](#déploiement-sur-netlify)
3. [Déploiement sur GitHub Pages](#déploiement-sur-github-pages)
4. [Déploiement sur un Serveur VPS](#déploiement-sur-un-serveur-vps)
5. [Configuration DNS](#configuration-dns)
6. [SSL/HTTPS](#sslhttps)

---

## 🔷 Déploiement sur Vercel

### Méthode 1 : Via GitHub (Recommandé)

1. **Pushez votre code sur GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE-USERNAME/dakarlive.git
git push -u origin main
```

2. **Connectez-vous à Vercel**
- Allez sur [vercel.com](https://vercel.com)
- Cliquez sur "Sign Up" ou "Log In"
- Connectez votre compte GitHub

3. **Importez le Projet**
- Cliquez sur "New Project"
- Sélectionnez votre repository `dakarlive`
- Cliquez sur "Import"

4. **Configurez le Projet**
- **Framework Preset** : Other
- **Root Directory** : ./
- **Build Command** : (laisser vide)
- **Output Directory** : ./

5. **Déployez**
- Cliquez sur "Deploy"
- Attendez quelques secondes
- Votre site est en ligne ! 🎉

### Méthode 2 : Via CLI

```bash
# Installez Vercel CLI
npm i -g vercel

# Déployez
cd c:/gravity/londres
vercel

# Suivez les instructions
# Répondez aux questions :
# - Set up and deploy? Yes
# - Which scope? Votre compte
# - Link to existing project? No
# - Project name? dakarlive
# - Directory? ./
# - Override settings? No

# Déploiement en production
vercel --prod
```

### Configuration Personnalisée

Le fichier `vercel.json` est déjà configuré avec :
- Routage statique
- Headers de cache optimisés
- Compression automatique

---

## 🔶 Déploiement sur Netlify

### Méthode 1 : Via GitHub (Recommandé)

1. **Pushez votre code sur GitHub** (si pas déjà fait)

2. **Connectez-vous à Netlify**
- Allez sur [netlify.com](https://netlify.com)
- Cliquez sur "Sign Up" ou "Log In"
- Connectez votre compte GitHub

3. **Créez un Nouveau Site**
- Cliquez sur "New site from Git"
- Sélectionnez "GitHub"
- Choisissez votre repository `dakarlive`

4. **Configurez le Build**
- **Branch to deploy** : main
- **Build command** : (laisser vide)
- **Publish directory** : ./

5. **Déployez**
- Cliquez sur "Deploy site"
- Attendez quelques secondes
- Votre site est en ligne ! 🎉

### Méthode 2 : Via Drag & Drop

1. **Allez sur Netlify**
- Connectez-vous à [netlify.com](https://netlify.com)

2. **Glissez-Déposez**
- Faites glisser le dossier `c:/gravity/londres` dans la zone de drop
- Netlify uploade et déploie automatiquement

3. **Site en Ligne**
- Vous recevrez une URL du type : `random-name-123.netlify.app`

### Méthode 3 : Via CLI

```bash
# Installez Netlify CLI
npm install -g netlify-cli

# Connectez-vous
netlify login

# Déployez
cd c:/gravity/londres
netlify deploy

# Déploiement en production
netlify deploy --prod
```

### Configuration Personnalisée

Le fichier `netlify.toml` est déjà configuré avec :
- Redirects pour SPA
- Headers de sécurité
- Cache optimisé

---

## 🔷 Déploiement sur GitHub Pages

### Étape 1 : Préparez le Repository

```bash
# Initialisez Git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit"

# Créez un repository sur GitHub
# Puis ajoutez-le comme remote
git remote add origin https://github.com/VOTRE-USERNAME/dakarlive.git
git push -u origin main
```

### Étape 2 : Activez GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur "Settings"
3. Allez dans "Pages" (menu de gauche)
4. Sous "Source", sélectionnez :
   - **Branch** : main
   - **Folder** : / (root)
5. Cliquez sur "Save"

### Étape 3 : Accédez à Votre Site

Votre site sera disponible à :
```
https://VOTRE-USERNAME.github.io/dakarlive/
```

### Domaine Personnalisé

1. Dans "Settings" > "Pages"
2. Sous "Custom domain", entrez : `www.dakarlive.sn`
3. Cliquez sur "Save"
4. Configurez vos DNS (voir section DNS)

---

## 🔶 Déploiement sur un Serveur VPS

### Prérequis
- Serveur Linux (Ubuntu/Debian recommandé)
- Accès SSH
- Nom de domaine (optionnel)

### Étape 1 : Connectez-vous au Serveur

```bash
ssh user@votre-serveur.com
```

### Étape 2 : Installez Nginx

```bash
# Mettez à jour les paquets
sudo apt update
sudo apt upgrade -y

# Installez Nginx
sudo apt install nginx -y

# Démarrez Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Étape 3 : Uploadez les Fichiers

```bash
# Depuis votre machine locale
scp -r c:/gravity/londres/* user@votre-serveur.com:/var/www/dakarlive/
```

Ou utilisez Git :

```bash
# Sur le serveur
cd /var/www
sudo git clone https://github.com/VOTRE-USERNAME/dakarlive.git
```

### Étape 4 : Configurez Nginx

```bash
# Créez un fichier de configuration
sudo nano /etc/nginx/sites-available/dakarlive

# Ajoutez cette configuration :
```

```nginx
server {
    listen 80;
    server_name dakarlive.sn www.dakarlive.sn;
    
    root /var/www/dakarlive;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache pour les assets statiques
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

```bash
# Activez le site
sudo ln -s /etc/nginx/sites-available/dakarlive /etc/nginx/sites-enabled/

# Testez la configuration
sudo nginx -t

# Rechargez Nginx
sudo systemctl reload nginx
```

### Étape 5 : Configurez le Firewall

```bash
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 🌐 Configuration DNS

### Pour Vercel ou Netlify

1. **Obtenez les DNS Records**
   - Vercel : `76.76.21.21` (A Record)
   - Netlify : Fourni dans les paramètres

2. **Configurez chez votre Registrar**

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     dakarlive.vercel.app
```

### Pour VPS

```
Type    Name    Value
A       @       VOTRE-IP-SERVEUR
A       www     VOTRE-IP-SERVEUR
```

### Propagation DNS

La propagation DNS peut prendre de 5 minutes à 48 heures.

Vérifiez avec :
```bash
nslookup dakarlive.sn
```

---

## 🔒 SSL/HTTPS

### Vercel & Netlify
SSL automatique et gratuit ! ✅

### GitHub Pages
SSL automatique pour les domaines `.github.io` ✅

Pour domaine personnalisé :
1. Allez dans Settings > Pages
2. Cochez "Enforce HTTPS"

### VPS avec Let's Encrypt

```bash
# Installez Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtenez un certificat SSL
sudo certbot --nginx -d dakarlive.sn -d www.dakarlive.sn

# Suivez les instructions
# Choisissez de rediriger HTTP vers HTTPS

# Renouvellement automatique
sudo certbot renew --dry-run
```

Le certificat se renouvelle automatiquement tous les 90 jours.

---

## 🔄 Déploiement Continu (CI/CD)

### GitHub Actions (pour VPS)

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          source: "."
          target: "/var/www/dakarlive"
```

---

## 📊 Monitoring & Analytics

### Google Analytics

Ajoutez dans `<head>` de `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics

```bash
npm i @vercel/analytics
```

Ajoutez dans `index.html` :
```html
<script src="https://cdn.vercel-insights.com/v1/script.js"></script>
```

---

## ✅ Checklist de Déploiement

- [ ] Code testé localement
- [ ] Fichiers optimisés (minification)
- [ ] Images compressées
- [ ] Meta tags SEO configurés
- [ ] Favicon ajouté
- [ ] Analytics configuré
- [ ] SSL/HTTPS activé
- [ ] DNS configuré
- [ ] Domaine personnalisé (optionnel)
- [ ] Monitoring en place
- [ ] Backup configuré

---

## 🆘 Dépannage

### Problème : Site ne s'affiche pas

**Solution** :
- Vérifiez les DNS (peut prendre jusqu'à 48h)
- Videz le cache du navigateur (Ctrl + Shift + R)
- Vérifiez les logs du serveur

### Problème : CSS/JS ne se chargent pas

**Solution** :
- Vérifiez les chemins (relatifs vs absolus)
- Vérifiez la console du navigateur (F12)
- Vérifiez les headers CORS

### Problème : Erreur 404

**Solution** :
- Vérifiez la configuration du serveur
- Assurez-vous que `index.html` existe
- Vérifiez les redirects

---

## 📞 Support

Besoin d'aide pour le déploiement ?
- 📧 Email : deploy@dakarlive.sn
- 💬 Discord : (bientôt disponible)
- 📖 Documentation : [docs.dakarlive.sn](https://docs.dakarlive.sn)

---

**Bon déploiement ! 🚀**
