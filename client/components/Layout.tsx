import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container-grid py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">BADENSHOP</h1>
              <p className="text-xs text-muted-foreground">Marketplace IA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/marketplace"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Marketplace
            </Link>
            <Link
              to="/ai-playground"
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              AI Lab
            </Link>
            <Link
              to="/sellers"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Devenir Vendeur
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex p-2 hover:bg-muted rounded-lg transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>

            <Link
              to="/cart"
              className="relative p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Link>

            <Link
              to="/account"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <User className="w-5 h-5 text-foreground" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card animate-slide-in">
            <nav className="container-grid py-4 flex flex-col gap-4">
              <Link
                to="/marketplace"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                to="/ai-playground"
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Lab
              </Link>
              <Link
                to="/sellers"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Devenir Vendeur
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container-grid py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">BADENSHOP</h4>
              <p className="text-sm text-muted-foreground">
                Plateforme e-commerce marketplace avec multi-IA intégrée.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Marketplace</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/marketplace" className="hover:text-primary">
                    Tous les produits
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="hover:text-primary">
                    Catégories
                  </Link>
                </li>
                <li>
                  <Link to="/deals" className="hover:text-primary">
                    Offres spéciales
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Vendeurs</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/sellers" className="hover:text-primary">
                    Devenir vendeur
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="hover:text-primary">
                    Tableau de bord
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="hover:text-primary">
                    Support
                  </Link>
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
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 BADENSHOP. Tous droits réservés.</p>
            <p>Créé par KIMIWA Baden | Multi-IA Marketplace</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
