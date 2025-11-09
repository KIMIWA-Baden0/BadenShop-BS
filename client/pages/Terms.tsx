import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="py-16 bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Conditions Générales de Vente (CGV)
          </h1>
          <p className="text-muted-foreground">
            BadenShop - Plateforme créée par KIMIWA Baden
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            📦 Objet
          </h2>
          <p className="text-muted-foreground">
            BadenShop est une plateforme marketplace mettant en relation :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-4">
            <li><strong>Vendeurs</strong> : Professionnels ou particuliers</li>
            <li><strong>Acheteurs</strong> : Clients finaux</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Chaque boutique est indépendante. <strong>BadenShop n'est pas revendeur.</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            📝 Inscription
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Pour acheter :</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>✅ Gratuit et sans engagement</li>
                <li>✅ Email vérifié obligatoire</li>
                <li>✅ Majorité légale (18 ans)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Pour vendre :</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>✅ Plan Starter gratuit (max 10 produits)</li>
                <li>✅ Plan Pro : 29€/mois (illimité)</li>
                <li>✅ Plan Enterprise : 99€/mois (fonctionnalités avancées)</li>
                <li>✅ Vérification identité obligatoire</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            💰 Commissions
          </h2>
          <p className="text-muted-foreground mb-4">
            BadenShop prélève une commission sur chaque vente :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted border-b-2 border-border">
                  <th className="text-left py-2 px-4 font-semibold text-foreground">Plan</th>
                  <th className="text-left py-2 px-4 font-semibold text-foreground">Commission</th>
                  <th className="text-left py-2 px-4 font-semibold text-foreground">Transactions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 px-4 font-medium text-foreground">Starter</td>
                  <td className="py-2 px-4 text-muted-foreground">15%</td>
                  <td className="py-2 px-4 text-muted-foreground">Illimitées</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium text-foreground">Pro</td>
                  <td className="py-2 px-4 text-muted-foreground">5%</td>
                  <td className="py-2 px-4 text-muted-foreground">Illimitées</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium text-foreground">Enterprise</td>
                  <td className="py-2 px-4 text-muted-foreground">0%</td>
                  <td className="py-2 px-4 text-muted-foreground">Illimitées</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mt-4">
            <strong>La commission est prélevée automatiquement par Stripe.</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            💳 Paiements
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Moyens acceptés :</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>💳 Carte bancaire (Visa, Mastercard, Amex)</li>
                <li>🌍 Paiements internationaux</li>
                <li>🔒 3D Secure obligatoire</li>
                <li>⚡ Paiement instantané</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Sécurité :</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Stripe certifié PCI-DSS Level 1</li>
                <li>Aucune donnée bancaire stockée sur BadenShop</li>
                <li>Cryptage SSL/TLS 256-bit</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Délai de virement vendeurs :</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Paiement reçu : Instantané</li>
                <li>Virement compte bancaire : 2-7 jours ouvrés</li>
                <li>Retenue anti-fraude : 7 jours pour nouvelle boutique</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🚚 Livraison
          </h2>
          <p className="text-muted-foreground">
            Chaque vendeur définit :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mt-3">
            <li>✅ Ses zones de livraison</li>
            <li>✅ Ses tarifs d'expédition</li>
            <li>✅ Ses délais de traitement</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            <strong>BadenShop n'est pas responsable des retards de livraison.</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🔄 Retours et remboursements
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Droit de rétractation (14 jours) :</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>✅ Produits neufs et dans emballage d'origine</li>
                <li>✅ Notification par email au vendeur</li>
                <li>✅ Retour à vos frais (sauf défaut)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Remboursement :</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>✅ Traité par le vendeur sous 14 jours</li>
                <li>✅ Même moyen de paiement qu'à l'achat</li>
                <li>✅ Commission BadenShop non remboursée</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🛡️ Protection acheteurs
          </h2>
          <p className="text-muted-foreground">
            BadenShop garantit :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-3">
            <li>🛡️ Remboursement si article non reçu</li>
            <li>🛡️ Remboursement si article non conforme</li>
            <li>🛡️ Support client 24/7</li>
            <li>🛡️ Médiation en cas de litige</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            <strong>Délai de réclamation : 60 jours après achat</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            ⚖️ Responsabilités
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">BadenShop est responsable de :</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>✅ Disponibilité de la plateforme</li>
                <li>✅ Sécurité des données</li>
                <li>✅ Traitement des paiements</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">BadenShop n'est PAS responsable de :</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>❌ Qualité des produits vendus</li>
                <li>❌ Descriptions erronées</li>
                <li>❌ Litiges vendeur-acheteur</li>
                <li>❌ Contrefaçons (responsabilité vendeur)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            🚫 Interdictions
          </h2>
          <p className="text-muted-foreground mb-4">
            Il est strictement interdit de :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>🚫 Vendre des produits illégaux</li>
            <li>🚫 Vendre des contrefaçons</li>
            <li>🚫 Utiliser des images volées</li>
            <li>🚫 Manipuler les avis clients</li>
            <li>🚫 Pratiquer la vente pyramidale</li>
            <li>🚫 Usurper l'identité d'autrui</li>
          </ul>
          <p className="text-muted-foreground mt-4 font-semibold">
            Sanction : Suspension immédiate + poursuites judiciaires
          </p>
        </section>

        <div className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>Dernière mise à jour : 15 Janvier 2025</p>
          <p>Version : 1.0</p>
        </div>
      </div>
    </Layout>
  );
}
