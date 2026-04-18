// Module registry - FORK-SAFE: Add, remove, or reorder modules here

import { ModuleDefinition } from '@/types/module';
import { Hero } from '@/modules/hero';
import { About } from '@/modules/about';
import { Skills } from '@/modules/skills';
import { Projects } from '@/modules/projects';
import { Experience } from '@/modules/experience';
import { Education } from '@/modules/education';
import { Contact } from '@/modules/contact';

/**
 * Module registry
 * - Order determines display order on the page
 * - Set `enabled: false` to disable a module without removing it
 * - Set `showInNav: true` to show the module in navigation
 */
export const modules: ModuleDefinition[] = [
    {
        id: 'hero',
        name: 'Home',
        showInNav: false,
        component: Hero,
    },
    {
        id: 'about',
        name: 'About',
        showInNav: true,
        component: About,
    },
    {
        id: 'skills',
        name: 'Skills',
        showInNav: true,
        component: Skills,
    },
    {
        id: 'projects',
        name: 'Projects',
        showInNav: true,
        component: Projects,
    },
    {
        id: 'experience',
        name: 'Experience',
        showInNav: true,
        component: Experience,
    },
    {
        id: 'education',
        name: 'Education',
        showInNav: true,
        component: Education,
    },
    {
        id: 'contact',
        name: 'Contact',
        showInNav: true,
        component: Contact,
    },
];
