import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="py-16 bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-muted-foreground">
            BadenShop - Plateforme créée par KIMIWA Baden
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        {/* 1. Collecte des données */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🔐 Collecte des données
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Données d'inscription
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nom complet</li>
                <li>Adresse email</li>
                <li>Mot de passe (crypté avec bcrypt)</li>
                <li>Numéro de téléphone (optionnel)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Données de navigation
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées</li>
                <li>Durée de session</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Données de paiement
              </h3>
              <p>
                ✅ Traitées exclusivement par Stripe
              </p>
              <p>
                ✅ BadenShop ne stocke JAMAIS vos numéros de carte
              </p>
              <p>
                ✅ Conformité PCI-DSS Level 1
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Données boutique (vendeurs)
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Informations légales (SIRET, TVA)</li>
                <li>Coordonnées bancaires (via Stripe Connect)</li>
                <li>Statistiques de ventes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Utilisation des données */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            📊 Utilisation des données
          </h2>
          <p className="text-muted-foreground mb-4">
            Vos données sont utilisées pour :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>✅ Traiter vos commandes</li>
            <li>✅ Améliorer votre expérience d'achat</li>
            <li>✅ Envoyer des notifications importantes</li>
            <li>✅ Prévenir la fraude</li>
            <li>✅ Générer des recommandations IA personnalisées</li>
          </ul>
          <p className="text-muted-foreground mt-4 font-semibold">
            ❌ Nous ne vendons JAMAIS vos données à des tiers.
          </p>
        </section>

        {/* 3. Intelligence Artificielle */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🤖 Intelligence Artificielle
          </h2>
          <p className="text-muted-foreground mb-4">
            BadenShop utilise des services IA externes :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
            <li>OpenAI (GPT-4, GPT-3.5)</li>
            <li>Google Gemini</li>
            <li>Anthropic Claude</li>
            <li>Stability AI</li>
          </ul>
          <p className="font-semibold text-foreground mb-3">
            Vos données envoyées aux IA :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>✅ Sont anonymisées</li>
            <li>✅ Ne contiennent jamais d'informations bancaires</li>
            <li>✅ Sont supprimées après traitement (conformité RGPD)</li>
            <li>✅ Servent uniquement à améliorer vos recommandations</li>
          </ul>
        </section>

        {/* 4. Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🍪 Cookies
          </h2>
          <p className="text-muted-foreground mb-4">
            Nous utilisons des cookies pour :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>🍪 Maintenir votre session</li>
            <li>🍪 Mémoriser vos préférences</li>
            <li>🍪 Analyser le trafic (Google Analytics)</li>
            <li>🍪 Améliorer la sécurité</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Vous pouvez refuser les cookies non essentiels dans les paramètres.
          </p>
        </section>

        {/* 5. Vos droits (RGPD) */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            📋 Vos droits (RGPD)
          </h2>
          <p className="text-muted-foreground mb-4">
            Vous avez le droit de :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>📋 Accéder à vos données</li>
            <li>✏️ Modifier vos informations</li>
            <li>🗑️ Supprimer votre compte</li>
            <li>📤 Exporter vos données</li>
            <li>🚫 Vous opposer au traitement</li>
          </ul>
          <p className="text-muted-foreground mt-4 font-semibold">
            Contact RGPD : privacy@badenshop.com
          </p>
        </section>

        {/* Last Updated */}
        <div className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>Dernière mise à jour : 15 Janvier 2025</p>
          <p>Version : 1.0</p>
        </div>
      </div>
    </Layout>
  );
}
