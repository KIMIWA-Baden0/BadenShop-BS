import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Code,
  Palette,
  Brain,
  BarChart3,
  Users,
  Sparkles,
  Play,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">BS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">BadenShop</h1>
              <p className="text-xs text-muted-foreground">SaaS Commerce</p>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Fonctionnalités
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Tarifs
            </a>
            <a
              href="#faq"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/auth/login"
              className="px-4 py-2 text-foreground text-sm font-medium hover:bg-muted rounded-lg transition-colors"
            >
              Connexion
            </Link>
            <Link
              to="/auth/signup"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 rounded-full border border-violet-200 dark:border-violet-800 mb-6">
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-semibold text-violet-800 dark:text-violet-400">
              Plateforme Commerce SaaS - Créé par KIMIWA Baden
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
            Créez votre boutique en
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {" "}
              5 minutes
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            BadenShop est la plateforme complète pour les vendeurs et acheteurs.
            Créez, vendez, optimisez avec intelligence artificielle intégrée.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/auth/signup?role=seller"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg"
            >
              Commencer à vendre
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Play className="w-5 h-5" />
              Voir la démo
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-8 border-t border-border">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>100% Sécurisé (Stripe)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>+10k Vendeurs</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span>$2M+ en ventes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-lg text-muted-foreground">
              Outils puissants pour vendeurs et acheteurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-border rounded-xl bg-background hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Studio Design Professionnel
              </h3>
              <p className="text-muted-foreground mb-4">
                Créez votre boutique sans code avec notre éditeur drag & drop.
                Personnalisez couleurs, polices, layouts.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Templates professionnels
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Responsive mobile-first
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Domaine personnalisé (Pro)
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-border rounded-xl bg-background hover:border-secondary transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Intelligence Artificielle Intégrée
              </h3>
              <p className="text-muted-foreground mb-4">
                Descriptions générées, images optimisées, SEO automatique,
                recommandations personnalisées.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  GPT-4 pour contenu
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Images haute qualité
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Budget IA 50€/mois
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-border rounded-xl bg-background hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Analytics en Temps Réel
              </h3>
              <p className="text-muted-foreground mb-4">
                Tableaux de bord complets avec insights IA. Suivi des ventes,
                conversions, performance produits.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Graphiques détaillés
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Recommandations IA
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Export données
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="p-8 border border-border rounded-xl bg-background hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Paiements Sécurisés
              </h3>
              <p className="text-muted-foreground mb-4">
                Stripe PCI-DSS Level 1. Paiements globaux, multi-devises,
                virements automatiques.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Stripe certifié
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  3D Secure obligatoire
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Virages 2-7j
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="p-8 border border-border rounded-xl bg-background hover:border-secondary transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Communauté & Support
              </h3>
              <p className="text-muted-foreground mb-4">
                Support 24/7 multilingue. Chat, email, community forum pour
                vendeurs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Support 24/7
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  FR, EN, ES
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Réponse sous 2h
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="p-8 border border-border rounded-xl bg-background hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Plugins & Intégrations
              </h3>
              <p className="text-muted-foreground mb-4">
                Connectez vos outils préférés. Zapier, webhooks, API complète
                pour développeurs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  API REST complète
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Webhooks en temps réel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  OAuth2 & JWT
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Demo Section */}
      <section id="demo" className="py-20 container-grid">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Marketplace en Direct
          </h2>
          <p className="text-lg text-muted-foreground">
            Voir comment fonctionne la plateforme
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <p className="text-muted-foreground mb-6">
            La marketplace est en développement. Les véritables boutiques seront
            créées par les vendeurs inscrits.
          </p>
          <Link
            to="/marketplace-demo"
            className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            <Play className="w-5 h-5" />
            Voir la démo marketplace
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Plans Transparents
            </h2>
            <p className="text-lg text-muted-foreground">
              Aucun frais caché. Paiement mensuel, annulable à tout moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 border border-border rounded-xl bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Starter
              </h3>
              <p className="text-muted-foreground mb-6">Parfait pour débuter</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-foreground">0€</span>
                <span className="text-muted-foreground text-sm">/mois</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Max 10 produits</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>15% de commission</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>IA budget 25€/mois</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>badenshop.com/s/slug</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                Commencer gratuitement
              </button>
            </div>

            {/* Pro */}
            <div className="p-8 border-2 border-primary rounded-xl bg-background relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                Populaire
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Pro</h3>
              <p className="text-muted-foreground mb-6">Pour les pro</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-foreground">29€</span>
                <span className="text-muted-foreground text-sm">/mois</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Produits illimités</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>5% de commission</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>IA budget 50€/mois</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Domaine personnalisé</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Analytics avancées</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-all">
                Commencer
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-8 border border-border rounded-xl bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Enterprise
              </h3>
              <p className="text-muted-foreground mb-6">Solutions custom</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-foreground">99€</span>
                <span className="text-muted-foreground text-sm">/mois</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Tout illimité</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>0% de commission</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>IA budget 200€/mois</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Support prioritaire</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>API commerciale</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                Contacter l'équipe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-foreground mb-4">BadenShop</h4>
              <p className="text-sm text-muted-foreground">
                Plateforme SaaS commerce créée par KIMIWA Baden
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Produit</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Légal</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/privacy" className="hover:text-primary">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-primary">
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/ai-policy" className="hover:text-primary">
                    Politique IA
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:support@badenshop.com" className="hover:text-primary">
                    support@badenshop.com
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@badenshop.com" className="hover:text-primary">
                    contact@badenshop.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 BadenShop. Tous droits réservés.</p>
            <p>Créé par KIMIWA Baden | SaaS Commerce Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
