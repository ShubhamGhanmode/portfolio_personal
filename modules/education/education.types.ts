// Education module types

import { ModuleContentBase } from '@/types/module';

export interface Education {
    /** Institution name */
    institution: string;
    /** Degree/certification */
    degree: string;
    /** Field of study */
    field?: string;
    /** Time period */
    period: {
        start: string;
        end: string;
    };
    /** Description points (optional) */
    description?: string[];
    /** Institution logo (optional) */
    logo?: string;
}

export interface EducationContent extends ModuleContentBase {
    /** List of education entries */
    items: Education[];
}
