import { ModuleProps } from '@/types/module';
import { Container } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
// import { templateContent } from '@/content/template';
import { cn } from '@/lib/utils';

/**
 * Template Module
 * 
 * To create a new module:
 * 1. Copy this folder and rename it (e.g., `modules/testimonials`)
 * 2. Rename all files (Template.tsx -> Testimonials.tsx, etc.)
 * 3. Update the types in template.types.ts
 * 4. Create a content file at content/testimonials.ts
 * 5. Register in config/modules.ts
 */
export function Template({ id, className }: ModuleProps) {
    // const { heading, subheading } = templateContent;

    return (
        <Section sectionId={id} className={className}>
            <Container>
                <SectionHeader
                    heading="Module Heading"
                    subheading="Module subheading"
                />

                <div>
                    {/* Add your module content here */}
                    <p className="text-center text-[--color-muted]">
                        Replace this with your module content.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
