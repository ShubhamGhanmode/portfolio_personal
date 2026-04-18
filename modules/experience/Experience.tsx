'use client';

import { ModuleProps } from '@/types/module';
import { Container, Card } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { experienceContent } from '@/content/experience';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib';

export function Experience({ id, className }: ModuleProps) {
    const { heading, subheading, items } = experienceContent;

    return (
        <Section sectionId={id} className={cn('pt-24', className)}>
            <Container size="narrow">
                <SectionHeader
                    heading={heading || 'Experience'}
                    subheading={subheading}
                />

                <div className="relative">
                    {/* Timeline line with gradient */}
                    <div className="absolute left-3 sm:left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[--color-primary] via-[--color-secondary] to-[--color-border] rounded-full" />

                    <div className="space-y-10">
                        {items.map((experience, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-11 sm:pl-14"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Timeline dot with icon */}
                                <div className="absolute left-0 top-6 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[--color-primary] to-[--color-secondary] flex items-center justify-center shadow-[var(--shadow-lift)]">
                                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[--color-background]" />
                                </div>

                                <Card variant="glass" hover="glow" className="space-y-5">
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold text-[--color-foreground]">
                                                {experience.role}
                                            </h3>
                                            <p className="text-sm text-[--color-primary] font-medium">
                                                {experience.company}
                                                {experience.location ? (
                                                    <span className="text-[--color-muted]"> · {experience.location}</span>
                                                ) : ''}
                                            </p>
                                        </div>
                                        <span className="inline-flex items-center self-start px-3 py-1.5 rounded-full bg-[--color-accent] border border-[--color-border] text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[--color-muted] font-medium">
                                            {experience.period.start} – {experience.period.end}
                                        </span>
                                    </div>
                                    <ul className="space-y-3">
                                        {experience.description.map((point, pointIndex) => (
                                            <li
                                                key={pointIndex}
                                                className="text-sm text-[--color-muted] flex items-start gap-3 group"
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[--color-primary] to-[--color-secondary] flex-shrink-0 group-hover:scale-150 transition-transform" />
                                                <span className="leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
