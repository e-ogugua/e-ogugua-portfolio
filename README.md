# e-ogugua-portfolio

A modern, responsive portfolio website with a powerful blog system, built with Next.js and TypeScript.

## Features

- 🚀 Modern, responsive portfolio website
- 🌓 Dark/light theme support
- 📝 Advanced blog system with:
  - Markdown/MDX support
  - Categories and tags
  - Related posts
  - Reading time calculation
  - SEO optimization
- 🎨 Multiple persona views
- 🏗️ Project showcase
- ⚡ Performance optimized
- 🔍 SEO friendly

## Documentation

For detailed information about the project structure, routing system, and recent changes, please refer to the [DOCUMENTATION.md](./DOCUMENTATION.md) file.

## Tech Stack

- ⚡ Next.js 14 (App Router)
- 🚀 React 18
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 📝 MDX for content
- 🔍 Next SEO
- 📱 Fully responsive design
- 🚀 Vercel (Deployment)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+
- Vercel CLI (for deployment)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/e-ogugua/e-ogugua-portfolio.git
   cd e-ogugua-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Update the environment variables in .env.local
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This application is deployed on Vercel. Any push to the `main` branch will trigger an automatic deployment.

### Manual Deployment

1. Install Vercel CLI (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel
   ```bash
   vercel
   # or
   vercel --prod
   ```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# App
NEXT_PUBLIC_APP_NAME="e-ogugua-portfolio"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database (if applicable)
# DATABASE_URL=your_database_url

# Authentication (if applicable)
# NEXTAUTH_SECRET=your_secret_here
# NEXTAUTH_URL=http://localhost:3000

# Google Analytics (optional)
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Last Updated

2025-09-08
