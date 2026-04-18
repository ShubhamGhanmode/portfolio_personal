'use client';

import { ModuleProps } from '@/types/module';
import { Container, Card, Button } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { contactContent } from '@/content/contact';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Link as LinkIcon, Send } from 'lucide-react';
import { cn } from '@/lib';

const iconMap = {
    email: <Mail className="w-5 h-5" />,
    phone: <Phone className="w-5 h-5" />,
    location: <MapPin className="w-5 h-5" />,
    social: <LinkIcon className="w-5 h-5" />,
};

export function Contact({ id, className }: ModuleProps) {
    const { heading, subheading, description, methods } = contactContent;
    const emailMethod = methods.find((m) => m.type === 'email');

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

    return (
        <Section sectionId={id} className={cn('pt-24', className)} >
            <Container>
                <SectionHeader
                    heading={heading || 'Contact'}
                    subheading={subheading}
                />

                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-12 items-start">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {description && (
                            <p className="text-[--color-muted] leading-relaxed text-lg">
                                {description}
                            </p>
                        )}

                        {/* Large CTA */}
                        <div className="p-5 sm:p-8 rounded-[--radius-lg] bg-gradient-to-br from-[--color-primary] to-[--color-secondary] text-[--color-background] shadow-[var(--shadow-lift)]">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Let's work together</h3>
                            <p className="text-xs sm:text-sm opacity-90 mb-4 sm:mb-6">
                                Have a project in mind? Let's discuss how we can bring your ideas to life.
                            </p>
                            {emailMethod && (
                                <Button
                                    href={`mailto:${emailMethod.value}`}
                                    size="lg"
                                    className="bg-[--color-background] text-[--color-foreground] hover:bg-[--color-accent] gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Send a Message
                                </Button>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid sm:grid-cols-2 gap-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {methods.map((method, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card variant="glass" hover="border" className="text-left h-full group">
                                    <div className="w-12 h-12 mb-4 rounded-[--radius-md] bg-gradient-to-br from-[--color-primary] to-[--color-secondary] flex items-center justify-center text-[--color-background] shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-lift)] transition-shadow">
                                        {iconMap[method.type]}
                                    </div>
                                    <h3 className="font-semibold text-[--color-foreground] mb-2">
                                        {method.label}
                                    </h3>
                                    {method.href ? (
                                        <Link
                                            href={method.href}
                                            target={method.type === 'social' ? '_blank' : undefined}
                                            rel={method.type === 'social' ? 'noopener noreferrer' : undefined}
                                            className="text-sm text-[--color-muted] hover:text-[--color-primary] transition-colors inline-flex items-center gap-1 group-hover:underline"
                                        >
                                            {method.value}
                                        </Link>
                                    ) : (
                                        <p className="text-sm text-[--color-muted]">{method.value}</p>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
