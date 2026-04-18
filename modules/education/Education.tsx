'use client';

import { ModuleProps } from '@/types/module';
import { Container, Card } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { educationContent } from '@/content/education';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export function Education({ id, className }: ModuleProps) {
    const { heading, subheading, items } = educationContent;

    return (
        <Section sectionId={id} className={cn('bg-[--color-accent] pt-24', className)}>
            <Container size="narrow">
                <SectionHeader
                    heading={heading || 'Education'}
                    subheading={subheading}
                />

                <div className="relative">
                    {/* Timeline line with gradient */}
                    <div className="absolute left-5 sm:left-6 md:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-[--color-primary] via-[--color-secondary] to-[--color-border] rounded-full" />

                    <div className="space-y-12">
                        {items.map((education, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-14 sm:pl-16 md:pl-20"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                            >
                                {/* Timeline node with logo or icon */}
                                <motion.div
                                    className="absolute left-0 top-6 w-10 h-10 sm:w-12 sm:h-12 md:w-18 md:h-18 rounded-[--radius-md] bg-gradient-to-br from-[--color-primary] to-[--color-secondary] flex items-center justify-center shadow-[var(--shadow-lift)] overflow-hidden"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                >
                                    {education.logo ? (
                                        <Image
                                            src={education.logo}
                                            alt={`${education.institution} logo`}
                                            width={80}
                                            height={80}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[--color-background]" />
                                    )}
                                </motion.div>

                                <Card variant="glass" hover="glow" className="overflow-hidden">
                                    {/* Card header with degree info */}
                                    <div className="space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                            <div className="space-y-1.5">
                                                <h3 className="text-xl font-bold text-[--color-foreground] leading-tight">
                                                    {education.institution}
                                                </h3>
                                                {education.field && (
                                                    <p className="text-xl font-medium text-gradient">
                                                        {education.degree}
                                                    </p>
                                                )}
                                                <p className="text-sm text-[--color-muted] flex items-center gap-2">
                                                    <Award className="w-4 h-4 text-[--color-primary]" />
                                                    {education.field}
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 sm:gap-2 self-start px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[--color-background]/50 border border-[--color-border] text-[10px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.1em] text-[--color-muted] font-medium whitespace-nowrap backdrop-blur-sm">
                                                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                {education.period.start} – {education.period.end}
                                            </span>
                                        </div>

                                        {/* Description points */}
                                        {education.description && education.description.length > 0 && (
                                            <div className="pt-4 border-t border-[--color-border]/50">
                                                <ul className="space-y-2.5">
                                                    {education.description.map((point, pointIndex) => (
                                                        <motion.li
                                                            key={pointIndex}
                                                            className="text-sm text-[--color-muted] flex items-center gap-3 group"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.4, delay: 0.3 + pointIndex * 0.1 }}
                                                        >
                                                            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[--color-primary] to-[--color-secondary] flex-shrink-0 group-hover:scale-150 transition-transform shadow-sm" />
                                                            <span className="leading-relaxed">{point}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Timeline end cap */}
                    <motion.div
                        className="absolute left-[14px] sm:left-[18px] md:left-[26px] bottom-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[--color-primary] to-[--color-secondary] shadow-[var(--shadow-soft)]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    />
                </div>
            </Container>
        </Section>
    );
}
