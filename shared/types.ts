// User Types
export type UserRole = 'customer' | 'seller' | 'admin';
export type PlanType = 'starter' | 'pro' | 'enterprise';

export interface User {
  _id: string;
  email: string;
  password: string; // bcrypted
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  plan: PlanType;
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
  marketingOptIn: boolean;
  profileImage?: string;
  bio?: string;
  stripeId?: string; // Stripe customer ID
}

// Shop/Store Types
export interface Shop {
  _id: string;
  sellerId: string;
  name: string;
  slug: string; // badenshop.com/s/slug
  description: string;
  logo?: string;
  bannerImage?: string;
  theme: ShopTheme;
  plan: PlanType;
  isVerified: boolean;
  totalProducts: number;
  totalSales: number;
  rating: number;
  followers: number;
  status: 'active' | 'suspended' | 'deleted';
  domainCustom?: string;
  legalInfo?: {
    siret?: string;
    tva?: string;
    businessName?: string;
  };
  bankInfo?: {
    stripeConnectId?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ShopTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  layout: 'grid' | 'list' | 'carousel';
}

// Product Types
export interface Product {
  _id: string;
  shopId: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  stock: number;
  rating: number;
  reviewCount: number;
  status: 'draft' | 'published' | 'archived';
  aiGenerated?: {
    descriptionAI: boolean;
    imagesAI: boolean;
    provider: string;
    generatedAt: Date;
  };
  seoData?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

// Order Types
export interface Order {
  _id: string;
  customerId: string;
  shopId: string;
  items: OrderItem[];
  totalAmount: number;
  commission: number; // BadenShop commission
  vendorEarnings: number;
  paymentStatus: 'pending' | 'succeeded' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentIntentId?: string; // Stripe
  shippingAddress: Address;
  trackingNumber?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}

// Review Types
export interface Review {
  _id: string;
  productId: string;
  customerId: string;
  orderId: string;
  rating: number; // 1-5
  comment: string;
  images?: string[];
  verified: boolean; // Must have purchased
  helpful: number;
  unhelpful: number;
  vendorResponse?: {
    text: string;
    respondedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

// AI Log for Clause Anthropique
export interface AILog {
  _id: string;
  userId: string;
  taskType: 'description' | 'seo' | 'image' | 'translation' | 'conversation' | 'code';
  provider: 'openai' | 'google' | 'anthropic' | 'stability';
  model: string;
  promptHash: string;
  inputPreview: string;
  estimatedCost: number;
  billedCost: number;
  status: 'pending' | 'success' | 'failed';
  resultPreview?: string;
  latencyMs: number;
  createdAt: Date;
  completedAt?: Date;
}

// Plan & Pricing
export interface PricingPlan {
  type: PlanType;
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
  features: string[];
  commission: number;
  maxProducts: number | null;
  maxStorage: number;
  customDomain: boolean;
  aiMonthlyBudget: number;
}

// Payment
export interface Payment {
  _id: string;
  userId: string;
  orderId?: string;
  amount: number;
  currency: string;
  status: 'pending' | 'succeeded' | 'failed';
  paymentMethod: 'card' | 'paypal' | 'bank_transfer';
  stripePaymentIntentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// IA Usage Stats
export interface AIUsageStats {
  userId: string;
  month: Date;
  totalCalls: number;
  totalCost: number;
  budgetRemaining: number;
  callsByType: Record<string, number>;
  callsByProvider: Record<string, number>;
}
