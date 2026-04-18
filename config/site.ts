// Site configuration - FORK-SAFE: Modify metadata and links (profile values live in content/profile.ts)

import { SiteConfig } from '@/types/site';
import { profileContent } from '@/content/profile';

export const siteConfig: SiteConfig = {
    name: profileContent.name,
    description: profileContent.summary,
    url: 'https://shubhamghanmode.dev',
    ogImage: '/images/og-image.png',
    links: {
        github: 'https://github.com/ShubhamGhanmode',
        linkedin: 'https://www.linkedin.com/in/shubhamghanmode',
        twitter: '',
        email: 'sghanmode4@gmail.com',
    },
    author: {
        name: profileContent.name,
        role: profileContent.role,
    },
};
