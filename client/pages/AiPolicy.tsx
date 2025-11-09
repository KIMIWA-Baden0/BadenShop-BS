import Layout from "@/components/Layout";
import { Brain, Shield, Zap, AlertCircle, CheckCircle } from "lucide-react";

export default function AiPolicy() {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border-b border-violet-200 dark:border-violet-800">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Politique IA - Clause Anthropique
          </h1>
          <p className="text-muted-foreground">
            BadenShop utilise l'IA de manière éthique, transparente et contrôlée
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🤖 Qu'est-ce que la Clause Anthropique IA ?
          </h2>
          <p className="text-muted-foreground">
            La Clause Anthropique IA est un ensemble de règles opérationnelles conçues pour :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-4">
            <li><strong>Prioriser la sécurité et la transparence</strong> avant la performance</li>
            <li><strong>Gérer la proportionnalité des coûts</strong> pour prévenir les abus</li>
            <li><strong>Garantir la traçabilité</strong> de toute génération IA</li>
            <li><strong>Appliquer des garde-fous éthiques</strong> à chaque utilisation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            ✅ Principes Fondamentaux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-600" />
                Moindre Capacité
              </h3>
              <p className="text-sm text-muted-foreground">
                N'utiliser le modèle le plus coûteux que si le résultat le justifie
              </p>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Dégradation Contrôlée
              </h3>
              <p className="text-sm text-muted-foreground">
                Si le budget est dépassé, proposer des alternatives (images lower-res, résumé court)
              </p>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-600" />
                Explicabilité
              </h3>
              <p className="text-sm text-muted-foreground">
                Chaque réponse IA stocke la provenance et un audit trail complet
              </p>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Consentement
              </h3>
              <p className="text-sm text-muted-foreground">
                Les vendeurs peuvent opt-out et voient un badge "Contenu IA" sur les produits
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🔒 Règles Automatiques
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">1. Vérification du budget</h3>
              <p className="text-sm text-muted-foreground">
                Si user.currentMonthSpent + estimation &gt; user.monthlyBudget → Rejeter avec alternatives
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">2. Scan de sécurité</h3>
              <p className="text-sm text-muted-foreground">
                Chaque prompt passe par un filtre de sécurité (contenu illégal, PII scrubbing)
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">3. Sélection du provider</h3>
              <p className="text-sm text-muted-foreground">
                Choix du provider avec score = α×latency + β×cost + γ×qualityEstimate
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">4. Journalisation obligatoire</h3>
              <p className="text-sm text-muted-foreground">
                Chaque appel IA crée une entrée AiLog (immuable, auditée)
              </p>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">5. Facturation transparente</h3>
              <p className="text-sm text-muted-foreground">
                Facturation après succès seulement ; les tentatives échouées ne sont pas facturées
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🎯 Providers IA Supportés
          </h2>
          <div className="space-y-3">
            <div className="p-3 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground">OpenAI (GPT-4 / GPT-3.5)</h3>
              <p className="text-sm text-muted-foreground">Descriptions, recommandations, contenu long</p>
            </div>
            <div className="p-3 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground">Google Gemini Pro</h3>
              <p className="text-sm text-muted-foreground">Analyse données, insights vendeurs</p>
            </div>
            <div className="p-3 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground">Anthropic Claude</h3>
              <p className="text-sm text-muted-foreground">Support client, modération contenu</p>
            </div>
            <div className="p-3 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground">Stability AI</h3>
              <p className="text-sm text-muted-foreground">Gén��ration d'images produits haute qualité</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            💰 Budget IA par Plan
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b-2 border-border">
                  <th className="text-left py-2 px-4 font-semibold text-foreground">Plan</th>
                  <th className="text-left py-2 px-4 font-semibold text-foreground">Budget/Mois</th>
                  <th className="text-left py-2 px-4 font-semibold text-foreground">Cas d'usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 px-4 font-medium text-foreground">Starter</td>
                  <td className="py-2 px-4 text-muted-foreground">25€</td>
                  <td className="py-2 px-4 text-muted-foreground">Descriptions, SEO basique</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium text-foreground">Pro</td>
                  <td className="py-2 px-4 text-muted-foreground">50€</td>
                  <td className="py-2 px-4 text-muted-foreground">Images, analytics, recommandations</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium text-foreground">Enterprise</td>
                  <td className="py-2 px-4 text-muted-foreground">200€</td>
                  <td className="py-2 px-4 text-muted-foreground">Tout illimité, usage avancé</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Budget renouvelé mensuellement. Non utilisé = non facturé (sauf Enterprise).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🔍 Transparence & Disclosure
          </h2>
          <div className="p-6 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200 dark:border-violet-800 rounded-lg">
            <p className="text-muted-foreground mb-4">
              Chaque produit avec contenu généré par IA affiche :
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Badge "Contenu IA" visible sur la page produit</li>
              <li>✅ Provider utilisé (OpenAI, Google, etc.)</li>
              <li>✅ Date de génération</li>
              <li>✅ Option "Voir version originale" pour comparaison</li>
              <li>✅ Microcopy : "Description assistée par IA - Vérifiée par vendeur"</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            ⚠️ Exceptions & Contrôles
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Override Admin
              </h3>
              <p className="text-sm text-muted-foreground">
                Les admins peuvent augmenter temporairement le budget d'un utilisateur (audité)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Plans Enterprise
              </h3>
              <p className="text-sm text-muted-foreground">
                Peuvent avoir des budgets poolés et overrides, mais toujours journalisés avec provider & promptHash
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            📋 Contrôle de l'utilisateur
          </h2>
          <p className="text-muted-foreground mb-4">
            Chaque utilisateur peut :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Voir sa consommation IA en temps réel (Dashboard &gt; IA Usage)</li>
            <li>Définir un budget maximum personnalisé</li>
            <li>Opt-out de l'IA pour certaines opérations</li>
            <li>Télécharger son audit trail IA complet (RGPD)</li>
            <li>Demander la suppression de ses logs IA (anonymisation)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🚫 Ce que l'IA NE PEUT PAS faire
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>❌ Créer de faux avis clients</li>
            <li>❌ Générer des contrats légaux (consultation avocat obligatoire)</li>
            <li>❌ Accéder aux données bancaires/paiements</li>
            <li>❌ Modifier les commandes d'autres utilisateurs</li>
            <li>❌ Supprimer les avis vérifiés des clients</li>
            <li>❌ Usurper l'identité d'un vendeur</li>
          </ul>
        </section>

        <div className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>Dernière mise à jour : 15 Janvier 2025</p>
          <p>Clause Anthropique IA - Version 1.0</p>
        </div>
      </div>
    </Layout>
  );
}
