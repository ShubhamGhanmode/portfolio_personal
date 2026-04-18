// Contact content - FORK-SAFE: Replace with your contact information

import { ContactContent } from '@/modules/contact/contact.types';

export const contactContent: ContactContent = {
    heading: 'Get in Touch',
    subheading: "Let's connect",
    description:
        'Open to software developer roles, AI/ML projects, and collaboration opportunities.',
    methods: [
        {
            type: 'email',
            label: 'Email',
            value: 'sghanmode4@gmail.com',
            href: 'mailto:sghanmode4@gmail.com',
        },
        {
            type: 'phone',
            label: 'Phone',
            value: '+353 870342970',
            href: 'tel:+353870342970',
        },
        {
            type: 'location',
            label: 'Location',
            value: 'Limerick, Ireland',
        },
        {
            type: 'social',
            label: 'LinkedIn',
            value: 'linkedin.com/in/shubhamghanmode',
            href: 'https://www.linkedin.com/in/shubhamghanmode',
        },
        {
            type: 'social',
            label: 'GitHub',
            value: 'github.com/ShubhamGhanmode',
            href: 'https://github.com/ShubhamGhanmode',
        },
    ],
    form: {
        enabled: false, // Enable when you have a form endpoint
    },
};
