'use client';

import { cn } from '@/lib/utils';
import { Container } from '@/components/ui';
import { siteConfig } from '@/config/site';
import { getNavModules } from '@/lib/module-registry';
import { modules } from '@/config/modules';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Track scroll for header background and active section
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // Find active section
            const sections = navModules.map(m => document.getElementById(m.id)).filter(Boolean);
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.getBoundingClientRect().top <= 100) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const navModules = getNavModules(modules);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                isScrolled
                    ? 'header-blur border-b border-[--color-border] shadow-[var(--shadow-soft)] py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo / Name */}
                    <Link
                        href="#"
                        className="group flex items-center gap-3 text-lg font-semibold tracking-tight text-[--color-foreground] hover:text-[--color-primary] transition-all duration-300"
                    >
                        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[--color-primary] to-[--color-secondary] text-[--color-background] font-bold text-sm shadow-[var(--shadow-lift)] group-hover:scale-110 transition-transform duration-300">
                            {siteConfig.author.name.charAt(0)}
                            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-[--color-secondary] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <span className="font-[var(--font-heading)] hidden sm:block">{siteConfig.author.name}</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-3 md:gap-6">
                        <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_80%,transparent)] border border-[--color-border] backdrop-blur-sm">
                            {navModules.map((module) => (
                                <Link
                                    key={module.id}
                                    href={`#${module.id}`}
                                    className={cn(
                                        "relative px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] rounded-full transition-all duration-300",
                                        activeSection === module.id
                                            ? "text-[--color-background]"
                                            : "text-[--color-muted] hover:text-[--color-foreground]"
                                    )}
                                >
                                    {activeSection === module.id && (
                                        <motion.span
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-gradient-to-r from-[--color-primary] to-[--color-secondary] rounded-full shadow-[var(--shadow-lift)]"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                        />
                                    )}
                                    <span className="relative z-10">{module.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="relative p-2.5 rounded-full border border-[--color-border] bg-[--color-background] hover:border-[--color-primary] hover:shadow-[0_0_15px_-3px_var(--color-primary)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                            aria-label="Toggle theme"
                            whileTap={{ scale: 0.9 }}
                        >
                            {mounted && (
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={theme}
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {theme === 'dark' ? (
                                            <Sun className="h-4 w-4 text-[--color-foreground]" />
                                        ) : (
                                            <Moon className="h-4 w-4 text-[--color-foreground]" />
                                        )}
                                    </motion.span>
                                </AnimatePresence>
                            )}
                        </motion.button>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            onClick={() => setIsMenuOpen((open) => !open)}
                            className="md:hidden p-2.5 rounded-full border border-[--color-border] bg-[--color-background] hover:border-[--color-primary] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                            aria-label="Toggle navigation"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-nav"
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={isMenuOpen ? 'close' : 'menu'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isMenuOpen ? (
                                        <X className="h-4 w-4 text-[--color-foreground]" />
                                    ) : (
                                        <Menu className="h-4 w-4 text-[--color-foreground]" />
                                    )}
                                </motion.span>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </nav>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            id="mobile-nav"
                            initial={{ opacity: 0, y: -16, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -16, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                            className="md:hidden mt-4 rounded-[--radius-lg] border border-[--color-border] bg-[--color-background] p-6 shadow-[var(--shadow-lift)] backdrop-blur-xl"
                        >
                            <div className="flex flex-col gap-2">
                                {navModules.map((module, index) => (
                                    <motion.div
                                        key={module.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={`#${module.id}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={cn(
                                                "block px-4 py-3 rounded-[--radius-md] text-sm font-semibold transition-all duration-300",
                                                activeSection === module.id
                                                    ? "bg-gradient-to-r from-[--color-primary] to-[--color-secondary] text-[--color-background] shadow-[var(--shadow-lift)]"
                                                    : "text-[--color-foreground] hover:bg-[--color-accent]"
                                            )}
                                        >
                                            {module.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </motion.header>
    );
}
