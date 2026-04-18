// Hero module types

import { ModuleContentBase } from '@/types/module';

export interface HeroContent extends ModuleContentBase {
    /** Main greeting text */
    greeting?: string;
    /** Your name */
    name: string;
    /** Your role/title */
    role: string;
    /** Short bio/tagline */
    tagline: string;
    /** Call-to-action buttons */
    cta?: {
        primary?: {
            text: string;
            href: string;
        };
        secondary?: {
            text: string;
            href: string;
        };
    };
    /** Profile image path */
    image?: string;
}
