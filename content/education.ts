// Education content - FORK-SAFE: Replace with your education

import { EducationContent } from '@/modules/education/education.types';

export const educationContent: EducationContent = {
    heading: 'Education',
    subheading: 'Academic background in AI and engineering',
    items: [
        {
            institution: 'University of Limerick',
            degree: 'Master of Science',
            field: 'Artificial Intelligence and Machine Learning',
            logo: '/images/ul.jpg',
            period: {
                start: 'Sep 2025',
                end: 'Aug 2026',
            },
            description: [
                'NQF Level 9',
                'est. GPA: 3.5/4.0 (2.1 Honours equivalent)',
            ],
        },
        {
            institution: 'Savitribai Phule Pune University (SPPU)',
            degree: 'Bachelor of Technology',
            field: 'Computer Engineering',
            logo: '/images/pune_university.png',
            period: {
                start: 'Aug 2020',
                end: 'May 2024',
            },
            description: [
                'CGPA: 7.59/10',
                'NQF Level 8',
            ],
        },
    ],
};
