import { RequestHandler } from 'express';
import type { SignupRequest, LoginRequest, AuthResponse, ApiResponse } from '@shared/api';
import { User } from '@shared/types';

// In production, use bcrypt and proper JWT handling
// For now, basic structure

export const signup: RequestHandler = (req, res) => {
  try {
    const { email, password, firstName, lastName, marketingOptIn } = req.body as SignupRequest;

    // Validation
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      } as ApiResponse<never>);
    }

    // In production: 
    // 1. Hash password with bcrypt
    // 2. Store in MongoDB
    // 3. Verify email
    // 4. Create JWT token

    const mockUser: Omit<User, 'password'> = {
      _id: 'user_' + Date.now(),
      email,
      firstName,
      lastName,
      role: 'customer',
      plan: 'starter',
      emailVerified: false,
      marketingOptIn,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const response: ApiResponse<AuthResponse> = {
      success: true,
      data: {
        user: mockUser,
        token: 'jwt_token_here', // Real JWT in production
      },
      message: 'Signup successful. Please verify your email.',
    };

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Signup failed',
    } as ApiResponse<never>);
  }
};

export const login: RequestHandler = (req, res) => {
  try {
    const { email, password } = req.body as LoginRequest;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password required',
      } as ApiResponse<never>);
    }

    // In production:
    // 1. Find user by email
    // 2. Compare password with bcrypt
    // 3. Generate JWT token

    const mockUser: Omit<User, 'password'> = {
      _id: 'user_123',
      email,
      firstName: 'Jean',
      lastName: 'Dupont',
      role: 'customer',
      plan: 'starter',
      emailVerified: true,
      marketingOptIn: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const response: ApiResponse<AuthResponse> = {
      success: true,
      data: {
        user: mockUser,
        token: 'jwt_token_here',
      },
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Login failed',
    } as ApiResponse<never>);
  }
};

export const logout: RequestHandler = (req, res) => {
  res.json({
    success: true,
    message: 'Logged out successfully',
  } as ApiResponse<never>);
};

export const verifyEmail: RequestHandler = (req, res) => {
  try {
    const { token } = req.query;

    // In production: Verify token, update user.emailVerified = true

    res.json({
      success: true,
      message: 'Email verified successfully',
    } as ApiResponse<never>);
  } catch (error) {
    res.status(400).json({
      success: false,
      error: 'Email verification failed',
    } as ApiResponse<never>);
  }
};

export const getCurrentUser: RequestHandler = (req, res) => {
  // In production: Extract user from JWT token in headers
  const mockUser: Omit<User, 'password'> = {
    _id: 'user_123',
    email: 'user@example.com',
    firstName: 'Jean',
    lastName: 'Dupont',
    role: 'customer',
    plan: 'starter',
    emailVerified: true,
    marketingOptIn: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  res.json({
    success: true,
    data: mockUser,
  } as ApiResponse<Omit<User, 'password'>>);
};
