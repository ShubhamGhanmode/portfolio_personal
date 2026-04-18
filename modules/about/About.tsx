'use client';

import { ModuleProps } from '@/types/module';
import { Container } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { aboutContent } from '@/content/about';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function About({ id, className }: ModuleProps) {
    const { heading, subheading, description, highlights, image } = aboutContent;

    return (
        <Section sectionId={id} className={cn('bg-[--color-accent] overflow-hidden pt-8', className)}>
            {/* Background decorative elements */}
            <div className="absolute top-1/4 -right-32 w-64 h-64 bg-[--color-primary] opacity-5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-32 w-48 h-48 bg-[--color-secondary] opacity-5 rounded-full blur-3xl" />

            <Container className="relative z-10">
                <SectionHeader
                    heading={heading || 'About Me'}
                    subheading={subheading}
                />

                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 sm:gap-12 lg:gap-16 items-start">
                    {image && (
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Decorative frame - hidden on mobile to prevent overflow */}
                            <div className="hidden sm:block absolute -inset-6 rounded-[--radius-lg] border border-[--color-border] opacity-50" />
                            <div className="hidden sm:block absolute -inset-3 rounded-[--radius-lg] bg-gradient-to-br from-[--color-primary] to-[--color-secondary] opacity-10" />

                            <div className="relative aspect-[4/5] overflow-hidden rounded-[--radius-lg] border-2 border-[--color-background] shadow-[var(--shadow-lift)]">
                                <Image
                                    src={image}
                                    alt="About"
                                    fill
                                    className="object-cover"
                                />
                                {/* Shine overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                            </div>

                            {/* Floating badge - repositioned on mobile */}
                            <motion.div
                                className="absolute -bottom-2 right-2 sm:-bottom-4 sm:-right-4 px-3 py-2 sm:px-5 sm:py-3 rounded-[--radius-md] bg-gradient-to-r from-[--color-primary] to-[--color-secondary] text-[--color-background] text-xs sm:text-sm font-semibold shadow-[var(--shadow-lift)]"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {highlights && highlights.length > 0 ? `${highlights[0].value} ${highlights[0].label}` : '✨ Passionate Developer'}
                            </motion.div>
                        </motion.div>
                    )}

                    <motion.div
                        className={cn(!image && 'lg:col-span-2 max-w-3xl mx-auto')}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="space-y-6 text-[--color-muted]">
                            {description.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed text-base sm:text-lg first:text-[--color-foreground] first:text-xl first:font-medium">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {highlights && highlights.length > 0 && (
                            <motion.div
                                className="grid sm:grid-cols-3 gap-6 mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {highlights.map((highlight, index) => (
                                    <div
                                        key={index}
                                        className="group rounded-[--radius-lg] border border-[--color-border] bg-[--color-background] p-6 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="text-3xl sm:text-4xl font-bold text-gradient">
                                            {highlight.value}
                                        </div>
                                        <div className="text-xs uppercase tracking-[0.2em] text-[--color-muted] mt-3">
                                            {highlight.label}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
