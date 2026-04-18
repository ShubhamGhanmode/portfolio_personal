# AGENTS.md - AI Agent Instructions for FolioCraft

This document provides comprehensive instructions for AI agents working on the FolioCraft codebase. Follow these guidelines to ensure consistent, high-quality contributions.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Folder Structure](#architecture--folder-structure)
3. [Module System](#module-system)
4. [Content Management](#content-management)
5. [Styling & Theming](#styling--theming)
6. [Animation & Motion](#animation--motion)
7. [Component Development](#component-development)
8. [Configuration Files](#configuration-files)
9. [Development Workflow](#development-workflow)
10. [Common Tasks](#common-tasks)
11. [Quality Checklist](#quality-checklist)
12. [Anti-Patterns](#anti-patterns)
13. [Troubleshooting](#troubleshooting)

---

## Project Overview

**FolioCraft** is a modular, fork-friendly Next.js portfolio starter designed for developers who want a professional portfolio with minimal configuration.

### Core Principles
| Principle | Description |
|-----------|-------------|
| **Configuration over Modification** | Users customize via `config/` and `content/` files, not source code |
| **Module Independence** | Each section is self-contained and can be enabled/disabled |
| **Type Safety** | Full TypeScript coverage with strict mode |
| **Fork-Friendliness** | Clear separation between framework code and user customizations |
| **Design Polish** | Modern UI with animations, glassmorphism, and gradient accents |

### Tech Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.1 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | latest | Animations and transitions |
| next-themes | latest | Dark/light mode support |
| Lucide React | latest | Icon library |

---

## Architecture & Folder Structure

```
portfolio_project/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Homepage (renders module registry)
│   └── projects/         # Dedicated projects page
├── components/
│   ├── layout/           # Header, Footer, Section, SectionHeader
│   ├── providers/        # ThemeProvider
│   └── ui/               # Button, Card, Container (reusable)
├── config/
│   ├── modules.ts        # Module registry (order, visibility)
│   ├── site.ts           # Site metadata, social links
│   └── theme.ts          # Theme token documentation
├── content/              # All user content (text, data)
│   ├── profile.ts        # Shared identity (name, role, tagline)
│   ├── hero.ts           # Hero section content
│   ├── about.ts          # About section content
│   └── [module].ts       # Content for each module
├── lib/
│   ├── utils.ts          # cn() utility, helpers
│   └── module-registry.ts # Module loading utilities
├── modules/              # Portfolio sections (self-contained)
│   ├── _template/        # Template for new modules
│   ├── hero/             # Hero section
│   ├── about/            # About section
│   ├── skills/           # Skills section
│   ├── projects/         # Projects showcase
│   ├── experience/       # Work experience timeline
│   ├── education/        # Education timeline
│   └── contact/          # Contact methods
├── types/                # Shared TypeScript definitions
└── public/               # Static assets (images, fonts)
```

### Layer Classification

| Layer | Folders | Modification Risk | Agent Behavior |
|-------|---------|-------------------|----------------|
| **Framework** | `app/`, `components/`, `lib/`, `types/` | High | Modify carefully; affects all users |
| **Fork-Safe** | `config/`, `content/`, `modules/`, `public/` | Low | Safe to modify; user customization points |

### Key Files Reference
| File | Purpose | When to Modify |
|------|---------|----------------|
| `app/globals.css` | CSS variables, animations, utilities | Adding new animations or theme tokens |
| `app/layout.tsx` | Fonts, metadata, providers | Changing fonts or global layout |
| `config/modules.ts` | Module order and visibility | Adding/removing/reordering sections |
| `config/site.ts` | Site name, SEO, social links | Updating metadata |
| `content/profile.ts` | Name, role, tagline (shared) | Updating personal info |

---

## Module System

### Module Architecture
Each module is a self-contained portfolio section with its own component, types, and content.

```
modules/[name]/
├── [Name].tsx           # Main component (PascalCase)
├── [name].types.ts      # TypeScript interfaces (lowercase)
└── index.ts             # Barrel export
```

### Module Contract
All modules MUST implement `ModuleProps`:
```typescript
interface ModuleProps {
  id: string;        // Section anchor ID (used for navigation)
  className?: string; // Optional styling override
}
```

### Module Component Pattern
```typescript
'use client';

import { ModuleProps } from '@/types/module';
import { Container } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { exampleContent } from '@/content/example';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Example({ id, className }: ModuleProps) {
    const { heading, subheading, items } = exampleContent;

    return (
        <Section sectionId={id} className={cn('bg-[--color-accent]', className)}>
            <Container>
                <SectionHeader
                    heading={heading || 'Example'}
                    subheading={subheading}
                />
                {/* Module content here */}
            </Container>
        </Section>
    );
}
```

### Adding a New Module
1. **Copy template**: `modules/_template/` → `modules/[new-name]/`
2. **Rename files**: `Template.tsx` → `[NewName].tsx`, `template.types.ts` → `[new-name].types.ts`
3. **Define types** in `[new-name].types.ts`
4. **Create content** at `content/[new-name].ts` (import types from module)
5. **Build component** using `Section`, `SectionHeader`, `Container`
6. **Register** in `config/modules.ts`:
   ```typescript
   import { NewModule } from '@/modules/new-name';
   
   export const modules: ModuleDefinition[] = [
     // ... existing modules
     { id: 'new-name', name: 'New Section', showInNav: true, component: NewModule },
   ];
   ```
7. **Test**: Run `npm run build` and verify visually

### Removing/Disabling a Module
```typescript
// Option 1: Comment out
// { id: 'skills', name: 'Skills', showInNav: true, component: Skills },

// Option 2: Set enabled: false
{ id: 'skills', name: 'Skills', showInNav: true, component: Skills, enabled: false },
```

---

## Content Management

### Content File Pattern
```typescript
// content/example.ts
import { ExampleContent } from '@/modules/example/example.types';

export const exampleContent: ExampleContent = {
  heading: 'Section Title',
  subheading: 'Optional description text',
  items: [
    { title: 'Item 1', description: '...' },
  ],
};
```

### Shared Profile Content
`content/profile.ts` contains identity information shared across modules:
```typescript
export const profile = {
  name: 'Your Name',
  role: 'Your Role',
  tagline: 'Brief description...',
  summary: ['Paragraph 1...', 'Paragraph 2...'],
};
```

### Content Guidelines
| ✅ Do | ❌ Don't |
|-------|---------|
| Import types from module's `.types.ts` | Use `any` or untyped objects |
| Keep content separate from components | Hardcode text in TSX files |
| Use arrays for lists/collections | Use numbered keys like `item1`, `item2` |
| Validate with TypeScript | Skip type imports |

Note: When referencing files inside `public/`, use root-relative paths like `/assets/...` (omit `/public`).

---

### Project-Specific Notes
- Resume details are reflected across `content/profile.ts`, `content/about.ts`, `content/experience.ts`, `content/education.ts`, `content/skills.ts`, `content/projects.ts`, and `content/contact.ts`; keep these in sync with future updates.
- `config/site.ts` mirrors contact links and email; update alongside `content/contact.ts` to avoid mismatch.
- Two items are intentionally marked "In Progress" for LangChain and LangGraph prototypes; replace with final names and details once scoped.
- Education entries can include an optional `logo` path (root-relative to `public/`); when omitted, the default GraduationCap icon is shown.

## Styling & Theming

### CSS Custom Properties (Theme Tokens)
All colors, spacing, and effects use CSS variables. **Never hardcode colors**.

#### Color Tokens
| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-primary` | `#1f6b5a` | `#4ec4a6` | Primary brand, CTAs, links |
| `--color-secondary` | `#d97745` | `#6ba6ff` | Accent, gradients |
| `--color-background` | `#f8f1e6` | `#0b0f14` | Page background |
| `--color-foreground` | `#1e1a16` | `#f2f6f9` | Primary text |
| `--color-muted` | `#6f6256` | `#9aa5b1` | Secondary text |
| `--color-accent` | `#efe5d6` | `#151b22` | Card backgrounds, subtle surfaces |
| `--color-border` | `#e0d5c4` | `#232c35` | Borders, dividers |

#### Spacing & Layout Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-section` | `clamp(4rem, 12vh, 9rem)` | Section vertical padding |
| `--spacing-container` | `1200px` | Max container width |
| `--radius-sm` | `0.9rem` | Small rounded corners |
| `--radius-md` | `1.25rem` | Medium rounded corners |
| `--radius-lg` | `2.25rem` | Large rounded corners |
| `--radius-full` | `9999px` | Pill/circle shapes |

#### Shadow Tokens
| Token | Usage |
|-------|-------|
| `--shadow-soft` | Subtle elevation for cards |
| `--shadow-lift` | Prominent elevation, hover states |

### Using Tokens in Tailwind
```tsx
// Direct CSS variable usage
className="bg-[--color-primary] text-[--color-background]"

// With var() for complex values
className="shadow-[var(--shadow-lift)]"

// Border radius
className="rounded-[--radius-lg]"
```

### The `cn()` Utility
Always use `cn()` from `@/lib/utils` for conditional classes:
```typescript
import { cn } from '@/lib/utils';

// Basic usage
cn('base-class', 'another-class')

// Conditional classes
cn('base-class', isActive && 'active-class', className)

// Object syntax
cn('base-class', { 'conditional-class': condition })
```

### Gradient Patterns
```tsx
// Text gradient
className="text-gradient"  // Uses .text-gradient utility

// Background gradient
className="bg-gradient-to-br from-[--color-primary] to-[--color-secondary]"

// Border gradient (use .gradient-border utility class)
className="gradient-border"
```

---

## Animation & Motion

### Framer Motion Integration
This project uses `framer-motion` extensively. Key patterns:

#### Staggered Reveal Animation
```typescript
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Usage
<motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
    {items.map(item => (
        <motion.div key={item.id} variants={itemVariants}>
            {/* content */}
        </motion.div>
    ))}
</motion.div>
```

#### Scroll-Triggered Animation
```typescript
<motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
>
```

#### Floating/Looping Animation
```typescript
<motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
>
```

### CSS Animation Utilities
Available in `globals.css`:
| Class | Effect |
|-------|--------|
| `.animate-float` | Gentle floating motion |
| `.animate-float-delayed` | Delayed floating (for variety) |
| `.animate-pulse-glow` | Pulsing opacity/scale |
| `.animate-shimmer` | Shimmering gradient sweep |
| `.animate-gradient` | Shifting gradient background |

### Motion Component Rules
- **Always close motion tags properly**: `</motion.div>` not `</div>`
- **Use `'use client'`** directive in components with motion
- **Prefer `viewport={{ once: true }}`** to prevent re-triggering
- **Use `easeOut` or named easings**, not cubic-bezier arrays (TypeScript compatibility)

---

## Component Development

### UI Components (`components/ui/`)
Reusable, variant-based components:

#### Button Component
```typescript
<Button variant="primary" size="lg" href="/contact">
    Get in Touch
</Button>

// Variants: 'primary' | 'secondary' | 'outline' | 'ghost'
// Sizes: 'sm' | 'md' | 'lg'
// Supports href for link behavior
```

#### Card Component
```typescript
<Card variant="glass" hover="glow">
    <CardHeader>...</CardHeader>
    <CardContent>...</CardContent>
    <CardFooter>...</CardFooter>
</Card>

// Variants: 'default' | 'elevated' | 'outlined' | 'glass'
// Hover: 'lift' | 'glow' | 'border' | 'none'
```

#### Container Component
```typescript
<Container size="narrow">
    {/* Content */}
</Container>

// Sizes: 'default' | 'narrow' | 'wide'
```

### Layout Components (`components/layout/`)

#### Section & SectionHeader
```typescript
<Section sectionId={id} className="bg-[--color-accent]">
    <Container>
        <SectionHeader
            heading="Section Title"
            subheading="Optional description"
            align="center"  // 'center' | 'left'
        />
        {/* Content */}
    </Container>
</Section>
```

### Component Creation Checklist
- [ ] Use `forwardRef` for ref forwarding
- [ ] Accept `className` prop for style overrides
- [ ] Set `displayName` for debugging
- [ ] Use theme tokens, not hardcoded colors
- [ ] Support variants via props
- [ ] Export from barrel file (`index.ts`)

### Component Template
```typescript
import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'alternate';
}

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'base-styles-here',
                    variant === 'alternate' && 'alternate-styles',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

MyComponent.displayName = 'MyComponent';
```

---

## Configuration Files

### `config/site.ts`
Site-wide metadata and social links:
```typescript
export const siteConfig: SiteConfig = {
  name: 'Portfolio Name',
  description: 'SEO description',
  url: 'https://yoursite.com',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    twitter: 'https://twitter.com/username',
    email: 'you@email.com',
  },
  author: { name: 'Your Name', role: 'Your Role' },
};
```

### `config/modules.ts`
Controls section order, navigation visibility, and enabling:
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

### `config/theme.ts`
Documentation reference for theme tokens (actual values in `globals.css`).

---

## Development Workflow

### Commands
| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npm run dev` | Start dev server | Local development |
| `npm run build` | Production build | Before committing, final validation |
| `npm run lint` | Run ESLint | Check code quality |
| `npx tsc --noEmit` | Type check only | Quick validation without full build |

### Import Aliases
Always use `@/` prefix:
```typescript
import { Button } from '@/components/ui';
import { siteConfig } from '@/config/site';
import { ModuleProps } from '@/types/module';
import { cn } from '@/lib/utils';
import { heroContent } from '@/content/hero';
```

### File Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Button.tsx`, `HeroSection.tsx` |
| Types | lowercase + `.types.ts` | `hero.types.ts`, `project.types.ts` |
| Content | lowercase | `hero.ts`, `projects.ts` |
| Utilities | lowercase | `utils.ts`, `module-registry.ts` |
| Config | lowercase | `site.ts`, `modules.ts` |

---

## Common Tasks

### Task: Add a New Portfolio Section
1. Copy `modules/_template/` → `modules/[name]/`
2. Create types in `[name].types.ts`
3. Create content in `content/[name].ts`
4. Build component with animations
5. Register in `config/modules.ts`
6. Run `npm run build` to verify

### Task: Modify Theme Colors
1. Edit `app/globals.css` → `:root` block (light mode)
2. Edit `app/globals.css` → `.dark` block (dark mode)
3. Keep both in sync
4. Update `config/theme.ts` for documentation

### Task: Add a New Animation
1. Add `@keyframes` in `app/globals.css`
2. Create utility class (e.g., `.animate-new-effect`)
3. Use in components

### Task: Update Site Metadata
1. Edit `config/site.ts`
2. Changes auto-reflect in `app/layout.tsx` metadata

### Task: Add a New UI Component
1. Create file in `components/ui/[Name].tsx`
2. Follow component template pattern
3. Export from `components/ui/index.ts`
4. Use theme tokens for styling

### Task: Improve UI/Styling
1. Identify target components/sections
2. Review existing patterns in similar components
3. Use animation utilities and gradients consistently
4. Test in both light and dark mode
5. Verify mobile responsiveness

---

## Quality Checklist

Before completing ANY task, verify:

### Code Quality
- [ ] `npx tsc --noEmit` passes (no type errors)
- [ ] `npm run build` succeeds
- [ ] No ESLint warnings/errors

### Visual Quality
- [ ] Light mode looks correct
- [ ] Dark mode looks correct
- [ ] Mobile responsive (test at 375px width)
- [ ] Animations are smooth (no jank)
- [ ] Hover states work properly

### Architecture
- [ ] Content is in `content/` files, not hardcoded
- [ ] Theme tokens used, no hardcoded colors
- [ ] `cn()` utility used for class merging
- [ ] Components have `displayName` set

---

## Anti-Patterns

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Hardcode colors (`#3b82f6`) | Use tokens (`--color-primary`) |
| Put text content in components | Put content in `content/` files |
| Modify `app/page.tsx` for sections | Add modules to registry |
| Use inline styles | Use Tailwind + `cn()` |
| Skip TypeScript types | Define proper interfaces |
| Forget `displayName` | Always set for debugging |
| Use `</div>` for motion components | Use `</motion.div>` |
| Use cubic-bezier arrays | Use named easings like `"easeOut"` |
| Forget `'use client'` directive | Add for components with hooks/motion |
| Create components without `className` prop | Always accept className for overrides |

---

## Troubleshooting

### Common Issues

#### "Type 'number[]' is not assignable to type 'Easing'"
**Problem**: Using cubic-bezier array in framer-motion
**Solution**: Use named easing like `"easeOut"` or `"easeInOut"`
```typescript
// ❌ Wrong
transition: { ease: [0.25, 0.4, 0.25, 1] }

// ✅ Correct
transition: { ease: "easeOut" }
```

#### "Cannot find module '@/...'"
**Problem**: Import alias not resolving
**Solution**: Check `tsconfig.json` has paths configured, restart TypeScript server

#### Hydration Mismatch
**Problem**: Server/client render differently
**Solution**: Use `useEffect` + `useState` for browser-only values:
```typescript
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null; // or skeleton
```

#### Styles Not Applying
**Problem**: Tailwind classes not working
**Solution**: 
1. Check class name syntax (no typos)
2. Use `var(--token)` for shadow/complex values
3. Ensure Tailwind is processing the file

#### Dark Mode Not Working
**Problem**: Colors don't change in dark mode
**Solution**: Ensure using CSS variables, not hardcoded colors. Check `.dark` block in `globals.css`.

---

## Quick Reference

### Essential Imports
```typescript
// UI Components
import { Button, Card, CardContent, Container } from '@/components/ui';

// Layout Components  
import { Section, SectionHeader } from '@/components/layout';

// Utilities
import { cn } from '@/lib/utils';

// Types
import { ModuleProps } from '@/types/module';

// Animation
import { motion } from 'framer-motion';

// Icons
import { IconName } from 'lucide-react';
```

### Common Styling Patterns
```typescript
// Glassmorphism card
className="glass-card"

// Gradient text
className="text-gradient"

// Glow on hover
className="glow-hover"

// Gradient border on hover
className="gradient-border"

// Background section
className="bg-[--color-accent]"

// Primary button shadow
className="shadow-[var(--shadow-lift)]"
```

