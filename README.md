# Patrick Diesta Portfolio

A modern developer portfolio built with Next.js, Tailwind CSS, and Sanity.io as a headless CMS.

## Features

- Dynamic content powered by Sanity Studio
- Animated and interactive UI with React and Tailwind CSS
- Live preview and easy content management
- Responsive design

## Prerequisites

Before you begin, make sure you have:
- Node.js (v18 or higher)
- npm or yarn
- A Sanity account (create one at [sanity.io](https://www.sanity.io/))

## Setup Instructions

### 1. Create a Sanity Project

First, create a new Sanity project:

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Create a new Sanity project
sanity init

# Follow the prompts:
# - Choose "Create new project"
# - Enter your project name (e.g., "portfolio")
# - Choose "Yes" to use the default dataset configuration
# - Choose "Clean project with no predefined schemas"
# - Choose your preferred package manager
```

### 2. Configure Environment Variables

Create a `.env.local` file in the `patrick-diesta-portfolio` directory:

```bash
# .env.local
SANITY_PROJECT_ID=your_project_id_here
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
```

Replace `your_project_id_here` with your actual Sanity project ID (found in your Sanity dashboard).

### 3. Install Dependencies

```bash
# Install portfolio dependencies
cd patrick-diesta-portfolio
npm install

# Install Sanity Studio dependencies
cd ../studio-portfolio
npm install
```

### 4. Set Up Sanity Schema

The project includes the following content types that need to be created in your Sanity Studio:

#### Hero Type
- **Role/Title**: Your professional role (e.g., "Software Developer")
- **Name**: Your full name
- **Description**: A short bio or description
- **Resume Link**: URL to your resume

#### Project Type
- **Image**: Project screenshot or logo
- **Title**: Project name
- **Description**: Project description
- **Slug**: URL-friendly identifier (auto-generated from title)
- **Tech Stack**: Array of technologies used
- **Link**: Live project URL
- **Created At**: Creation date

#### Experience Type
- **Date Range**: Employment period (e.g., "2020 - Present")
- **Title**: Job position
- **Description**: Role description and achievements

#### Social Type
- **Icon**: Lucide icon name (e.g., "github", "linkedin")
- **Label**: Display name
- **Link**: Social media URL

### 5. Start Development Servers

```bash
# Start the portfolio (from patrick-diesta-portfolio directory)
npm run dev

# Start Sanity Studio (from studio-portfolio directory)
npm run dev
```

### 6. Access Your Applications

- **Portfolio**: [http://localhost:3000](http://localhost:3000)
- **Sanity Studio**: [http://localhost:3333](http://localhost:3333)

## Content Management

1. Open Sanity Studio at [http://localhost:3333](http://localhost:3333)
2. Create your content using the schema types above
3. Your portfolio will automatically update with the new content

## Deployment

### Deploy Portfolio to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy

### Deploy Sanity Studio

```bash
# From studio-portfolio directory
npm run deploy
```

## Project Structure

```
sanity/
├── patrick-diesta-portfolio/     # Next.js portfolio frontend
│   ├── src/
│   │   ├── app/                  # Next.js app router
│   │   ├── components/           # React components
│   │   └── sanity/               # Sanity client configuration
│   └── package.json
└── studio-portfolio/             # Sanity Studio
    ├── schemaTypes/              # Content type definitions
    └── package.json
```

---

**Built by Patrick Diesta.**
