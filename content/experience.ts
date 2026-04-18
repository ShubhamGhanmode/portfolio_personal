// Experience content - FORK-SAFE: Replace with your work experience

import { ExperienceContent } from '@/modules/experience/experience.types';

export const experienceContent: ExperienceContent = {
    heading: 'Work Experience',
    subheading: 'Full-stack and mobile development roles',
    items: [
        {
            company: 'AutoDukan',
            role: 'Software Developer (Full-Stack)',
            period: {
                start: 'Nov 2024',
                end: 'Aug 2025',
            },
            location: 'Pune, India',
            description: [
                'Maintained and enhanced Laravel APIs, fixed bugs, and improved application performance.',
                'Designed backend services aligned to evolving business requirements.',
                'Integrated PayU payments including secure hash generation and webhook verification.',
                'Improved UI/UX of the customer-facing Flutter app to boost usability.',
                'Rebuilt transaction management and order integration to reduce accounting errors at scale.',
                'Collaborated with product and business teams to deliver stable, scalable releases.',
            ],
        },
        {
            company: 'AutoDukan',
            role: 'Software Developer Intern',
            period: {
                start: 'Apr 2024',
                end: 'Oct 2024',
            },
            location: 'Pune, India',
            description: [
                'Built a seller-side Flutter app for onboarding, operations, and analytics.',
                'Designed UI using Material 3 principles for a modern, consistent experience.',
                'Optimized database queries to reduce API processing time.',
                'Contributed to feature delivery tied to approximately 30% revenue growth within six months.',
            ],
        },
    ],
};
