import type {
  User,
  Shop,
  Product,
  Order,
  Review,
  AILog,
  PricingPlan,
  Payment,
  AIUsageStats,
  PlanType,
} from './types';

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ============= AUTH API =============
export interface SignupRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  marketingOptIn: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: Omit<User, 'password'>;
  token: string;
}

// ============= SHOP API =============
export interface CreateShopRequest {
  name: string;
  description: string;
  plan: PlanType;
}

export interface UpdateShopRequest {
  name?: string;
  description?: string;
  logo?: string;
  bannerImage?: string;
  theme?: Record<string, string>;
}

export interface ShopResponse {
  shop: Shop;
  stats: {
    totalProducts: number;
    totalSales: number;
    revenue: number;
    averageRating: number;
  };
}

// ============= PRODUCT API =============
export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  stock: number;
  useAI?: boolean; // Auto-generate description/SEO
}

export interface UpdateProductRequest {
  name?: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  images?: string[];
  category?: string;
  tags?: string[];
  stock?: number;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

// ============= ORDER API =============
export interface CreateOrderRequest {
  items: Array<{
    productId: string;
    quantity: number;
  }>;
  shippingAddress: {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
  };
}

export interface OrderResponse {
  order: Order;
  paymentSecret?: string; // For Stripe
}

// ============= REVIEW API =============
export interface CreateReviewRequest {
  orderId: string;
  productId: string;
  rating: number;
  comment: string;
  images?: string[];
}

export interface ReviewListResponse {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

// ============= AI API =============
export interface AIRouteRequest {
  taskType: 'description' | 'seo' | 'image' | 'translation';
  productId?: string;
  prompt: string;
  visibility?: 'private' | 'public';
  providerPreference?: 'auto' | 'openai' | 'google' | 'anthropic' | 'stability';
}

export interface AIRouteResponse {
  success: boolean;
  result?: string | Record<string, any>;
  provenance: {
    provider: string;
    model: string;
    promptHash: string;
  };
  estimatedCost: number;
  usage: {
    tokensUsed?: number;
    remainingBudget: number;
  };
}

export interface AIProviderStatus {
  provider: string;
  available: boolean;
  model: string;
  costPerUnit: number;
  rateLimit: number;
  currentLoad: number;
}

// ============= MARKETPLACE DEMO API =============
export interface MarketplaceDemoRequest {
  category?: string;
  sortBy?: 'trending' | 'newest' | 'price-low' | 'price-high';
  limit?: number;
}

export interface MarketplaceDemoResponse {
  products: Product[];
  shops: Shop[];
  featured: {
    products: Product[];
    shops: Shop[];
  };
  categories: string[];
}

// ============= PAYMENT API =============
export interface CreatePaymentIntentRequest {
  orderId: string;
  amount: number;
  currency: string;
}

export interface PaymentIntentResponse {
  clientSecret: string;
  publishableKey: string;
  amount: number;
}

// ============= ANALYTICS API =============
export interface DashboardStatsResponse {
  revenue: {
    total: number;
    thisMonth: number;
    growth: number;
  };
  orders: {
    total: number;
    pending: number;
    processed: number;
  };
  products: {
    total: number;
    views: number;
    topProduct: Product;
  };
  insights: {
    message: string;
    recommendation: string;
  };
}

export interface AIUsageResponse {
  stats: AIUsageStats;
  breakdown: Array<{
    taskType: string;
    count: number;
    cost: number;
  }>;
}

// ============= PRICING API =============
export interface PricingResponse {
  plans: PricingPlan[];
  currentPlan?: PricingPlan;
  features: Array<{
    feature: string;
    starter: boolean;
    pro: boolean;
    enterprise: boolean;
  }>;
}
