<p align="center">
  <img src="public/images/icon.svg" alt="FolioCraft Logo" width="120" />
</p>

<h1 align="center">FolioCraft</h1>

<p align="center">
  <strong>A modular, fork-friendly Next.js portfolio starter with stunning animations and modern design.</strong>
</p>

<p align="center">
  Clone → Configure → Deploy. Your professional portfolio in minutes, not days.
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-latest-ff69b4?style=flat-square&logo=framer" alt="Framer Motion" /></a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License" />
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-configuration">Configuration</a> •
  <a href="#-theming">Theming</a> •
  <a href="#-modules">Modules</a> •
  <a href="#-deployment">Deployment</a>
</p>

---

## ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3>🧩 Modular Architecture</h3>
      <p>Each section is a self-contained module. Enable, disable, or reorder sections with a single line change.</p>
    </td>
    <td width="50%">
      <h3>🎨 Stunning Animations</h3>
      <p>Smooth scroll-triggered animations, floating elements, gradient effects, and glassmorphism built with Framer Motion.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🍴 Fork-Friendly Design</h3>
      <p>All customizations live in <code>config/</code> and <code>content/</code> folders. Zero source code modifications needed.</p>
    </td>
    <td width="50%">
      <h3>🌓 Dark/Light Mode</h3>
      <p>System-aware theme switching with beautiful color palettes for both modes. Instant, flicker-free transitions.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📱 Fully Responsive</h3>
      <p>Mobile-first design that looks stunning on phones, tablets, and desktops. Tested across all major browsers.</p>
    </td>
    <td width="50%">
      <h3>🔒 Type-Safe Content</h3>
      <p>Full TypeScript coverage with strict mode. IDE autocomplete for all configuration options.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>⚡ Performance Optimized</h3>
      <p>Next.js App Router with automatic code splitting, image optimization, and font loading strategies.</p>
    </td>
    <td width="50%">
      <h3>🔍 SEO Ready</h3>
      <p>Proper metadata, Open Graph images, semantic HTML, and structured data for better search rankings.</p>
    </td>
  </tr>
</table>

### Visual Highlights

| Effect | Description |
|--------|-------------|
| **Glassmorphism Cards** | Frosted glass effect with backdrop blur |
| **Gradient Borders** | Animated gradient borders on hover |
| **Floating Elements** | Gentle floating animations for visual interest |
| **Scroll Indicators** | Animated scroll-down prompts |
| **Progress Bars** | Animated skill progress with gradient fills |
| **Timeline Design** | Elegant gradient timelines for experience/education |
| **Pill Navigation** | Active section tracking with smooth transitions |

---

## 📸 Showcase

<p align="center">
  <img src="public/assets/screenshots/home-hero.png" alt="Home - Hero Section" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);" />
</p>

<p align="center">
  <img src="public/assets/screenshots/projects-page.png" alt="Projects Page" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);" />
</p>

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/foliocraft.git my-portfolio
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Quick Customization

1. **Update your identity** → Edit `content/profile.ts`
2. **Add your projects** → Edit `content/projects.ts`
3. **Configure site metadata** → Edit `config/site.ts`
4. **Deploy** → Push to Vercel, Netlify, or any host

---

## 📁 Project Structure

```
foliocraft/
├── 📂 app/                    # Next.js App Router
│   ├── globals.css            # Global styles, CSS variables, animations
│   ├── layout.tsx             # Root layout with fonts and metadata
│   ├── page.tsx               # Homepage (renders module registry)
│   └── projects/              # Dedicated projects page
│
├── 📂 components/             # Shared UI components
│   ├── layout/                # Header, Footer, Section, SectionHeader
│   ├── providers/             # ThemeProvider
│   └── ui/                    # Button, Card, Container
│
├── 📂 config/                 # ⭐ CONFIGURATION FILES
│   ├── modules.ts             # Module registry (order, visibility)
│   ├── site.ts                # Site metadata, social links
│   └── theme.ts               # Theme token documentation
│
├── 📂 content/                # ⭐ YOUR CONTENT
│   ├── profile.ts             # Name, role, tagline (shared)
│   ├── hero.ts                # Hero section content
│   ├── about.ts               # About section content
│   ├── skills.ts              # Skills and proficiency levels
│   ├── projects.ts            # Project showcase data
│   ├── experience.ts          # Work experience timeline
│   ├── education.ts           # Education timeline
│   └── contact.ts             # Contact methods
│
├── 📂 modules/                # Portfolio sections (self-contained)
│   ├── _template/             # Template for creating new modules
│   ├── hero/                  # Hero section
│   ├── about/                 # About section
│   ├── skills/                # Skills section
│   ├── projects/              # Projects showcase
│   ├── experience/            # Work experience
│   ├── education/             # Education background
│   └── contact/               # Contact information
│
├── 📂 lib/                    # Utility functions
├── 📂 types/                  # TypeScript definitions
└── 📂 public/                 # ⭐ YOUR STATIC ASSETS
    └── images/                # Profile, project images
```

### What to Modify

| Layer | Folders | Purpose |
|-------|---------|---------|
| ⭐ **Your Content** | `config/`, `content/`, `public/` | Safe to modify - your customizations |
| ⚙️ **Framework** | `app/`, `components/`, `lib/`, `types/` | Modify carefully - affects core functionality |

---

## ⚙️ Configuration

### Step 1: Personal Information

Edit `content/profile.ts`:

```typescript
export const profileContent = {
  name: 'Jane Developer',
  role: 'Full Stack Engineer',
  tagline: 'Building beautiful, performant web experiences',
  summary: [
    'I craft modern web applications with React and Node.js...',
    'Passionate about clean code and user experience...',
  ],
};
```

### Step 2: Site Metadata

Edit `config/site.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Jane Developer | Portfolio',
  description: 'Full Stack Engineer specializing in React and Node.js',
  url: 'https://janedeveloper.com',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/janedeveloper',
    linkedin: 'https://linkedin.com/in/janedeveloper',
    twitter: 'https://twitter.com/janedeveloper',
    email: 'hello@janedeveloper.com',
  },
  author: {
    name: 'Jane Developer',
    role: 'Full Stack Engineer',
  },
};
```

### Step 3: Module Content

Each section has its own content file. Examples:

<details>
<summary><strong>📄 content/skills.ts</strong></summary>

```typescript
export const skillsContent: SkillsContent = {
  heading: 'Skills & Expertise',
  subheading: 'Technologies I work with daily',
  categories: [
    {
      name: 'Frontend',
      icon: 'Monitor',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
      ],
    },
    // ... more categories
  ],
};
```

</details>

<details>
<summary><strong>📄 content/projects.ts</strong></summary>

```typescript
export const projectsContent: ProjectsContent = {
  heading: 'Featured Projects',
  subheading: 'A selection of my recent work',
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with...',
      image: '/images/projects/ecommerce.jpg',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/...',
      },
      featured: true,
    },
    // ... more projects
  ],
};
```

</details>

<details>
<summary><strong>📄 content/experience.ts</strong></summary>

```typescript
export const experienceContent: ExperienceContent = {
  heading: 'Work Experience',
  subheading: 'My professional journey',
  experiences: [
    {
      role: 'Senior Frontend Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading frontend architecture...',
      highlights: ['Led team of 5 engineers', 'Reduced load time by 40%'],
    },
    // ... more experiences
  ],
};
```

</details>

### Step 4: Images

Add your images to `public/images/`:

```
public/images/
├── profile.jpg          # Hero profile photo (recommended: 400x400)
├── about.jpg            # About section image
├── og-image.png         # Social share image (1200x630)
└── projects/            # Project screenshots
    ├── project-1.jpg
    └── project-2.jpg
```

### Step 5: Configure Modules

Edit `config/modules.ts` to control sections:

```typescript
export const modules: ModuleDefinition[] = [
  { id: 'hero', name: 'Home', showInNav: false, component: Hero },
  { id: 'about', name: 'About', showInNav: true, component: About },
  { id: 'skills', name: 'Skills', showInNav: true, component: Skills },
  { id: 'projects', name: 'Projects', showInNav: true, component: Projects },
  { id: 'experience', name: 'Experience', showInNav: true, component: Experience },
  { id: 'education', name: 'Education', showInNav: true, component: Education },
  { id: 'contact', name: 'Contact', showInNav: true, component: Contact },
];
```

**Module Options:**
- **Reorder**: Change array order to rearrange sections
- **Hide from nav**: Set `showInNav: false`
- **Disable completely**: Comment out or remove the module entry

---

## 🎨 Theming

### Color System

All colors use CSS custom properties for easy theming. Edit `app/globals.css`:

```css
:root {
  /* Primary brand color - buttons, links, accents */
  --color-primary: #1f6b5a;
  
  /* Secondary accent - gradients, highlights */
  --color-secondary: #d97745;
  
  /* Background colors */
  --color-background: #f8f1e6;
  --color-accent: #efe5d6;
  
  /* Text colors */
  --color-foreground: #1e1a16;
  --color-muted: #6f6256;
  
  /* Border color */
  --color-border: #e0d5c4;
}

.dark {
  --color-primary: #4ec4a6;
  --color-secondary: #6ba6ff;
  --color-background: #0b0f14;
  --color-accent: #151b22;
  --color-foreground: #f2f6f9;
  --color-muted: #9aa5b1;
  --color-border: #232c35;
}
```

### Typography

Fonts are configured in `app/layout.tsx`:

```typescript
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });
```

### Available Design Utilities

| Class | Effect |
|-------|--------|
| `.glass-card` | Glassmorphism with backdrop blur |
| `.gradient-border` | Animated gradient border on hover |
| `.glow-hover` | Glowing box-shadow on hover |
| `.text-gradient` | Gradient text effect |
| `.animate-float` | Gentle floating animation |
| `.animate-shimmer` | Shimmering gradient sweep |

---

## 🧩 Modules

### Built-in Modules

| Module | Description |
|--------|-------------|
| **Hero** | Full-screen intro with animated elements, profile image, and CTAs |
| **About** | Personal bio with highlights and image |
| **Skills** | Animated progress bars organized by category |
| **Projects** | Project cards with images, tags, and links |
| **Experience** | Work history timeline with gradient design |
| **Education** | Academic background timeline |
| **Contact** | Contact methods and CTA |

### Creating a New Module

1. **Copy the template**
   ```bash
   cp -r modules/_template modules/testimonials
   ```

2. **Define types** in `testimonials.types.ts`
   ```typescript
   export interface Testimonial {
     quote: string;
     author: string;
     role: string;
     avatar?: string;
   }
   
   export interface TestimonialsContent {
     heading: string;
     subheading?: string;
     testimonials: Testimonial[];
   }
   ```

3. **Create content** at `content/testimonials.ts`
   ```typescript
   import { TestimonialsContent } from '@/modules/testimonials/testimonials.types';
   
   export const testimonialsContent: TestimonialsContent = {
     heading: 'What People Say',
     testimonials: [
       { quote: '...', author: 'John Doe', role: 'CEO at Company' },
     ],
   };
   ```

4. **Build the component** in `Testimonials.tsx`
   ```typescript
   'use client';
   
   import { ModuleProps } from '@/types/module';
   import { Container } from '@/components/ui';
   import { Section, SectionHeader } from '@/components/layout';
   import { testimonialsContent } from '@/content/testimonials';
   
   export function Testimonials({ id, className }: ModuleProps) {
     return (
       <Section sectionId={id} className={className}>
         <Container>
           <SectionHeader heading={testimonialsContent.heading} />
           {/* Your content */}
         </Container>
       </Section>
     );
   }
   ```

5. **Register** in `config/modules.ts`
   ```typescript
   import { Testimonials } from '@/modules/testimonials';
   
   export const modules: ModuleDefinition[] = [
     // ... existing modules
     { id: 'testimonials', name: 'Testimonials', showInNav: true, component: Testimonials },
   ];
   ```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Other Platforms

FolioCraft works on any platform that supports Next.js:
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Self-hosted with `npm run build && npm start`

---

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type check without building |

### AI Agent Support

This project includes comprehensive documentation for AI coding assistants. See [AGENTS.md](AGENTS.md) for:
- Complete architecture documentation
- Component development patterns
- Animation guidelines
- Common tasks and troubleshooting

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT © [Shubham Ghanmode](https://github.com/yourusername)

---

<p align="center">
  Built with ❤️ using <a href="https://nextjs.org/">Next.js</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>, and <a href="https://www.framer.com/motion/">Framer Motion</a>
</p>

<p align="center">
  <a href="#foliocraft">⬆ Back to Top</a>
</p>
