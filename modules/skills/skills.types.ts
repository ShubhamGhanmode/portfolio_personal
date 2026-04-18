// Skills module types

import { ModuleContentBase } from '@/types/module';

export interface Skill {
    /** Skill name */
    name: string;
    /** Optional icon name from lucide-react */
    icon?: string;
    /** Whether to visually highlight this skill (e.g., primary expertise) */
    highlight?: boolean;
}

export interface SkillCategory {
    /** Category name */
    name: string;
    /** Skills in this category */
    skills: Skill[];
}

export interface SkillsContent extends ModuleContentBase {
    /** Skill categories */
    categories: SkillCategory[];
}
