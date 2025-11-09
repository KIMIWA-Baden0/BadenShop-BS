import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "🛍️ ACHAT",
      items: [
        {
          q: "Comment passer commande ?",
          a: "1. Ajoutez au panier → 2. Checkout → 3. Paiement Stripe → 4. Confirmation email",
        },
        {
          q: "Puis-je annuler ma commande ?",
          a: "Oui, dans les 1h suivant la commande si elle n'est pas expédiée.",
        },
        {
          q: "Combien de temps pour être livré ?",
          a: "Dépend du vendeur (généralement 3-7 jours).",
        },
        {
          q: "Que faire si mon colis est perdu ?",
          a: "Contactez le vendeur puis notre support sous 60 jours.",
        },
      ],
    },
    {
      category: "🏪 VENTE",
      items: [
        {
          q: "Comment créer ma boutique ?",
          a: "Inscription → Devenir vendeur → Utiliser l'IA pour génération auto → Publier",
        },
        {
          q: "Combien coûte la création ?",
          a: "Gratuit ! Plan Starter à 0€ (max 10 produits)",
        },
        {
          q: "Quand reçois-je mes paiements ?",
          a: "2-7 jours après la vente sur votre compte bancaire.",
        },
        {
          q: "Puis-je avoir mon propre domaine ?",
          a: "Oui, à partir du plan Pro (domaine.com)",
        },
      ],
    },
    {
      category: "🤖 INTELLIGENCE ARTIFICIELLE",
      items: [
        {
          q: "Quelles IA sont utilisées ?",
          a: "OpenAI GPT-4, Google Gemini Pro, Anthropic Claude, Stability AI",
        },
        {
          q: "L'IA voit-elle mes données bancaires ?",
          a: "NON, JAMAIS. Seules les données anonymisées sont envoyées.",
        },
        {
          q: "Combien coûte l'IA ?",
          a: "Inclus dans votre abonnement (budget 50€/mois par défaut).",
        },
        {
          q: "Puis-je désactiver l'IA ?",
          a: "Oui, dans Paramètres > Configuration IA",
        },
      ],
    },
    {
      category: "💳 PAIEMENTS & FACTURATION",
      items: [
        {
          q: "Quels moyens de paiement ?",
          a: "Carte bancaire (Visa, Mastercard, Amex) via Stripe",
        },
        {
          q: "C'est sécurisé ?",
          a: "Oui, Stripe = certification bancaire niveau 1 (comme Apple Pay)",
        },
        {
          q: "Comment obtenir ma facture ?",
          a: "Envoyée automatiquement par email + Dashboard",
        },
      ],
    },
    {
      category: "🔐 SÉCURITÉ",
      items: [
        {
          q: "Mes données sont-elles protégées ?",
          a: "Oui : Cryptage SSL/TLS 256-bit, Conformité RGPD, Serveurs sécurisés en Europe, Sauvegardes quotidiennes",
        },
        {
          q: "Que faire si mon compte est piraté ?",
          a: "Changez immédiatement votre mot de passe + contactez support@badenshop.com",
        },
        {
          q: "BadenShop vend-il mes données ?",
          a: "JAMAIS. C'est dans notre charte.",
        },
      ],
    },
  ];

  const allFAQs = faqs.flatMap((cat, catIdx) =>
    cat.items.map((item, idx) => ({ ...item, catIdx, idx, category: cat.category }))
  );

  return (
    <Layout>
      <div className="py-16 bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Foire aux Questions (FAQ)
          </h1>
          <p className="text-muted-foreground">
            Réponses aux questions les plus fréquentes
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        {faqs.map((category, catIdx) => (
          <div key={catIdx} className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.items.map((item, idx) => {
                const globalIdx = allFAQs.findIndex(
                  (f) => f.catIdx === catIdx && f.idx === idx
                );
                const isOpen = openFAQ === globalIdx;

                return (
                  <div
                    key={idx}
                    className="border border-border rounded-lg overflow-hidden bg-card"
                  >
                    <button
                      onClick={() => setOpenFAQ(isOpen ? null : globalIdx)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors text-left"
                    >
                      <span className="font-semibold text-foreground">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 bg-muted border-t border-border">
                        <p className="text-muted-foreground">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Support */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-muted-foreground mb-4">
            Notre équipe support est disponible 24/7 pour vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@badenshop.com"
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
            >
              📧 support@badenshop.com
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              💬 Chat en direct
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
