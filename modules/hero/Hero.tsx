'use client';

import { ModuleProps } from '@/types/module';
import { Container, Button } from '@/components/ui';
import { heroContent } from '@/content/hero';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Hero component that displays the main landing section of the portfolio.
 * 
 * @component
 * @description
 * Renders a full-screen hero section with animated content including:
 * - Greeting badge with pulse indicator
 * - Name heading with gradient text effect
 * - Role indicator with decorative lines
 * - Tagline/description text
 * - Primary and secondary call-to-action buttons
 * - Social media links (GitHub, LinkedIn, Email)
 * - Profile image or initial avatar with decorative elements
 * - Floating status badges (role and availability)
 * - Animated scroll indicator
 * - Floating background decorative elements
 * 
 * The component uses Framer Motion for staggered animations and includes
 * responsive layouts that adapt from mobile to desktop viewports.
 * 
 * @param {ModuleProps} props - Component props
 * @param {string} [props.id] - Optional section ID for navigation anchors
 * @param {string} [props.className] - Optional additional CSS classes
 * 
 * @returns {JSX.Element} The rendered hero section
 * 
 * @example
 * ```tsx
 * <Hero id="home" className="custom-hero" />
 * ```
 * 
 * @remarks
 * - Content is sourced from the `heroContent` configuration object
 * - Social links are sourced from the `siteConfig.links` object
 * - Uses CSS custom properties for theming (--color-*, --radius-*, --shadow-*)
 * - Includes accessibility features like aria-labels and semantic HTML
 * 
 * @note Regarding `bg-[--color-white]`: This approach is valid for Tailwind CSS with
 * CSS custom properties. However, for a pure white color, consider using Tailwind's
 * built-in `bg-white` class instead, or ensure `--color-white` is defined as `#ffffff`
 * or `rgb(255, 255, 255)` in your CSS variables. Using CSS variables is beneficial
 * for theme consistency, but `bg-white` is more explicit and doesn't require variable definition.
 */
export function Hero({ id, className }: ModuleProps) {
    const { greeting, name, role, tagline, cta, image } = heroContent;
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
    };

    return (
        <section
            id={id}
            className={cn(
                'relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden',
                className
            )}
        >
            {/* Floating decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[--color-primary] opacity-10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[--color-secondary] opacity-10 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5">
                    <div className="w-full h-full rounded-full border border-[--color-primary] animate-pulse-glow" />
                </div>
            </div>

            <Container size="wide" className="relative z-10">
                <motion.div
                    className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center"
                    initial="hidden"
                    animate="show"
                    variants={containerVariants}
                >
                    <motion.div
                        className="order-2 lg:order-1 text-center lg:text-left space-y-8"
                        variants={itemVariants}
                    >
                        <div className="space-y-5">
                            {greeting && (
                                <motion.p
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[--color-muted] bg-[--color-accent] px-4 py-2 pr-6 rounded-full border border-[--color-border]"
                                    variants={itemVariants}
                                >
                                    <span className="w-2 h-2 rounded-full bg-[--color-primary] animate-pulse" />
                                    {greeting}
                                </motion.p>
                            )}
                            <motion.h1
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] text-[--color-foreground]"
                                variants={itemVariants}
                            >
                                {name.split(' ').map((word, i) => (
                                    <span key={i} className={i === 1 ? 'text-gradient' : ''}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </motion.h1>
                            <motion.div
                                className="flex items-center justify-center lg:justify-start gap-4"
                                variants={itemVariants}
                            >
                                <span className="h-px w-12 bg-gradient-to-r from-transparent via-[--color-primary] to-[--color-secondary]" />
                                <span className="text-sm font-medium uppercase tracking-[0.25em] text-[--color-primary]">
                                    {role}
                                </span>
                                <span className="h-px w-12 bg-gradient-to-l from-transparent via-[--color-secondary] to-[--color-primary]" />
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-base sm:text-lg text-[--color-muted] max-w-xl mx-auto lg:mx-0 leading-relaxed"
                            variants={itemVariants}
                        >
                            {tagline}
                        </motion.p>

                        {cta && (
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                variants={itemVariants}
                            >
                                {cta.primary && (
                                    <Button href={cta.primary.href} size="lg">
                                        {cta.primary.text}
                                    </Button>
                                )}
                                {cta.secondary && (
                                    <Button href={cta.secondary.href} variant="outline" size="lg">
                                        {cta.secondary.text}
                                    </Button>
                                )}
                            </motion.div>
                        )}

                        <motion.div
                            className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start pt-4"
                            variants={itemVariants}
                        >
                            {siteConfig.links.github && (
                                <a
                                    href={siteConfig.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[--color-border] bg-[--color-background] px-3 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[--color-muted] hover:text-[--color-foreground] hover:border-[--color-primary] hover:shadow-[0_0_20px_-5px_var(--color-primary)] transition-all duration-300"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                    <span className="hidden sm:inline">GitHub</span>
                                </a>
                            )}
                            {siteConfig.links.linkedin && (
                                <a
                                    href={siteConfig.links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[--color-border] bg-[--color-background] px-3 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[--color-muted] hover:text-[--color-foreground] hover:border-[--color-primary] hover:shadow-[0_0_20px_-5px_var(--color-primary)] transition-all duration-300"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                    <span className="hidden sm:inline">LinkedIn</span>
                                </a>
                            )}
                            {siteConfig.links.email && (
                                <a
                                    href={`mailto:${siteConfig.links.email}`}
                                    className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[--color-border] bg-[--color-background] px-3 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[--color-muted] hover:text-[--color-foreground] hover:border-[--color-primary] hover:shadow-[0_0_20px_-5px_var(--color-primary)] transition-all duration-300"
                                    aria-label="Email Contact"
                                >
                                    <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                    <span className="hidden sm:inline">Email</span>
                                </a>
                            )}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="order-1 lg:order-2 flex justify-center"
                        variants={itemVariants}
                    >
                        <div className="relative w-full max-w-xs sm:max-w-md">
                            {/* Decorative rings - hidden on mobile to prevent overflow */}
                            <div className="hidden sm:block absolute -inset-8 rounded-full border border-[--color-border] opacity-30" />
                            <div className="hidden sm:block absolute -inset-16 rounded-full border border-[--color-border] opacity-20" />

                            {/* Gradient blob behind image */}
                            <div className="absolute inset-4 bg-gradient-to-br from-[--color-primary] via-transparent to-[--color-secondary] rounded-full blur-2xl opacity-20 animate-pulse-glow" />

                            {/* Main image container */}
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-br from-[--color-primary] to-[--color-secondary] rounded-[--radius-lg] opacity-50 blur-sm" />
                                {image ? (
                                    <div className="relative aspect-square overflow-hidden rounded-[--radius-lg] border-2 border-[--color-background] bg-[--color-background] shadow-[var(--shadow-lift)]">
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        {/* Shine overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                                    </div>
                                ) : (
                                    <div className="relative aspect-square rounded-[--radius-lg] border-2 border-[--color-background] bg-gradient-to-br from-[--color-accent] to-[--color-background] flex items-center justify-center shadow-[var(--shadow-lift)]">
                                        <span className="text-7xl font-bold text-gradient">
                                            {name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Floating role badge - repositioned on mobile to prevent overlap */}
                            <motion.div
                                className="absolute -bottom-2 left-2 sm:-bottom-4 sm:-left-4 rounded-full border border-white bg-black/30 px-3 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white shadow-[var(--shadow-lift)] backdrop-blur-sm"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="flex items-center gap-1.5 sm:gap-2">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[--color-primary]" />
                                    {role}
                                </span>
                            </motion.div>

                            {/* Status indicator */}
                            {/* <motion.div
                                className="absolute -top-2 -right-2 rounded-full border border-white bg-black/30 px-4 py-2 text-xs font-medium text-white shadow-[var(--shadow-soft)] backdrop-blur-sm"
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                ✨ Available for work
                            </motion.div> */}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator - hidden on mobile to prevent overlap with social links */}
                <motion.div
                    className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[--color-muted]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
