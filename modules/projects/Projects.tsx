'use client';

import { ModuleProps } from '@/types/module';
import { Container, Card, CardContent, Button } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { projectsContent } from '@/content/projects';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export function Projects({ id, className }: ModuleProps) {
    const { heading, subheading, items, maxDisplayedOnHome } = projectsContent;

    const displayedProjects = maxDisplayedOnHome ? items.slice(0, maxDisplayedOnHome) : items;
    const hasMore = maxDisplayedOnHome && items.length > maxDisplayedOnHome;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <Section sectionId={id} className={cn('bg-[--color-accent] pt-24', className)}>
            <Container>
                <SectionHeader
                    heading={heading || 'Projects'}
                    subheading={subheading}
                />

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {displayedProjects.map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card
                                variant="elevated"
                                hover="glow"
                                className="overflow-hidden p-0 group h-full flex flex-col"
                            >
                                {/* Image container with overlay */}
                                <div className="relative aspect-video overflow-hidden">
                                    {project.image ? (
                                        <>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[--color-background] via-transparent to-transparent opacity-60" />
                                            {/* Shine effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary] via-[--color-accent] to-[--color-secondary] flex items-center justify-center">
                                            <span className="text-5xl text-[--color-background] font-bold opacity-50">
                                                {project.title.charAt(0)}
                                            </span>
                                        </div>
                                    )}

                                    {/* Featured badge */}
                                    {project.featured && (
                                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-gradient-to-r from-[--color-primary] to-[--color-secondary] px-2.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[--color-background] font-semibold shadow-[var(--shadow-lift)]">
                                            <span className="hidden sm:inline">✨ </span>Featured
                                        </div>
                                    )}

                                    {/* Quick action buttons - always visible on mobile for touch accessibility */}
                                    {project.links && (
                                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                                            {project.links.live && (
                                                <a
                                                    href={project.links.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-[--color-background] border border-[--color-border] flex items-center justify-center text-[--color-foreground] hover:bg-[--color-primary] hover:text-[--color-background] hover:border-[--color-primary] transition-all duration-300 shadow-[var(--shadow-soft)]"
                                                    aria-label="View live demo"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-[--color-background] border border-[--color-border] flex items-center justify-center text-[--color-foreground] hover:bg-[--color-primary] hover:text-[--color-background] hover:border-[--color-primary] transition-all duration-300 shadow-[var(--shadow-soft)]"
                                                    aria-label="View source code"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-5 flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-[--color-foreground] mb-2 group-hover:text-[--color-primary] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-[--color-muted] leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs px-3 py-1.5 rounded-full border border-[--color-border] text-[--color-muted] bg-[--color-accent] hover:border-[--color-primary] hover:text-[--color-primary] transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="text-xs px-3 py-1.5 rounded-full border border-[--color-border] text-[--color-muted] bg-[--color-accent]">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action buttons */}
                                    {project.links && (
                                        <div className="flex flex-wrap gap-3 pt-2">
                                            {project.links.live && (
                                                <Button
                                                    href={project.links.live}
                                                    size="sm"
                                                    variant="primary"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="gap-1.5"
                                                >
                                                    Live Demo
                                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                                </Button>
                                            )}
                                            {project.links.github && (
                                                <Button
                                                    href={project.links.github}
                                                    size="sm"
                                                    variant="outline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="gap-1.5"
                                                >
                                                    <Github className="w-3.5 h-3.5" />
                                                    Code
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {hasMore && (
                    <motion.div
                        className="flex justify-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button href="/projects" variant="outline" size="lg" className="group gap-2">
                            View All Projects
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Button>
                    </motion.div>
                )}
            </Container>
        </Section>
    );
}
