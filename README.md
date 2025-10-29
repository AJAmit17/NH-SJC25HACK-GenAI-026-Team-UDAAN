# FinRegent

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

An AI-powered financial regulatory compliance platform built with Next.js and Lyzr AI. FinRegent helps organizations navigate complex financial regulations through intelligent chat-based assistance, comprehensive document management, and team collaboration.

[Overview](#overview) • [Features](#features) • [Getting Started](#getting-started) • [Architecture](#architecture) • [Configuration](#configuration)

## Overview

FinRegent is a comprehensive compliance intelligence platform that combines **Agentic RAG Framework** with real-time regulatory knowledge to help financial institutions maintain compliance with RBI, SEBI, and other regulatory bodies. The platform leverages Lyzr AI agents for autonomous reasoning and provides explainable AI-driven compliance workflows.

**Key Capabilities:**

- **Intelligent Compliance Assistant**: Get instant, contextual answers to regulatory questions using advanced AI models trained on financial regulations
- **Multi-Agent Reasoning**: Autonomous agents that can understand, reason, and provide actionable compliance guidance
- **Unified Knowledge Base**: Seamlessly integrate RBI guidelines, SEBI compliance requirements, and internal policies
- **Document Intelligence**: Advanced document management with categorization, tagging, and search
- **Compliance Tracking**: Monitor compliance reviews, risk assessments, and regulatory updates
- **Team Collaboration**: Work together on compliance matters with role-based access

## Features

### AI-Powered Compliance

- **Smart Chat Interface**: Natural language interactions with an AI agent trained on financial regulations
- **Contextual Responses**: Get relevant answers with source citations and confidence scores
- **Multi-Turn Conversations**: Maintain context across conversation sessions
- **Streaming Responses**: Real-time response generation with markdown support

### Document Management

- **Knowledge Base**: Centralized repository for regulatory documents, guidelines, and policies
- **Document Classification**: Automatic categorization by source (RBI, SEBI, Internal) and category
- **Version Control**: Track document changes and maintain compliance history
- **Advanced Search**: Tag-based filtering and full-text search capabilities

### Compliance Workflow

- **Risk Assessment**: Automated identification of potential compliance risks
- **Compliance Reviews**: Track and manage compliance review processes
- **Query Management**: Log and respond to compliance queries with AI assistance
- **Audit Trail**: Complete history of all compliance-related activities

### Security & Authentication

- **Enterprise Authentication**: Clerk-powered secure authentication with SSO support
- **API Security**: Signed API requests with signature verification
- **Webhook Integration**: Real-time user synchronization
- **Role-Based Access**: Granular permission controls (coming soon)

### User Experience

- **Modern UI**: Beautiful, responsive interface built with Shadcn UI and Tailwind CSS
- **Dark Mode**: Full dark mode support with persistent preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG 2.1 compliant components

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **MongoDB** database (local or Atlas)
- **Clerk** account for authentication
- **Lyzr AI** account and API credentials

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/AJAmit17/FinRegent
cd FinRegent
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy the example environment file and configure your credentials:

```bash
cp .env.example .env
```

Edit `.env` with your actual credentials (see [Configuration](#configuration) section).

4. **Initialize the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Start the development server**

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router and React Server Components
- **Language**: TypeScript for type-safe development
- **UI Library**: React 19 with Shadcn UI components
- **Styling**: Tailwind CSS with custom design system
- **Database**: MongoDB with Prisma ORM
- **Authentication**: Clerk for user management
- **AI Integration**: Lyzr AI agents for compliance intelligence
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Tabler Icons and Lucide React

### Project Structure

```
finregent/
├── prisma/
│   └── schema.prisma              # Database models and schema
├── public/
│   └── assets/                    # Static assets and images
├── src/
│   ├── actions/
│   │   └── generate-signature.ts  # Server actions for API security
│   ├── app/
│   │   ├── (auth)/                # Authentication routes (public)
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── (routes)/              # Protected application routes
│   │   │   ├── page.tsx           # Landing/dashboard page
│   │   │   ├── documents/         # Document management
│   │   │   ├── settings/          # User settings
│   │   │   ├── team/              # Team collaboration
│   │   │   ├── updates/           # Regulatory updates
│   │   │   └── workspace/         # Main workspace with chat
│   │   ├── api/
│   │   │   ├── lyzr/chat/         # Chat API endpoint
│   │   │   └── users/webhook/     # Clerk user sync webhook
│   │   ├── globals.css            # Global styles
│   │   └── layout.tsx             # Root layout
│   ├── components/
│   │   ├── chat.tsx               # Main chat interface component
│   │   ├── provider/              # React Query and Theme providers
│   │   ├── sidebar/               # Navigation sidebar components
│   │   ├── shared/                # Shared components (Timeline, etc.)
│   │   └── ui/                    # Shadcn UI component library
│   ├── hooks/
│   │   ├── use-mobile.ts          # Mobile detection hook
│   │   └── use-toast.ts           # Toast notification hook
│   ├── lib/
│   │   ├── lyzrService.ts         # Lyzr AI integration service
│   │   ├── prisma.ts              # Prisma client singleton
│   │   ├── security.ts            # API signature utilities
│   │   └── utils.ts               # Utility functions
│   ├── types/
│   │   └── clerk-webhook.ts       # Clerk webhook type definitions
│   └── middleware.ts              # Next.js middleware for auth
├── .env.example                    # Environment variables template
└── package.json
```

### Database Schema

The application uses MongoDB with the following main models:

- **User**: User accounts synced from Clerk
- **Document**: Regulatory documents and knowledge base
- **Query**: User compliance queries with AI responses
- **ComplianceReview**: Compliance review workflow tracking
- **RegulatoryUpdate**: Tracking of regulatory changes
- **AuditLog**: Comprehensive audit trail

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

#### Clerk Authentication

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

#### Database

```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/finregent?retryWrites=true&w=majority"
```

#### Lyzr AI

```env
LYZR_API_KEY=sk-default-your_lyzr_api_key
LYZR_AGENT_ID=your_agent_id
```

#### Security

```env
API_SIGNATURE_SECRET=your_random_secret_key_min_32_chars
```

### Setting up Clerk

1. Create an application at [Clerk Dashboard](https://dashboard.clerk.com/)
2. Configure authentication methods (Email, Google, etc.)
3. Copy your API keys to `.env`
4. Set up a webhook endpoint:
   - URL: `https://your-domain.com/api/users/webhook`
   - Events: `user.created`, `user.updated`, `user.deleted`
   - Copy the webhook secret to `.env`

### Setting up Lyzr AI

1. Sign up at [Lyzr AI](https://lyzr.ai/)
2. Create a new AI agent in the dashboard
3. Train the agent on your compliance documents
4. Copy the API key and Agent ID to `.env`

### Setting up MongoDB

1. Create a database at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Whitelist your IP address
3. Create a database user
4. Copy the connection string to `.env`
5. Run `npx prisma db push` to create the schema

## Development

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open Prisma Studio (database GUI)
npx prisma db push   # Push schema changes to database
npx prisma generate  # Generate Prisma Client
```

### API Routes

#### POST `/api/lyzr/chat`

Send a message to the Lyzr AI agent.

**Request Body:**
```json
{
  "message": "What are the KYC requirements?",
  "sessionId": "optional-session-id"
}
```

**Response:**
```json
{
  "response": "AI response content",
  "session_id": "session-identifier",
  "user_id": "user-identifier"
}
```

#### POST `/api/users/webhook`

Clerk webhook endpoint for user synchronization. Automatically syncs user data to MongoDB.

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

> [!NOTE]
> Make sure to update the Clerk webhook URL to your production domain after deployment.

### Environment Configuration

Ensure all environment variables are set in your deployment platform:
- Clerk credentials
- MongoDB connection string
- Lyzr AI credentials
- API signature secret

## Troubleshooting

### Common Issues

**Database Connection Error**
- Verify MongoDB connection string format
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions
- Run `npx prisma generate` to regenerate client

**Clerk Authentication Issues**
- Verify API keys in `.env`
- Check redirect URLs match your domain
- Ensure webhook is properly configured
- Clear browser cookies and try again

**Lyzr AI Not Responding**
- Verify API key and agent ID
- Check agent is properly trained
- Review network tab for API errors
- Ensure API signature is being generated correctly

**Build Errors**
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Check TypeScript errors with `npm run lint`
- Ensure all environment variables are set

> [!TIP]
> Check the browser console and server logs for detailed error messages. Enable debug logging by setting `NODE_ENV=development`.

## Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Lyzr AI Documentation](https://docs.lyzr.ai/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Query](https://tanstack.com/query/latest)

### Regulatory Resources

- [RBI Guidelines](https://www.rbi.org.in/)
- [SEBI Regulations](https://www.sebi.gov.in/)
- [Financial Compliance Resources](https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx)

---

Built with ❤️ By Team UDAAN
