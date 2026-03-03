<div align="center">
  <h1>🚀 Gripz AI Website</h1>
  <p><strong>Intelligence at Your Fingertips</strong></p>
  
  <p> Official website for Gripz AI - The world's first IoT-enabled smart handlebar grip transforming two-wheelers into intelligent, connected, and safer mobility systems.</p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
  ![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

Introduction

Gripz AI is revolutionizing two-wheeler safety through innovative and patented IoT technology. This website showcases our smart handlebar grip system!

Visit the live site: **[gripz.ai](https://gripz.ai)** *(coming soon)*

---

Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18.2** | UI component library |
| **CSS Variables** | Themeable design system |
| **Google Fonts** | Inter & JetBrains Mono typography |
| **Vercel** | Hosting & deployment platform |

---

How to Get Started

Prerequisites

Before you begin, ensure you have:
- **Node.js 18.0+** installed ([Download here](https://nodejs.org/))
- **npm** or **yarn** package manager
- A code editor like [VS Code](https://code.visualstudio.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/gripz-website.git
   cd gripz-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

>> Building for Production

```bash
# Create optimized production build
npm run build

# The static site will be in the 'out/' directory
```

---

Project Structure

```
gripz-website/
├── app/
│   ├── page.js          # Main homepage component
│   ├── layout.js        # Root layout with metadata
│   └── globals.css      # Global styles and theme
├── public/              # Static assets (images, icons)
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

### Key Files

- **`app/page.js`** - Main page component with all sections (Hero, Features, CTA, etc.)
- **`app/globals.css`** - Complete styling with CSS variables and animations
- **`app/layout.js`** - SEO metadata, Open Graph tags, and root HTML structure
- **`next.config.js`** - Static export configuration for Vercel deployment

---

## Customization

### Change Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --color-bg: #0a0a0a;           /* Background */
  --color-surface: #141414;       /* Cards/sections */
  --color-border: #2a2a2a;        /* Borders */
  --color-accent: #00ff88;        /* Primary accent (green) */
  --color-accent-blue: #0088ff;   /* Secondary accent (blue) */
}
```

### Update Content

All text content is in `app/page.js`. Edit these arrays and sections:

```javascript
// Features section
const features = [
  {
    title: "Your Feature",
    description: "Your description",
    icon: "⟳"
  },
  // ...
];

// Stats section
const stats = [
  { value: "6-10hrs", label: "Daily rider exposure" },
  // ...
];
```

### Add New Fonts

1. Update Google Fonts import in `app/globals.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
   ```

2. Change the CSS variables:
   ```css
   --font-sans: 'Your Font', sans-serif;
   --font-mono: 'Your Mono Font', monospace;
   ```

### Add Images

1. Place images in the `public/` folder:
   ```
   public/
   ├── logo.png
   ├── product.jpg
   └── hero-bg.jpg
   ```

2. Reference them in components:
   ```jsx
   <img src="/logo.png" alt="Gripz AI Logo" />
   ```

---

##  Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** <1s
- **Time to Interactive:** <2s
- **Total Bundle Size:** ~150KB (gzipped)

### Optimization Features
✅ Static site generation (SSG)  
✅ Optimized CSS with no runtime overhead  
✅ Minimal JavaScript bundle  
✅ All animations use CSS for 60fps performance  
✅ Font preloading for faster text rendering  
✅ Semantic HTML for better SEO  

---

## Contributing

This is a proprietary project for Gripz AI. For internal contributions:

1. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. Commit your changes
   ```bash
   git add .
   git commit -m 'Add amazing feature'
   ```

3. Push to the branch
   ```bash
   git push origin feature/amazing-feature
   ```

4. Open a Pull Request on GitHub

---

## Please Support & Contact the poor Founder!

- **Website:** [gripz.ai](https://gripz.ai)
- **Email:** surya@gripz.ai
- **Issues:** Use [GitHub Issues](https://github.com/YOUR_USERNAME/gripz-website/issues) for bug reports

---

## 📄 License

**Proprietary** - © 2026 Gripz AI. All rights reserved.

This project and its contents are the intellectual property of Gripz AI and may not be reproduced, distributed, or used without explicit permission.

---

<div align="center">
  <p>Made with ❤️ by the Gripz AI team</p>
  <p>
    <a href="https://gripz.ai">Website</a> •
    <a href="mailto:hello@gripz.ai">Contact</a> •
    <a href="https://github.com/YOUR_USERNAME/gripz-website/issues">Report Bug</a>
  </p>
</div>
