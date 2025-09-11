# Project Documentation

## Project Structure

```
e-ogugua-portfolio/
├── client/                     # Main Next.js application
│   ├── public/                # Static files
│   ├── src/
│   │   ├── app/               # App Router pages
│   │   │   ├── blog/          # Blog routes
│   │   │   └── api/           # API routes
│   │   ├── components/        # Reusable components
│   │   │   ├── blog/         # Blog-specific components
│   │   │   └── ui/           # UI components
│   │   ├── lib/              # Utility functions
│   │   │   └── blog-utils.ts # Blog-related utilities
│   │   └── styles/           # Global styles
│   └── package.json          # Client dependencies
├── components/               # Shared components
├── content/                  # MDX content files
│   ├── blog/                # Blog posts (MDX format)
│   └── learn/               # Learning resources
├── pages/                    # Pages Router (legacy)
├── public/                   # Public assets
│   └── images/              # Image assets
├── server/                   # Server-side code
└── shared/                   # Shared utilities and types
```

## Blog System

The blog system is built with MDX, allowing for rich content with React components.

### Blog Post Structure

Each blog post is an MDX file with frontmatter:

```mdx
---
title: "Post Title"
date: "2023-01-01"
description: "Post description"
tags: ["tag1", "tag2"]
author: "Author Name"
image: "/path/to/image.jpg"
---

# Blog Post Content

Markdown content goes here...
```

### Key Features

- **Categories & Tags**: Organize posts with categories and multiple tags
- **Related Posts**: Automatically suggests related content based on tags
- **Reading Time**: Automatically calculated based on word count
- **SEO Optimized**: Proper meta tags and structured data
- **Syntax Highlighting**: For code blocks
- **Responsive Images**: Optimized for all devices

### API Endpoints

- `GET /api/blog` - Get all blog posts
- `GET /api/blog/[slug]` - Get a single blog post
- `GET /api/categories` - Get all categories
- `GET /api/tags` - Get all tags

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/e-ogugua/e-ogugua-portfolio.git
   cd e-ogugua-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `dev` - Start development server
- `build` - Create production build
- `start` - Start production server
- `lint` - Run ESLint
- `format` - Format code with Prettier
- `type-check` - Check TypeScript types
- `test` - Run tests (if configured)

### Adding a New Blog Post

1. Create a new MDX file in `content/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   description: "Brief description for SEO"
   tags: ["tag1", "tag2"]
   author: "Your Name"
   image: "/path/to/image.jpg" # Optional
   ---
   ```
3. Write your content using Markdown/MDX syntax
4. The post will be automatically included in the blog listing

### Code Organization

- `client/src/components/blog/` - Blog-specific components
- `client/src/lib/blog-utils.ts` - Blog data fetching and processing
- `content/blog/` - Blog post content (MDX files)
- `public/images/blog/` - Blog post images

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Deployment

The project is configured for deployment on Vercel.

### Automatic Deployment

1. Push your changes to the `main` branch
2. Vercel will automatically trigger a new deployment
3. Monitor deployments in the Vercel dashboard

### Manual Deployment

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   # For production deployment:
   vercel --prod
   ```

### Environment Variables

Make sure to set the following environment variables in your Vercel project:

- `NEXT_PUBLIC_APP_NAME` - Your application name
- `NEXT_PUBLIC_APP_URL` - Your production URL (e.g., https://yourdomain.com)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID (optional)

### Performance Optimization

- Images are automatically optimized with Next.js Image component
- Code splitting is handled automatically by Next.js
- Static generation for better performance
- Lazy loading for images and components

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
