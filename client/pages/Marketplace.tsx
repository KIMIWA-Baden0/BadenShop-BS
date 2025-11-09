import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, ChevronDown } from "lucide-react";

export default function Marketplace() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("trending");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // In production, fetch from /api/products
    const mockProducts = [
      {
        id: "1",
        name: "Chaussures de sport premium",
        price: 89.99,
        originalPrice: 129.99,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 234,
        seller: "SportTech Pro",
        aiGenerated: true,
        badge: "Trending",
      },
      {
        id: "2",
        name: "Montre connectée",
        price: 199.99,
        originalPrice: 299.99,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 567,
        seller: "TechGear Elite",
        aiGenerated: false,
        badge: "Nouveau",
      },
      {
        id: "3",
        name: "Sac à dos intelligent",
        price: 69.99,
        originalPrice: 99.99,
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 189,
        seller: "DesignInnovate",
        aiGenerated: true,
        badge: "Promo",
      },
      {
        id: "4",
        name: "Lunettes de soleil UV",
        price: 79.99,
        image:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 342,
        seller: "FashionAI Co",
        aiGenerated: true,
      },
      {
        id: "5",
        name: "Bouteille réutilisable",
        price: 44.99,
        originalPrice: 59.99,
        image:
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 156,
        seller: "EcoTech Solutions",
        aiGenerated: false,
      },
      {
        id: "6",
        name: "Clavier mécanique gaming",
        price: 119.99,
        originalPrice: 179.99,
        image:
          "https://images.unsplash.com/photo-1587829191301-604db647e662?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 423,
        seller: "ProGaming Gear",
        aiGenerated: false,
        badge: "Best Seller",
      },
      {
        id: "7",
        name: "Casque audio avec IA",
        price: 149.99,
        originalPrice: 249.99,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 678,
        seller: "AudioMax",
        aiGenerated: true,
      },
      {
        id: "8",
        name: "Souris sans fil ergonomique",
        price: 59.99,
        originalPrice: 89.99,
        image:
          "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 234,
        seller: "ComfortTech",
        aiGenerated: false,
      },
      {
        id: "9",
        name: "Webcam 4K professionnelle",
        price: 129.99,
        image:
          "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 312,
        seller: "ProStream Tech",
        aiGenerated: false,
      },
      {
        id: "10",
        name: "Hub USB-C 7 en 1",
        price: 49.99,
        originalPrice: 79.99,
        image:
          "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 198,
        seller: "TechHub Store",
        aiGenerated: false,
      },
      {
        id: "11",
        name: "Batterie externe 65W",
        price: 39.99,
        originalPrice: 59.99,
        image:
          "https://images.unsplash.com/photo-1644256621000-f0aed49fe0f5?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 456,
        seller: "PowerTech Pro",
        aiGenerated: true,
      },
      {
        id: "12",
        name: "Support téléphone de bureau",
        price: 24.99,
        image:
          "https://images.unsplash.com/photo-1609108481033-26f83d315566?w=400&h=400&fit=crop",
        rating: 4.3,
        reviews: 178,
        seller: "OfficeGear",
        aiGenerated: false,
      },
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Apply sorting
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      filtered.reverse();
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortBy, products]);

  const categories = [
    { id: "all", name: "Tous" },
    { id: "tech", name: "Technologie" },
    { id: "fashion", name: "Mode" },
    { id: "sports", name: "Sports" },
    { id: "home", name: "Maison" },
  ];

  return (
    <Layout>
      <div className="py-8 border-b border-border">
        <div className="container-grid">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Marketplace BADENSHOP
          </h1>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher des produits, marques, vendeurs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="py-8 container-grid">
        {/* Filters Sidebar */}
        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden md:block w-64">
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Catégories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={selectedCategory === cat.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Gamme de prix
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Moins de 25€", min: 0, max: 25 },
                    { label: "25€ - 50€", min: 25, max: 50 },
                    { label: "50€ - 100€", min: 50, max: 100 },
                    { label: "Plus de 100€", min: 100, max: Infinity },
                  ].map((range) => (
                    <label
                      key={range.label}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* AI Generated Filter */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Filtres IA
                </h3>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Contenu généré par IA
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} produits trouvés
              </p>

              <div className="flex gap-4">
                {/* Mobile Filter Button */}
                <button
                  className="md:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4" />
                  Filtres
                </button>

                {/* Sort Dropdown */}
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                    <span className="text-sm">Trier par</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-10 hidden group-hover:block">
                    {[
                      { value: "trending", label: "Tendance" },
                      { value: "newest", label: "Plus récent" },
                      { value: "rating", label: "Mieux noté" },
                      { value: "price-low", label: "Prix (bas → haut)" },
                      { value: "price-high", label: "Prix (haut → bas)" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSortBy(option.value)}
                        className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors ${
                          sortBy === option.value ? "text-primary font-semibold" : ""
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-muted-foreground mb-4">
                    Aucun produit trouvé
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
