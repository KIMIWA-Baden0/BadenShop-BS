import { RequestHandler } from 'express';
import type { MarketplaceDemoResponse, ApiResponse } from '@shared/api';
import type { Product, Shop } from '@shared/types';

export const getMarketplaceDemo: RequestHandler = (req, res) => {
  try {
    const { category, limit = 24 } = req.query;

    // Mock featured products
    const mockProducts: Product[] = [
      {
        _id: 'prod_1',
        shopId: 'shop_1',
        name: 'Chaussures de sport premium avec technologie IA',
        slug: 'chaussures-sport-premium',
        description: 'Chaussures de haute qualité avec support IA pour confort optimal',
        price: 89.99,
        originalPrice: 129.99,
        images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'],
        category: 'Sports',
        tags: ['chaussures', 'sport', 'premium'],
        stock: 100,
        rating: 4.8,
        reviewCount: 234,
        status: 'published',
        aiGenerated: {
          descriptionAI: true,
          imagesAI: false,
          provider: 'openai',
          generatedAt: new Date(),
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: 'prod_2',
        shopId: 'shop_2',
        name: 'Montre connectée avec assistant IA',
        slug: 'montre-connectee-ia',
        description: 'Montre intelligente avec assistant personnel intégré',
        price: 199.99,
        originalPrice: 299.99,
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'],
        category: 'Tech',
        tags: ['montre', 'connectée', 'wearable'],
        stock: 50,
        rating: 4.6,
        reviewCount: 567,
        status: 'published',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: 'prod_3',
        shopId: 'shop_3',
        name: 'Sac à dos intelligent avec design IA',
        slug: 'sac-dos-intelligent',
        description: 'Sac ergonomique avec compartiments intelligents',
        price: 69.99,
        originalPrice: 99.99,
        images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'],
        category: 'Mode',
        tags: ['sac', 'dos', 'voyage'],
        stock: 150,
        rating: 4.7,
        reviewCount: 189,
        status: 'published',
        aiGenerated: {
          descriptionAI: true,
          imagesAI: true,
          provider: 'stability',
          generatedAt: new Date(),
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: 'prod_4',
        shopId: 'shop_1',
        name: 'Casque audio premium avec réduction IA',
        slug: 'casque-audio-ia',
        description: 'Casque audio haute fidélité avec réduction de bruit adaptative',
        price: 149.99,
        originalPrice: 249.99,
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'],
        category: 'Tech',
        tags: ['casque', 'audio', 'bluetooth'],
        stock: 80,
        rating: 4.7,
        reviewCount: 678,
        status: 'published',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Mock featured shops
    const mockShops: Shop[] = [
      {
        _id: 'shop_1',
        sellerId: 'user_1',
        name: 'TechGear Elite',
        slug: 'techgear-elite',
        description: 'Premium tech products and accessories',
        isVerified: true,
        totalProducts: 234,
        totalSales: 5000,
        rating: 4.8,
        followers: 45000,
        status: 'active',
        plan: 'pro',
        theme: {
          primaryColor: '#5B21B6',
          secondaryColor: '#06B6D4',
          accentColor: '#FFA500',
          fontFamily: 'Inter',
          layout: 'grid',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: 'shop_2',
        sellerId: 'user_2',
        name: 'DesignInnovate',
        slug: 'design-innovate',
        description: 'Innovative design products',
        isVerified: true,
        totalProducts: 156,
        totalSales: 3000,
        rating: 4.6,
        followers: 32000,
        status: 'active',
        plan: 'pro',
        theme: {
          primaryColor: '#5B21B6',
          secondaryColor: '#06B6D4',
          accentColor: '#FFA500',
          fontFamily: 'Inter',
          layout: 'grid',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const response: ApiResponse<MarketplaceDemoResponse> = {
      success: true,
      data: {
        products: mockProducts.slice(0, Number(limit)),
        shops: mockShops,
        featured: {
          products: mockProducts.slice(0, 4),
          shops: mockShops,
        },
        categories: ['Tech', 'Mode', 'Sports', 'Maison', 'Santé'],
      },
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch marketplace demo',
    } as ApiResponse<never>);
  }
};

export const getTrendingProducts: RequestHandler = (req, res) => {
  try {
    const { limit = 12 } = req.query;

    // In production: Query products sorted by views, sales, rating
    // Filtered by published status

    const mockProducts: Product[] = [
      {
        _id: 'prod_1',
        shopId: 'shop_1',
        name: 'Chaussures de sport premium',
        slug: 'chaussures-sport-premium',
        description: 'Premium sport shoes',
        price: 89.99,
        originalPrice: 129.99,
        images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'],
        category: 'Sports',
        tags: ['chaussures', 'sport'],
        stock: 100,
        rating: 4.8,
        reviewCount: 234,
        status: 'published',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    res.json({
      success: true,
      data: mockProducts,
    } as ApiResponse<Product[]>);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch trending products',
    } as ApiResponse<never>);
  }
};

export const searchProducts: RequestHandler = (req, res) => {
  try {
    const { q, category, minPrice, maxPrice, limit = 24, page = 1 } = req.query;

    // In production: Full-text search in MongoDB with filters

    const mockResults: Product[] = [];

    res.json({
      success: true,
      data: {
        products: mockResults,
        total: 0,
        page: Number(page),
        limit: Number(limit),
      },
    } as ApiResponse<any>);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Search failed',
    } as ApiResponse<never>);
  }
};
