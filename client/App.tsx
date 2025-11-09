import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import SellerDashboard from "./pages/Dashboard/SellerDashboard";
import MarketplaceDemo from "./pages/MarketplaceDemo";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import AiPolicy from "./pages/AiPolicy";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          {/* HOME */}
          <Route path="/" element={<Index />} />

          {/* AUTHENTICATION */}
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route
            path="/auth/verify-email"
            element={
              <Placeholder
                title="Vérification Email"
                description="Un email de vérification a été envoyé à votre adresse."
                pageName="Email Verification"
              />
            }
          />
          <Route
            path="/auth/forgot-password"
            element={
              <Placeholder
                title="Mot de passe oublié"
                description="Réinitialisez votre mot de passe en quelques étapes."
                pageName="Password Recovery"
              />
            }
          />

          {/* MARKETPLACE */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace-demo" element={<MarketplaceDemo />} />

          {/* SELLER DASHBOARD */}
          <Route path="/dashboard/store" element={<SellerDashboard />} />
          <Route
            path="/dashboard/products/new"
            element={
              <Placeholder
                title="Créer un Produit"
                description="Ajouter un nouveau produit à votre boutique."
                pageName="New Product"
              />
            }
          />
          <Route
            path="/dashboard/products/:id/edit"
            element={
              <Placeholder
                title="Éditer un Produit"
                description="Modifier les détails de votre produit."
                pageName="Edit Product"
              />
            }
          />

          {/* AI PLAYGROUND */}
          <Route
            path="/ai-playground"
            element={
              <Placeholder
                title="AI Lab - Playground"
                description="Explorez la puissance de l'IA pour générer des descriptions, des images et des insights SEO."
                pageName="AI Lab"
              />
            }
          />

          {/* STORE & PRODUCT PAGES */}
          <Route
            path="/store/:id"
            element={
              <Placeholder
                title="Magasin"
                description="Page de magasin détaillée avec tous les produits du vendeur."
                pageName="Store Page"
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <Placeholder
                title="Détail du Produit"
                description="Page complète du produit avec images, avis et options d'achat."
                pageName="Product Page"
              />
            }
          />
          <Route
            path="/stores"
            element={
              <Placeholder
                title="Tous les Magasins"
                description="Parcourez tous les vendeurs vérifiés de BadenShop."
                pageName="Stores Directory"
              />
            }
          />

          {/* SHOPPING PAGES */}
          <Route
            path="/cart"
            element={
              <Placeholder
                title="Panier"
                description="Votre panier d'achat avec options de paiement sécurisé."
                pageName="Shopping Cart"
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Placeholder
                title="Paiement"
                description="Complétez votre commande de manière sécurisée avec Stripe."
                pageName="Checkout"
              />
            }
          />

          {/* ACCOUNT PAGES */}
          <Route
            path="/account"
            element={
              <Placeholder
                title="Mon Compte"
                description="Gérez votre profil, commandes et paramètres."
                pageName="Account"
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Placeholder
                title="Mes Commandes"
                description="Suivi de vos commandes et historique d'achat."
                pageName="My Orders"
              />
            }
          />

          {/* SELLER PAGES */}
          <Route
            path="/sellers"
            element={
              <Placeholder
                title="Devenir Vendeur"
                description="Rejoignez BadenShop et vendez vos produits à des millions de clients."
                pageName="Seller Program"
              />
            }
          />

          {/* LEGAL PAGES */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ai-policy" element={<AiPolicy />} />
          <Route path="/faq" element={<FAQ />} />

          {/* SUPPORT & OTHER */}
          <Route
            path="/support"
            element={
              <Placeholder
                title="Support"
                description="Contactez notre équipe support pour toute assistance."
                pageName="Support"
              />
            }
          />
          <Route
            path="/categories"
            element={
              <Placeholder
                title="Catégories de Produits"
                description="Explorez tous les produits par catégorie."
                pageName="Categories"
              />
            }
          />
          <Route
            path="/deals"
            element={
              <Placeholder
                title="Offres Spéciales"
                description="Découvrez les meilleures offres et réductions du moment."
                pageName="Deals"
              />
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
