// Module template types - Copy this file when creating a new module

import { ModuleContentBase } from '@/types/module';

/**
 * Define your module's content structure here
 * Extend ModuleContentBase for standard heading/subheading support
 */
export interface TemplateContent extends ModuleContentBase {
    // Add your custom fields here
    // Example:
    // items: TemplateItem[];
}

// Add any additional types your module needs
// Example:
// export interface TemplateItem {
//   title: string;
//   description: string;
// }
