// About content - FORK-SAFE: Replace with your information

import { AboutContent } from '@/modules/about/about.types';

export const aboutContent: AboutContent = {
    heading: 'About Me',
    subheading: 'Full-stack developer with a focus on mobile and AI',
    description: [
        'I am a software developer and MSc AI/ML student at the University of Limerick, focused on building reliable mobile and backend systems.',
        'At AutoDukan, I delivered Flutter and Laravel features, integrated PayU payments, and strengthened transaction workflows to support growing order volumes.',
        'I enjoy applied AI and simulation work, from river plastic detection with YOLOv5 to game AI prototypes that combine FSMs, perception, and navigation.',
    ],
    highlights: [
        { label: 'Experience', value: '1+ years' },
        { label: 'Projects', value: '5+' },
        { label: 'Focus', value: 'Mobile + AI' },
    ],
    image: '/images/about.jpg',
};
