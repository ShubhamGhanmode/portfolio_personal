'use client';

import { ModuleProps } from '@/types/module';
import { Container, Card } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { skillsContent } from '@/content/skills';
import { motion } from 'framer-motion';
import { cn } from '@/lib';

export function Skills({ id, className }: ModuleProps) {
    const { heading, subheading, categories } = skillsContent;

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

    const tagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 },
    };

    return (
        <Section sectionId={id} className={cn('pt-24', className)}>
            <Container>
                <SectionHeader
                    heading={heading || 'Skills'}
                    subheading={subheading}
                />

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {categories.map((category, categoryIndex) => (
                        <motion.div key={categoryIndex} variants={itemVariants}>
                            <Card variant="glass" hover="glow" className="h-full">
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[--radius-md] border border-[--color-border] bg-[--color-accent] flex items-center justify-center text-[--color-primary] font-bold text-sm sm:text-lg">
                                        {String(categoryIndex + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[--color-foreground]">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Skills as tags */}
                                <motion.div
                                    className="flex flex-wrap gap-2"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                >
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            variants={tagVariants}
                                            transition={{ delay: skillIndex * 0.05 }}
                                            className={cn(
                                                'inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-default hover:scale-105 bg-[var(--color-background)]',
                                                skill.highlight
                                                    ? 'border-2 border-[var(--color-primary)] text-[var(--color-primary)]'
                                                    : 'border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)]'
                                            )}
                                        >
                                            {skill.name}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
