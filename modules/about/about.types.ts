// About module types

import { ModuleContentBase } from '@/types/module';

export interface AboutContent extends ModuleContentBase {
    /** Description paragraphs */
    description: string[];
    /** Highlight items (optional) */
    highlights?: {
        label: string;
        value: string;
    }[];
    /** Image path */
    image?: string;
}
