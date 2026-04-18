'use client';

import { Container, Card, CardContent, Button } from '@/components/ui';
import { projectsContent } from '@/content/projects';
import { ArrowLeft, Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
    const { items } = projectsContent;

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

    const allTechnologies = useMemo(() => {
        const techSet = new Set<string>();
        items.forEach((project) => {
            project.technologies.forEach((tech) => techSet.add(tech));
        });
        return Array.from(techSet).sort();
    }, [items]);

    const featuredCount = useMemo(
        () => items.filter((project) => project.featured).length,
        [items]
    );

    const filteredProjects = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();
        return items.filter((project) => {
            const matchesSearch =
                query === '' ||
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query);

            const matchesTech =
                selectedTechs.length === 0 ||
                selectedTechs.some((tech) => project.technologies.includes(tech));

            const matchesFeatured = !showFeaturedOnly || project.featured === true;

            return matchesSearch && matchesTech && matchesFeatured;
        });
    }, [items, searchTerm, selectedTechs, showFeaturedOnly]);

    const toggleTech = (tech: string) => {
        setSelectedTechs((prev) =>
            prev.includes(tech) ? prev.filter((item) => item !== tech) : [...prev, tech]
        );
    };

    const clearAllFilters = () => {
        setSearchTerm('');
        setSelectedTechs([]);
        setShowFeaturedOnly(false);
    };

    const hasActiveFilters =
        searchTerm !== '' || selectedTechs.length > 0 || showFeaturedOnly;

    const stats = [
        { label: 'Projects', value: items.length },
        { label: 'Featured', value: featuredCount },
        { label: 'Tech Stack', value: allTechnologies.length },
    ];

    return (
        <main className="min-h-screen pt-24 pb-16">
            <Container size="wide">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-[--radius-lg] border border-[--color-border] bg-[--color-accent] p-5 sm:p-8 md:p-10 mb-8 sm:mb-12"
                >
                    <div className="absolute -right-32 -top-24 h-64 w-64 rounded-full bg-[--color-primary]/20 blur-3xl" />
                    <div className="absolute -left-20 -bottom-24 h-56 w-56 rounded-full bg-[--color-secondary]/20 blur-3xl" />

                    <div className="relative grid gap-6 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] items-end">
                        <div className="space-y-5">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[--color-muted] hover:text-[--color-primary] transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Link>

                            <p className="text-xs uppercase tracking-[0.3em] text-[--color-muted]">
                                Portfolio Archive
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[--color-foreground]">
                                All Projects
                            </h1>
                            <p className="text-base text-[--color-muted] max-w-2xl">
                                A curated collection of my work, from product builds to
                                experimental prototypes and open-source explorations.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-[--radius-md] border border-[--color-border] bg-[--color-background] p-2.5 sm:p-4 text-center shadow-[var(--shadow-soft)]"
                                >
                                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[--color-muted]">
                                        {stat.label}
                                    </p>
                                    <p className="text-xl sm:text-2xl font-semibold text-[--color-foreground] mt-1 sm:mt-2">
                                        {stat.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    className="grid lg:grid-cols-[280px_1fr] gap-6 sm:gap-10 items-start"
                >
                    <aside className="space-y-4 sm:space-y-6 lg:sticky lg:top-28">
                        <div className="rounded-[--radius-lg] border border-[--color-border] bg-[--color-background] p-4 sm:p-6 shadow-[var(--shadow-soft)]">
                            <div className="flex items-center justify-between">
                                <p className="text-xs uppercase tracking-[0.2em] text-[--color-muted]">
                                    Filters
                                </p>
                                {hasActiveFilters && (
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-xs uppercase tracking-[0.2em] text-[--color-muted] hover:text-[--color-primary] transition-colors"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>

                            <div className="mt-6 space-y-5">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-[0.2em] text-[--color-muted]">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[--color-muted]" />
                                        <input
                                            type="text"
                                            placeholder="Search projects..."
                                            value={searchTerm}
                                            onChange={(event) =>
                                                setSearchTerm(event.target.value)
                                            }
                                            className="w-full rounded-full border border-[--color-border] bg-[--color-accent] px-10 py-2.5 text-sm text-[--color-foreground] placeholder:text-[--color-muted] focus:outline-none focus:ring-2 focus:ring-[--color-primary] transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        setShowFeaturedOnly((current) => !current)
                                    }
                                    className={cn(
                                        'w-full inline-flex items-center justify-between gap-3 rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                                        showFeaturedOnly
                                            ? 'bg-[--color-primary] text-[--color-background] border-transparent shadow-[var(--shadow-lift)]'
                                            : 'border-[--color-border] text-[--color-foreground] hover:bg-[--color-accent]'
                                    )}
                                >
                                    Featured only
                                    <span
                                        className={cn(
                                            'h-2 w-2 rounded-full',
                                            showFeaturedOnly
                                                ? 'bg-[--color-background]'
                                                : 'bg-[--color-muted]'
                                        )}
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="rounded-[--radius-lg] border border-[--color-border] bg-[--color-background] p-4 sm:p-6 shadow-[var(--shadow-soft)]">
                            <p className="text-xs uppercase tracking-[0.2em] text-[--color-muted]">
                                Technologies
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {allTechnologies.map((tech) => (
                                    <button
                                        key={tech}
                                        onClick={() => toggleTech(tech)}
                                        className={cn(
                                            'px-3 py-2 rounded-full text-xs font-semibold border transition-colors',
                                            selectedTechs.includes(tech)
                                                ? 'bg-[--color-secondary] text-[--color-background] border-transparent'
                                                : 'border-[--color-border] text-[--color-muted] hover:border-[--color-primary] hover:text-[--color-primary]'
                                        )}
                                    >
                                        {tech}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <section className="space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-sm text-[--color-muted]">
                                Showing{' '}
                                <span className="text-[--color-foreground] font-semibold">
                                    {filteredProjects.length}
                                </span>{' '}
                                of {items.length} projects
                            </p>
                            {hasActiveFilters && (
                                <button
                                    onClick={clearAllFilters}
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[--color-muted] hover:text-[--color-primary] transition-colors"
                                >
                                    <X className="h-3 w-3" />
                                    Clear all
                                </button>
                            )}
                        </div>

                        {filteredProjects.length > 0 ? (
                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                                {filteredProjects.map((project, index) => (
                                    <Card
                                        key={`${project.title}-${index}`}
                                        variant="outlined"
                                        className="overflow-hidden p-0 group flex flex-col h-full"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-gradient-to-br from-[--color-accent] to-[--color-background] flex items-center justify-center">
                                                    <span className="text-4xl text-[--color-primary] font-semibold">
                                                        {project.title.charAt(0)}
                                                    </span>
                                                </div>
                                            )}
                                            {project.featured && (
                                                <div className="absolute top-4 left-4 rounded-full border border-[--color-border] bg-[--color-background] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[--color-muted] shadow-[var(--shadow-soft)]">
                                                    Featured
                                                </div>
                                            )}
                                        </div>

                                        <CardContent className="p-6 flex flex-col gap-5 flex-1">
                                            <div>
                                                <h3 className="text-xl font-semibold text-[--color-foreground] mb-2">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-[--color-muted]">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs px-3 py-1 rounded-full border border-[--color-border] text-[--color-muted] bg-[--color-background]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {project.links && (
                                                <div className="flex flex-wrap gap-3 mt-auto">
                                                    {project.links.live && (
                                                        <Button
                                                            href={project.links.live}
                                                            size="sm"
                                                            variant="primary"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Live Demo
                                                        </Button>
                                                    )}
                                                    {project.links.github && (
                                                        <Button
                                                            href={project.links.github}
                                                            size="sm"
                                                            variant="outline"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            GitHub
                                                        </Button>
                                                    )}
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <Card
                                variant="outlined"
                                className="py-16 text-center flex flex-col items-center gap-4"
                            >
                                <div className="h-12 w-12 rounded-full border border-[--color-border] bg-[--color-background] flex items-center justify-center text-[--color-primary]">
                                    <Search className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[--color-foreground] mb-2">
                                        No projects found
                                    </h3>
                                    <p className="text-[--color-muted]">
                                        Try adjusting your filters or search term.
                                    </p>
                                </div>
                                <Button onClick={clearAllFilters} variant="outline">
                                    Clear All Filters
                                </Button>
                            </Card>
                        )}
                    </section>
                </motion.div>
            </Container>
        </main>
    );
}
