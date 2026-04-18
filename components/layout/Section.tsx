'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SectionProps extends Omit<HTMLMotionProps<"section">, "ref"> {
    /** Section ID for navigation anchors */
    sectionId?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, sectionId, children, ...props }, ref) => {
        return (
            <motion.section
                ref={ref}
                id={sectionId}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className={cn(
                    'relative py-[--spacing-section] scroll-mt-24',
                    className
                )}
                {...props}
            >
                {children}
            </motion.section>
        );
    }
);

Section.displayName = 'Section';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
    heading: string;
    subheading?: string;
    align?: 'left' | 'center';
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
    ({ className, heading, subheading, align = 'center', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'mb-10 sm:mb-16',
                    align === 'center' && 'text-center',
                    align === 'left' && 'text-left',
                    className
                )}
                {...props}
            >
                {/* Decorative element */}
                <div className={cn(
                    'flex items-center gap-4 mb-6',
                    align === 'center' && 'justify-center',
                    align === 'left' && 'justify-start'
                )}>
                    <span className="h-px w-12 bg-gradient-to-r from-transparent to-[--color-primary]" />
                    <span className="text-xs uppercase tracking-[0.3em] text-[--color-primary] font-semibold">
                        {heading}
                    </span>
                    <span className="h-px w-12 bg-gradient-to-l from-transparent to-[--color-primary]" />
                </div>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-[--color-foreground]">
                    {heading}
                </h2>

                {subheading && (
                    <p className={cn(
                        'mt-5 text-base sm:text-lg text-[--color-muted] leading-relaxed',
                        align === 'center' && 'max-w-2xl mx-auto'
                    )}>
                        {subheading}
                    </p>
                )}

                {/* Gradient underline */}
                <div className={cn(
                    'mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[--color-primary] to-[--color-secondary]',
                    align === 'center' && 'mx-auto',
                    align === 'left' && 'mx-0'
                )} />
            </div>
        );
    }
);

SectionHeader.displayName = 'SectionHeader';
