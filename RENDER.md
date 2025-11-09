# 🚀 BadenShop - Render Deployment Guide

**Déployez votre plateforme sur Render (production-ready)**

**Platform créée par KIMIWA Baden**

---

## 📌 Prérequis

- ✅ Code poussé sur GitHub (voir GITHUB.md)
- ✅ Compte Render (https://render.com)
- ✅ Variables d'environnement prêtes
- ✅ MongoDB URI (Atlas gratuit ou payant)
- ✅ API keys Stripe, OpenAI, etc.

---

## 🔧 Étape 1: Connecter GitHub à Render

1. Allez sur [Render.com](https://render.com) et connectez-vous
2. Cliquez sur **New +** → **Web Service**
3. Sélectionnez **Connect a repository**
4. Autorisez Render à accéder à votre compte GitHub
5. Sélectionnez le repo `badenshop`
6. Cliquez **Connect**

---

## ⚙️ Étape 2: Configurer le Service Render

### Paramètres du Service

| Champ | Valeur |
|-------|--------|
| **Name** | `badenshop` |
| **Environment** | `Node` |
| **Region** | `Frankfurt (EU)` (ou votre région) |
| **Branch** | `main` |
| **Build Command** | `pnpm install && pnpm build` |
| **Start Command** | `pnpm start` |
| **Plan** | `Standard` (ou Starter pour tester) |

### Construire et déployer

1. Dans la section **Build & Deploy**:
   - Auto-deploy: **ON** (se déploie à chaque push sur main)
   - Build Command: `pnpm install && pnpm build`
   - Start Command: `pnpm start`

2. Cliquez **Create Web Service**

3. Render va commencer à construire (cela peut prendre 2-5 min)

---

## 🔐 Étape 3: Ajouter les Variables d'Environnement

Dans le dashboard Render:

1. Allez à votre service `badenshop`
2. Cliquez sur **Environment** (ou **Settings** → **Environment Variables**)
3. Cliquez **Add Environment Variable** et ajoutez:

```env
# Basics
NODE_ENV=production
PORT=8080
PING_MESSAGE=pong

# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/badenshop

# Stripe
STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx

# AI APIs
OPENAI_API_KEY=sk-xxxxxxxxxxxx
GOOGLE_API_KEY=xxxxxxxxxxxx
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxx
STABILITY_API_KEY=sk-xxxxxxxxxxxx

# Frontend API
VITE_API_URL=https://your-service-name.onrender.com
VITE_STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxx
```

4. Cliquez **Save Changes**
5. Render va redéployer automatiquement

---

## 💾 Étape 4: Configurer MongoDB sur Render

### Option A: MongoDB Atlas (Recommandé)

1. Allez sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créez un compte gratuit
3. Créez un cluster gratuit (M0)
4. Obtenez la connection string: `mongodb+srv://...`
5. Ajoutez-la comme `MONGODB_URI` dans Render

### Option B: Render Database (Premium)

1. Dans Render dashboard, cliquez **New +** → **PostgreSQL**
2. Configurez la base de données
3. Render génère une `DATABASE_URL`

---

## 🎯 Étape 5: Configurer Stripe Webhooks

1. Allez sur [Stripe Dashboard](https://dashboard.stripe.com)
2. Allez à **Developers** → **Webhooks**
3. Cliquez **Add endpoint**
4. Endpoint URL: `https://your-service-name.onrender.com/api/stripe/webhook`
5. Événements à sélectionner:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `charge.refunded`
6. Cliquez **Add endpoint**
7. Copiez le **Signing secret** (commence par `whsec_`)
8. Ajoutez-le comme `STRIPE_WEBHOOK_SECRET` dans Render

---

## 🌐 Étape 6: Domain Personnalisé (Optionnel)

### Ajouter un domaine custom

1. Allez dans **Settings** de votre service
2. Cliquez **Add Custom Domain**
3. Entrez votre domaine (ex: `badenshop.com`)
4. Render génère un certificat SSL automatique
5. Configurez vos DNS records selon les instructions

### Domaine Render Gratuit

Render vous donne automatiquement une URL:
```
https://badenshop-xxxx.onrender.com
```

---

## 📊 Étape 7: Monitoring & Logs

### Voir les logs en temps réel

1. Service Dashboard → **Logs**
2. Regardez pour les erreurs de démarrage
3. Vérifiez que toutes les variables d'env sont présentes

### Health Checks

```bash
# Test que votre API fonctionne
curl https://your-service-name.onrender.com/api/ping
# Résultat: {"message":"pong"}
```

---

## 🚀 Déploiement Automatique

**Chaque push sur GitHub déclenche automatiquement un déploiement:**

```bash
# Après avoir committé vos changements:
git push origin main

# Render va:
# 1. Télécharger votre code
# 2. Installer les dépendances (pnpm install)
# 3. Builder votre app (pnpm build)
# 4. Démarrer le serveur (pnpm start)
```

---

## 📈 Optimisations de Performance

### Activer le caching

1. **Settings** → **Environment**
2. Ajouter: `VITE_CACHE_ENABLED=true`

### Optimiser les ressources Render

- **Standard Plan**: 0.145$/heure (recommandé pour production)
- **Starter Plan**: Gratuit, mais plus lent (bon pour test)

---

## 💡 Best Practices

✅ **À faire:**
- Utilisez des variables d'env pour tous les secrets
- Activez auto-deploy depuis main
- Configurez les webhooks Stripe correctement
- Monitorez les logs régulièrement
- Backup MongoDB quotidiennement

❌ **À ne pas faire:**
- Ne pushez jamais les secrets sur GitHub
- Ne changez pas PORT=8080 (Render l'utilise)
- N'utilisez pas les domaines Render pour production (sauf tests)

---

## 🔧 Troubleshooting

### "Build failed" ou "Deployment error"

1. Vérifiez les logs: **Logs** tab
2. Cherchez l'erreur exacte
3. Solutions communes:
   ```bash
   # Erreur: Module not found
   # Solution: Vérifiez que package.json a les dépendances
   
   # Erreur: PORT already in use
   # Solution: Assurez-vous que vous utilisez $PORT
   
   # Erreur: MongoDB connection failed
   # Solution: Vérifiez MONGODB_URI et whitelist IP
   ```

### "Stuck on building"

1. Cliquez **Manual Deploy** → **Clear build cache** → **Deploy**
2. Attendez 5-10 minutes
3. Si toujours bloqué, contactez Render support

### Service se crash après déploiement

1. Vérifiez les logs pour l'erreur
2. Vérifiez que toutes les variables d'env sont présentes
3. Testez en local: `pnpm dev` puis `pnpm build && pnpm start`

---

## 📞 Support & Ressources

- **Render Docs**: https://render.com/docs
- **Render Status**: https://status.render.com
- **Contact Render**: https://render.com/support
- **MongoDB Documentation**: https://docs.mongodb.com/
- **Stripe Documentation**: https://stripe.com/docs

---

## ✅ Checklist de Lancement

- [ ] Code poussé sur GitHub
- [ ] Service créé sur Render
- [ ] Toutes les variables d'env ajoutées
- [ ] MongoDB connecté et testé
- [ ] Stripe webhooks configurés
- [ ] Health check `/api/ping` répond
- [ ] Login/Signup fonctionnent
- [ ] Dashboard vendeur accessible
- [ ] Marketplace démo charge les produits
- [ ] Paiements testés avec Stripe test keys

---

## 🎉 Votre plateforme est live!

```
🌍 Accès: https://your-service-name.onrender.com
📊 Monitoring: Render Dashboard
🔐 Secrets: Configurés et sécurisés
💰 Coûts: Transparents et optimisés
```

---

**BadenShop © 2025 - Créé par KIMIWA Baden**

*Besoin d'aide ? Visitez https://render.com/docs pour plus d'informations.*
