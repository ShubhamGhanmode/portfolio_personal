// Experience module types

import { ModuleContentBase } from '@/types/module';

export interface Experience {
    /** Company/organization name */
    company: string;
    /** Job title */
    role: string;
    /** Employment period */
    period: {
        start: string;
        end: string | 'Present';
    };
    /** Location (optional) */
    location?: string;
    /** Job description points */
    description: string[];
    /** Company logo (optional) */
    logo?: string;
}

export interface ExperienceContent extends ModuleContentBase {
    /** List of experiences */
    items: Experience[];
}
