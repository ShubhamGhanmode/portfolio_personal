// Projects content - FORK-SAFE: Replace with your projects

import { ProjectsContent } from '@/modules/projects/projects.types';

export const projectsContent: ProjectsContent = {
    heading: 'Projects',
    subheading: 'Mobile, AI, and game prototypes focused on real-world impact',
    maxDisplayedOnHome: 3, // Show only 3 projects on homepage
    items: [
        {
            title: 'Morpheus - Personal Finance Mobile App',
            description:
                'Personal finance app for expense tracking, budgeting, and credit card management with offline-first sync.',
            longDescription:
                'Built with Flutter and Firebase using clean architecture (BLoC/Cubit, repository pattern), AES-256 client-side encryption, receipt scanning via Document AI, biometric app lock, CSV exports, reminders with Cloud Functions, and Remote Config feature gating.',
            technologies: ['Flutter', 'Firebase', 'BLoC/Cubit', 'SQLite', 'Cloud Functions'],
            links: {
                github: 'https://github.com/ShubhamGhanmode/Morpheus',
            },
            image: '/assets/screenshots/morpheus.jpeg',
            featured: true,
        },
        {
            title: 'FolioCraft Portfolio',
            description:
                'A modern, modular portfolio starter built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, animations, and easy customization.',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            links: {
                github: 'https://github.com/ShubhamGhanmode/foliocraft-portfolio-starter',
            },
            image: '/assets/screenshots/home-hero.png',
            featured: true,
        },
        {
            title: 'Swarm City - AI-Driven Zombie Survival Prototype',
            description:
                'First-person survival prototype with modular zombie AI behaviors and stealth-driven gameplay.',
            longDescription:
                'Implemented FSM-driven AI with patrol, investigate, chase, and search states, plus vision/hearing sensors, shared blackboard memory, NavMesh navigation, influence maps, and decaying spatial memory.',
            technologies: ['Unity', 'C#', 'Game AI', 'FSM', 'NavMesh'],
            links: {
                github: 'https://github.com/ShubhamGhanmode/swarm_city',
            },
            image: '/assets/screenshots/swarmcity.png',
            featured: true,
        },
        {
            title: 'River Plastic Pollution Detection App',
            description:
                'Computer vision mobile app that detects floating plastic waste in rivers from captured images.',
            longDescription:
                'Trained a YOLOv5 model on 800+ annotated images and integrated the PyTorch model into a Flutter app for real-time detection under varying lighting and water conditions.',
            technologies: ['Flutter', 'PyTorch', 'YOLOv5', 'Computer Vision', 'Firebase'],
            links: {
                github: 'https://github.com/ShubhamGhanmode/Flutter-Plastic-Detection-App-using-YOLOv5',
            },
            featured: false,
        },
        // {
        //     title: 'AI Project - LangChain (In Progress)',
        //     description:
        //         'LLM workflow prototype exploring retrieval and tool-augmented reasoning.',
        //     longDescription:
        //         'Scope and results will be published once the prototype is finalized and evaluated.',
        //     technologies: ['LangChain', 'Python', 'LLM Orchestration'],
        //     featured: false,
        // },
        // {
        //     title: 'AI Project - LangGraph (In Progress)',
        //     description:
        //         'Graph-based agent workflow prototype for multi-step reasoning and planning.',
        //     longDescription:
        //         'Planned focus includes agent routing, tool orchestration, and evaluation across task suites.',
        //     technologies: ['LangGraph', 'Python', 'Agents'],
        //     featured: false,
        // },
    ],
};
