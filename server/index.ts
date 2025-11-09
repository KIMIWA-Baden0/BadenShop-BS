import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import * as authRoutes from "./routes/auth";
import * as shopRoutes from "./routes/shops";
import * as marketplaceRoutes from "./routes/marketplace";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "pong";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // ============= AUTH ROUTES =============
  app.post("/api/auth/signup", authRoutes.signup);
  app.post("/api/auth/login", authRoutes.login);
  app.post("/api/auth/logout", authRoutes.logout);
  app.get("/api/auth/verify-email", authRoutes.verifyEmail);
  app.get("/api/auth/me", authRoutes.getCurrentUser);

  // ============= SHOP ROUTES =============
  app.post("/api/shops", shopRoutes.createShop);
  app.get("/api/shops/:shopId", shopRoutes.getShop);
  app.put("/api/shops/:shopId", shopRoutes.updateShop);
  app.get("/api/shops/slug/:slug", shopRoutes.getShopBySlug);
  app.get("/api/shops", shopRoutes.listShops);

  // ============= MARKETPLACE ROUTES =============
  app.get("/api/marketplace/demo", marketplaceRoutes.getMarketplaceDemo);
  app.get("/api/marketplace/trending", marketplaceRoutes.getTrendingProducts);
  app.get("/api/marketplace/search", marketplaceRoutes.searchProducts);

  // ============= PLACEHOLDER ROUTES (for later) =============
  // POST /api/products - Create product
  // GET /api/products - List products
  // GET /api/products/:id - Get product
  // PUT /api/products/:id - Update product
  // DELETE /api/products/:id - Delete product
  // POST /api/orders - Create order
  // GET /api/orders/:id - Get order
  // POST /api/reviews - Create review
  // GET /api/reviews/:productId - Get product reviews
  // POST /api/ai/route - AI endpoint
  // GET /api/ai/providers - List AI providers
  // POST /api/stripe/create-payment-intent - Stripe payment
  // POST /api/stripe/webhook - Stripe webhook

  return app;
}
