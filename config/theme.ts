// Theme configuration - FORK-SAFE: Modify this file to customize your theme

import { ThemeConfig } from '@/types/theme';

export const theme: ThemeConfig = {
    colors: {
        primary: {
            light: '#1f6b5a', // Deep teal for primary actions
            dark: '#4ec4a6', // Mint accent in dark mode
        },
        secondary: {
            light: '#d97745', // Warm clay accent
            dark: '#6ba6ff', // Soft blue highlight for dark mode
        },
        background: {
            light: '#f8f1e6',
            dark: '#0b0f14',
        },
        foreground: {
            light: '#1e1a16', // Ink-like text
            dark: '#f2f6f9', // Light text for dark mode
        },
        muted: {
            light: '#6f6256',
            dark: '#9aa5b1',
        },
        accent: {
            light: '#efe5d6',
            dark: '#151b22',
        },
        border: {
            light: '#e0d5c4',
            dark: '#232c35',
        },
    },
    fonts: {
        heading: 'var(--font-fraunces)',
        body: 'var(--font-space-grotesk)',
        mono: 'var(--font-jetbrains-mono)',
    },
    spacing: {
        section: 'clamp(4rem, 12vh, 9rem)', // Responsive section spacing
        container: '1200px',
    },
    borderRadius: {
        sm: '0.9rem',
        md: '1.25rem',
        lg: '2.25rem',
        full: '9999px',
    },
};

/**
 * Generate CSS custom properties from theme config
 * Used in globals.css via build process or directly
 */
export function generateCSSVariables(mode: 'light' | 'dark'): Record<string, string> {
    return {
        '--color-primary': theme.colors.primary[mode],
        '--color-secondary': theme.colors.secondary[mode],
        '--color-background': theme.colors.background[mode],
        '--color-foreground': theme.colors.foreground[mode],
        '--color-muted': theme.colors.muted[mode],
        '--color-accent': theme.colors.accent[mode],
        '--color-border': theme.colors.border[mode],
        '--font-heading': theme.fonts.heading,
        '--font-body': theme.fonts.body,
        '--font-mono': theme.fonts.mono,
        '--spacing-section': theme.spacing.section,
        '--spacing-container': theme.spacing.container,
        '--radius-sm': theme.borderRadius.sm,
        '--radius-md': theme.borderRadius.md,
        '--radius-lg': theme.borderRadius.lg,
        '--radius-full': theme.borderRadius.full,
    };
}
