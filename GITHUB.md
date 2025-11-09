# 📦 BadenShop - GitHub Setup & Import Guide

**Platform créée par KIMIWA Baden**

---

## 🚀 Importer le Code sur GitHub

Après avoir testé BadenShop localement, voici comment exporter le code et le mettre sur GitHub.

### Étape 1: Préparer votre projet local

```bash
# Assurez-vous que vous êtes dans le répertoire racine du projet
cd /chemin/vers/badenshop

# Installer les dépendances (si pas déjà fait)
pnpm install
```

### Étape 2: Créer un repository GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur le **+** en haut à droite → **New repository**
3. Nommez le repo: `badenshop` (ou votre choix)
4. Sélectionnez **Private** (recommandé pour votre plateforme)
5. **NE sélectionnez PAS** "Initialize with README" (vous avez déjà du code)
6. Cliquez **Create repository**

### Étape 3: Initialiser Git et pousser le code

```bash
# Initialiser git (si pas déjà fait)
git init

# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/badenshop.git

# Ajouter tous les fichiers
git add .

# Faire un premier commit
git commit -m "Initial commit: BadenShop SaaS platform with Shopify-Alibaba inspiration"

# Pousser vers GitHub (branche main)
git branch -M main
git push -u origin main
```

### Étape 4: Configurer les secrets GitHub (pour Render)

1. Allez dans **Settings** → **Secrets and variables** → **Actions**
2. Cliquez **New repository secret** et ajoutez:

```
RENDER_API_KEY=votre_clé_render_ici
RENDER_SERVICE_ID=votre_service_id_ici
```

---

## 📋 Structure du Repository

```
badenshop/
├── client/                    # Frontend React + Vite
│   ├── pages/                # Route pages
│   │   ├── Index.tsx         # Landing page
│   │   ├── Auth/
│   │   │   ├── Signup.tsx
│   │   │   └── Login.tsx
│   │   ├── Dashboard/
│   │   │   └── SellerDashboard.tsx
│   │   ├── MarketplaceDemo.tsx
│   │   ├── Privacy.tsx
│   ���   ├── FAQ.tsx
│   │   ├── Terms.tsx
│   │   └── AiPolicy.tsx
│   ├── components/           # Reusable components
│   │   ├── Layout.tsx
│   │   ├── ProductCard.tsx
│   │   ├── StoreCard.tsx
│   │   └── HeroBanner.tsx
│   ├── App.tsx              # Main app with routes
│   ├── main.tsx             # React entry point
│   └── global.css           # Tailwind + theme colors
│
├── server/                   # Express backend
│   ├── routes/              # API endpoints
│   │   ├── auth.ts
│   │   ├── shops.ts
│   │   ├── marketplace.ts
│   │   └── demo.ts
│   ├── index.ts             # Server setup
│   └── node-build.ts        # Production build
│
├── shared/                   # Shared code
│   ├── types.ts             # TypeScript types
│   └── api.ts               # API request/response types
│
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind configuration
├── vite.config.ts           # Vite frontend config
├── vite.config.server.ts    # Vite server config
├── postcss.config.js        # PostCSS for Tailwind
│
├── GITHUB.md               # Ce fichier
├── RENDER.md               # Render deployment guide
└── .env.example            # Environment variables template
```

---

## 🔐 .env.example - Créer ce fichier

Créez un fichier `.env.example` à la racine avec:

```env
# API Keys
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/badenshop
OPENAI_API_KEY=sk-xxxxxxxxxxxx
GOOGLE_API_KEY=xxxxxxxxxxxx
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxx
STABILITY_API_KEY=sk-xxxxxxxxxxxx

# Stripe
STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx

# Server
PORT=8080
NODE_ENV=production
PING_MESSAGE=pong

# Frontend
VITE_API_URL=https://your-api.render.com
VITE_STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxx
```

**⚠️ IMPORTANT**: 
- Ne commitez JAMAIS `.env` sur GitHub (contient les secrets)
- Utilisez `.env.example` pour montrer quelles variables sont nécessaires
- Ajoutez `.env` à votre `.gitignore`

---

## 📝 .gitignore - Ajouter ce fichier

```
# Dependencies
node_modules/
pnpm-lock.yaml
npm-shrinkwrap.json

# Environment variables
.env
.env.local
.env.*.local

# Build
dist/
.next
out/

# Development
.DS_Store
*.log
npm-debug.log*
pnpm-debug.log*

# IDE
.vscode/
.idea/
*.swp
*.swo

# Testing
coverage/
.nyc_output/
```

---

## 🔄 Workflow pour les mises à jour

```bash
# 1. Faire vos changements localement
# ... modifiez les fichiers ...

# 2. Committer vos changements
git add .
git commit -m "Votre message de commit descriptif"

# 3. Pousser vers GitHub
git push origin main

# 4. Render va déployer automatiquement
```

---

## 📚 Ressources Complémentaires

- **GitHub Docs**: https://docs.github.com/en
- **Git Cheatsheet**: https://education.github.com/git-cheat-sheet-education.pdf
- **Semantic Commit Messages**: https://www.conventionalcommits.org/

---

## ✅ Checklist de sécurité avant de pousher

- [ ] Pas de secrets dans le code
- [ ] `.env` est dans `.gitignore`
- [ ] `node_modules/` est ignoré
- [ ] `dist/` est ignoré
- [ ] Tous les tests passent (`pnpm test`)
- [ ] Aucune console.log() de debug restante
- [ ] Code formaté avec Prettier

---

## 🆘 Troubleshooting

### "fatal: not a git repository"
```bash
git init
git remote add origin https://github.com/VOTRE_USERNAME/badenshop.git
```

### "authentication failed"
```bash
# Utilisez un Personal Access Token au lieu du mot de passe
# Settings GitHub → Developer settings → Personal access tokens
```

### "branch 'main' already exists"
```bash
git branch -m master main  # Renommer branche
git push -u origin main
```

---

**BadenShop © 2025 - Créé par KIMIWA Baden**
