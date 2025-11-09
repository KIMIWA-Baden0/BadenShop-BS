import { RequestHandler } from 'express';
import type { CreateShopRequest, UpdateShopRequest, ShopResponse, ApiResponse } from '@shared/api';
import { Shop } from '@shared/types';

export const createShop: RequestHandler = (req, res) => {
  try {
    const { name, description, plan } = req.body as CreateShopRequest;
    const userId = (req as any).userId; // From JWT middleware

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        error: 'Name and description required',
      } as ApiResponse<never>);
    }

    // In production:
    // 1. Validate plan tier
    // 2. Create shop in MongoDB
    // 3. Create default Stripe account for vendor
    // 4. Generate unique shop slug

    const newShop: Shop = {
      _id: 'shop_' + Date.now(),
      sellerId: userId,
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-') + '-' + Math.random().toString(36).substr(2, 9),
      description,
      plan,
      isVerified: false,
      totalProducts: 0,
      totalSales: 0,
      rating: 5,
      followers: 0,
      status: 'active',
      theme: {
        primaryColor: '#5B21B6',
        secondaryColor: '#06B6D4',
        accentColor: '#FFA500',
        fontFamily: 'Inter',
        layout: 'grid',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const response: ApiResponse<ShopResponse> = {
      success: true,
      data: {
        shop: newShop,
        stats: {
          totalProducts: 0,
          totalSales: 0,
          revenue: 0,
          averageRating: 5,
        },
      },
      message: 'Shop created successfully',
    };

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create shop',
    } as ApiResponse<never>);
  }
};

export const getShop: RequestHandler = (req, res) => {
  try {
    const { shopId } = req.params;

    // In production: Fetch from MongoDB

    const mockShop: Shop = {
      _id: shopId,
      sellerId: 'user_123',
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
    };

    res.json({
      success: true,
      data: {
        shop: mockShop,
        stats: {
          totalProducts: 234,
          totalSales: 5000,
          revenue: 50000,
          averageRating: 4.8,
        },
      },
    } as ApiResponse<ShopResponse>);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch shop',
    } as ApiResponse<never>);
  }
};

export const updateShop: RequestHandler = (req, res) => {
  try {
    const { shopId } = req.params;
    const updates = req.body as UpdateShopRequest;

    // In production: Update shop in MongoDB with validation

    res.json({
      success: true,
      message: 'Shop updated successfully',
    } as ApiResponse<never>);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update shop',
    } as ApiResponse<never>);
  }
};

export const getShopBySlug: RequestHandler = (req, res) => {
  try {
    const { slug } = req.params;

    // In production: Query MongoDB for shop.slug

    const mockShop: Shop = {
      _id: 'shop_123',
      sellerId: 'user_123',
      name: 'TechGear Elite',
      slug,
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
    };

    res.json({
      success: true,
      data: {
        shop: mockShop,
        stats: {
          totalProducts: 234,
          totalSales: 5000,
          revenue: 50000,
          averageRating: 4.8,
        },
      },
    } as ApiResponse<ShopResponse>);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Shop not found',
    } as ApiResponse<never>);
  }
};

export const listShops: RequestHandler = (req, res) => {
  try {
    const { limit = 20, page = 1, sort = 'rating' } = req.query;

    // In production: Paginated query with sorting

    const mockShops: Shop[] = [
      {
        _id: 'shop_1',
        sellerId: 'user_1',
        name: 'TechGear Elite',
        slug: 'techgear-elite',
        description: 'Premium tech products',
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
    ];

    res.json({
      success: true,
      data: mockShops,
    } as ApiResponse<Shop[]>);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch shops',
    } as ApiResponse<never>);
  }
};
