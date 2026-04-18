// Contact module types

import { ModuleContentBase } from '@/types/module';

export interface ContactMethod {
    /** Method type */
    type: 'email' | 'phone' | 'location' | 'social';
    /** Label */
    label: string;
    /** Value to display */
    value: string;
    /** Link (optional, for email use mailto:, for phone use tel:) */
    href?: string;
}

export interface ContactContent extends ModuleContentBase {
    /** Contact description text */
    description?: string;
    /** Contact methods */
    methods: ContactMethod[];
    /** Contact form settings (future use) */
    form?: {
        enabled: boolean;
        endpoint?: string;
    };
}
