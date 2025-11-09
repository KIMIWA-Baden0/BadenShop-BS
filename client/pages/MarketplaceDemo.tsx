import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Heart,
  Star,
  ShoppingCart,
  Grid,
  List,
  ChevronDown,
  MapPin,
  Package,
  Zap,
  TrendingUp,
} from "lucide-react";
import Layout from "@/components/Layout";

export default function MarketplaceDemo() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("trending");
  const [products, setProducts] = useState([]);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // Fetch marketplace demo data
    fetch("/api/marketplace/demo")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data.products || []);
          setShops(data.data.shops || []);
        }
      })
      .catch(() => {
        // Fallback mock data
        setProducts([
          {
            _id: "1",
            name: "Chaussures Premium",
            price: 89.99,
            originalPrice: 129.99,
            images: [
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
            ],
            rating: 4.8,
            reviewCount: 234,
            shopId: "shop1",
            slug: "chaussures-premium",
          },
        ]);
      });
  }, []);

  const categories = ["all", "Tech", "Mode", "Sports", "Maison", "Santé"];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border py-12">
        <div className="container-grid">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Marketplace BadenShop
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Découvrez des milliers de produits de vendeurs vérifiés du monde entier.
              Cette démo vous montre comment la plateforme fonctionne en production.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 rounded-full border border-violet-200 dark:border-violet-800">
              <Zap className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm font-medium text-violet-800 dark:text-violet-400">
                Mode démo - Les vraies boutiques sont créées par nos vendeurs
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container-grid py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher produits, marques, vendeurs..."
              className="w-full pl-12 pr-4 py-4 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-lg"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 hidden lg:block">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-bold text-foreground mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="capitalize text-muted-foreground group-hover:text-foreground transition-colors">
                      {cat === "all" ? "Tous les produits" : cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="font-bold text-foreground mb-4">Gamme de prix</h3>
              <div className="space-y-2">
                {[
                  { label: "Moins de 50€", min: 0, max: 50 },
                  { label: "50€ - 100€", min: 50, max: 100 },
                  { label: "100€ - 500€", min: 100, max: 500 },
                  { label: "Plus de 500€", min: 500, max: Infinity },
                ].map((range) => (
                  <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sellers */}
            <div className="mb-8">
              <h3 className="font-bold text-foreground mb-4">Vendeurs Vedettes</h3>
              <div className="space-y-3">
                {shops.slice(0, 3).map((shop: any) => (
                  <Link
                    key={shop._id}
                    to={`/store/${shop._id}`}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {shop.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ⭐ {shop.rating}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewType === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewType === "list"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-muted-foreground">
                {products.length} produits trouvés
              </p>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Trier par</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 text-sm bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="trending">Tendance</option>
                  <option value="newest">Plus récent</option>
                  <option value="rating">Mieux noté</option>
                  <option value="price-low">Prix bas → haut</option>
                  <option value="price-high">Prix haut → bas</option>
                </select>
              </div>
            </div>

            {/* Products Grid/List */}
            {viewType === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product: any) => (
                  <Link
                    key={product._id}
                    to={`/product/${product._id}`}
                    className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary hover:shadow-lg transition-all"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden bg-muted h-48">
                      <img
                        src={product.images?.[0] || ""}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-destructive text-destructive-foreground rounded-full text-xs font-bold">
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </div>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="absolute bottom-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full hover:scale-110 transition-transform shadow-md"
                      >
                        <Heart className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground font-medium mb-2">
                        Vendeur Vérifié
                      </p>
                      <h3 className="font-semibold text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(product.rating)
                                ? "fill-accent text-accent"
                                : "text-muted"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          ({product.reviewCount})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-lg font-bold text-primary">
                          €{product.price?.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            €{product.originalPrice?.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart */}
                      <button className="w-full py-2 px-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Ajouter
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product: any) => (
                  <Link
                    key={product._id}
                    to={`/product/${product._id}`}
                    className="flex gap-4 p-4 border border-border rounded-xl bg-card hover:border-primary transition-all group"
                  >
                    <img
                      src={product.images?.[0] || ""}
                      alt={product.name}
                      className="w-32 h-32 object-cover rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(product.rating)
                                ? "fill-accent text-accent"
                                : "text-muted"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground">
                          ({product.reviewCount})
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Vendeur Vérifié • Livraison gratuite
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-primary">
                            €{product.price?.toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              €{product.originalPrice?.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all">
                          Ajouter
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Box */}
      <section className="mt-16 bg-card border-t border-border py-12">
        <div className="container-grid">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Comment fonctionne BadenShop Marketplace ?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Vendeurs créent:</strong> Chaque vendeur crée sa propre boutique avec ses produits
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Acheteurs découvrent:</strong> Tous les produits de tous les vendeurs dans une seule marketplace
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>IA optimise:</strong> Descriptions, images, recommandations - tout est amélioré par l'IA
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Paiements sécurisés:</strong> Stripe certifié, 100% secure, sans frais cachés
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
