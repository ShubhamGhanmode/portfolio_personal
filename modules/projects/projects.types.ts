// Projects module types

import { ModuleContentBase } from '@/types/module';

export interface Project {
    /** Project title */
    title: string;
    /** Short description */
    description: string;
    /** Longer description (optional) */
    longDescription?: string;
    /** Technologies used */
    technologies: string[];
    /** Project links */
    links?: {
        live?: string;
        github?: string;
        demo?: string;
    };
    /** Project image */
    image?: string;
    /** Whether this is a featured project */
    featured?: boolean;
}

export interface ProjectsContent extends ModuleContentBase {
    /** List of projects */
    items: Project[];
    /** Maximum number of projects to display on homepage (optional, defaults to showing all) */
    maxDisplayedOnHome?: number;
}
