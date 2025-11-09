import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  ShoppingCart,
  TrendingUp,
  Users,
  Settings,
  Plus,
  Eye,
  Edit,
  MoreVertical,
  Bell,
  Search,
  Filter,
  Download,
  Calendar,
} from "lucide-react";

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState("7d");

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top Navigation */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Tableau de Bord Vendeur
              </h1>
              <p className="text-sm text-muted-foreground">
                Bienvenue, Jean Dupont
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-8 border-b border-border mb-8 overflow-x-auto">
          {["overview", "products", "orders", "analytics", "settings"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-1 font-medium transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {tab === "overview"
                  ? "Vue d'ensemble"
                  : tab === "products"
                  ? "Produits"
                  : tab === "orders"
                  ? "Commandes"
                  : tab === "analytics"
                  ? "Analytics"
                  : "Paramètres"}
              </button>
            )
          )}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Revenus Totaux
                  </h3>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-foreground">€5,420.50</p>
                <p className="text-xs text-green-600 mt-2">+12% ce mois</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Commandes
                  </h3>
                  <ShoppingCart className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-foreground">248</p>
                <p className="text-xs text-muted-foreground mt-2">
                  12 en attente de traitement
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Produits Actifs
                  </h3>
                  <ShoppingCart className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-foreground">52</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Tous publiés
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Note Boutique
                  </h3>
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-3xl font-bold text-foreground">4.8/5</p>
                <p className="text-xs text-muted-foreground mt-2">
                  456 avis clients
                </p>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-foreground">
                    Ventes & Revenus
                  </h3>
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="px-3 py-1 text-sm bg-input border border-border rounded-lg text-foreground"
                  >
                    <option value="7d">7 derniers jours</option>
                    <option value="30d">30 derniers jours</option>
                    <option value="90d">90 derniers jours</option>
                  </select>
                </div>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[65, 78, 45, 82, 70, 88, 92].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-muted-foreground text-center">
                  Derniers 7 jours
                </div>
              </div>

              {/* Top Products */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Produits Tendance
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Chaussures Premium", sales: 45, revenue: 4050 },
                    { name: "Montre Connectée", sales: 32, revenue: 6400 },
                    { name: "Sac Intelligent", sales: 28, revenue: 1960 },
                  ].map((product, i) => (
                    <div key={i} className="pb-4 border-b border-border last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-foreground text-sm">
                          {product.name}
                        </p>
                        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                          €{product.revenue}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {product.sales} ventes
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2">
                    Recommandations IA
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>
                        Vos "Chaussures Premium" ont un taux de conversion de 3.2%. Augmentez le stock !
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>
                        Générez une description optimisée SEO pour "Montre Connectée" (gain potentiel: +15%)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>
                        Vos images produits convertissent 8% mieux avec IA. Générez pour 10 produits.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground">
                  Commandes Récentes
                </h3>
                <Link
                  to="?tab=orders"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Voir toutes
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Commande
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Client
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Montant
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Statut
                      </th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "#10234", client: "Marie T.", amount: "€89.99", status: "Livré" },
                      { id: "#10233", client: "Jean D.", amount: "€199.99", status: "En cours" },
                      { id: "#10232", client: "Sophie L.", amount: "€69.99", status: "En attente" },
                    ].map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-muted/50">
                        <td className="py-4 px-4 font-medium text-foreground">
                          {order.id}
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">
                          {order.client}
                        </td>
                        <td className="py-4 px-4 font-semibold text-foreground">
                          {order.amount}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === "Livré"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                : order.status === "En cours"
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                                : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                            <MoreVertical className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTS TAB */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex-1 relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Chercher un produit..."
                  className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Link
                to="/dashboard/products/new"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all whitespace-nowrap"
              >
                <Plus className="w-4 h-4" />
                Ajouter un produit
              </Link>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Produit
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        SKU
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Stock
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Prix
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Ventes
                      </th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { id: 1, name: "Chaussures Premium", sku: "SHOES-001", stock: 45, price: "€89.99", sales: 234 },
                      { id: 2, name: "Montre Connectée", sku: "WATCH-001", stock: 12, price: "€199.99", sales: 156 },
                      { id: 3, name: "Sac Intelligent", sku: "BAG-001", stock: 78, price: "€69.99", sales: 89 },
                    ].map((product) => (
                      <tr key={product.id} className="hover:bg-muted/50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-medium text-foreground">
                            {product.name}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">
                          {product.sku}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              product.stock > 20
                                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                            }`}
                          >
                            {product.stock} unités
                          </span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-foreground">
                          {product.price}
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">
                          {product.sales}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                              <Edit className="w-4 h-4 text-foreground" />
                            </button>
                            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                              <Eye className="w-4 h-4 text-muted-foreground" />
                            </button>
                            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                              <MoreVertical className="w-4 h-4 text-muted-foreground" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === "orders" && (
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-muted-foreground">Liste complète des commandes à implémenter</p>
          </div>
        )}

        {/* ANALYTICS TAB */}
        {activeTab === "analytics" && (
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-muted-foreground">Analytics détaillées à implémenter</p>
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-6">
                Paramètres de la Boutique
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom de la boutique
                  </label>
                  <input
                    type="text"
                    defaultValue="TechGear Elite"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Domaine personnalisé
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="monboutique.com"
                      className="flex-1 px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all">
                      Vérifier
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Fuseau horaire
                  </label>
                  <select className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Europe/Paris</option>
                    <option>Europe/London</option>
                    <option>America/New_York</option>
                  </select>
                </div>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all">
                  Enregistrer les modifications
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
