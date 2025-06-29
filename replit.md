# Luxe Local - Premium Clothing Brand E-commerce Application

## Overview

This is a modern full-stack e-commerce application for "Luxe Local," a premium clothing brand. The application combines a React frontend with an Express.js backend, featuring a sophisticated design system and database integration. The project emphasizes contemporary fashion aesthetics with clean, minimalist design principles.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: Framer Motion for smooth transitions and parallax effects

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure (routes prefixed with `/api`)
- **Development**: Hot reloading with Vite integration in development mode
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database provider
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Pooled connections for production scalability

## Key Components

### Frontend Components
- **Navigation System**: Fixed header with smooth scrolling navigation
- **Hero Section**: Full-screen landing with parallax background effects
- **Product Showcase**: Grid-based product catalog with hover animations
- **Interactive Forms**: Contact forms and newsletter subscription with validation
- **Toast Notifications**: User feedback system using Radix UI Toast
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

### Backend Infrastructure
- **Route Management**: Centralized route registration system
- **Storage Abstraction**: Interface-based storage layer for flexible data persistence
- **Error Handling**: Global error middleware with structured error responses
- **Development Tools**: Integrated Vite development server with HMR support

### Shared Resources
- **Type Definitions**: Shared TypeScript interfaces between frontend and backend
- **Database Schema**: Centralized schema definitions using Drizzle
- **Validation**: Zod schemas for runtime type checking and validation

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack React Query
2. **Server Processing**: Express.js routes handle requests and interact with storage layer
3. **Data Persistence**: Storage interface abstracts database operations through Drizzle ORM
4. **Response Handling**: Structured JSON responses with error handling
5. **State Updates**: React Query manages client-side cache and state synchronization

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **TypeScript**: Static type checking across the entire application
- **Vite**: Fast build tool with plugin ecosystem
- **ESBuild**: Fast JavaScript/TypeScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Production Services
- **Neon Database**: Serverless PostgreSQL database provider
- **Replit Integration**: Development environment optimization for Replit platform

## Deployment Strategy

### Development Environment
- Single command development server (`npm run dev`)
- Integrated frontend and backend with proxy configuration
- Hot module replacement for rapid iteration
- TypeScript checking in watch mode

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Migrations applied using `npm run db:push`
- **Serving**: Express serves both API routes and static frontend assets

### Environment Configuration
- Database URL configuration via environment variables
- Separate development and production database instances
- Build optimization flags for production deployments

## Changelog
- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.