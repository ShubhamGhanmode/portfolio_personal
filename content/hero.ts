// Hero content - FORK-SAFE: Replace with your information (shared profile values live in content/profile.ts)

import { HeroContent } from '@/modules/hero/hero.types';
import { profileContent } from '@/content/profile';

export const heroContent: HeroContent = {
    greeting: "Hi, I'm",
    name: profileContent.name,
    role: profileContent.role,
    tagline: profileContent.tagline,
    cta: {
        primary: {
            text: 'View My Work',
            href: '#projects',
        },
        secondary: {
            text: 'Get in Touch',
            href: '#contact',
        },
    },
    image: '/images/profile.png',
};
