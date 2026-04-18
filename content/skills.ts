// Skills content - FORK-SAFE: Replace with your skills

import { SkillsContent } from '@/modules/skills/skills.types';

export const skillsContent: SkillsContent = {
    heading: 'Technical Skills',
    subheading: 'Languages, frameworks, and tools I work with',
    categories: [
        {
            name: 'Languages',
            skills: [
                { name: 'Dart', highlight: true },
                { name: 'Python', highlight: true },
                { name: 'PHP' },
                { name: 'C#' },
                { name: 'Java' },
                { name: 'JavaScript' },
                { name: 'TypeScript' },
            ],
        },
        {
            name: 'Frameworks & Platforms',
            skills: [
                { name: 'Flutter', highlight: true },
                { name: 'BLoC/Cubit' },
                { name: 'Laravel' },
                { name: 'Firebase', highlight: true },
                { name: 'Cloud Functions' },
            ],
        },
        {
            name: 'Databases & Storage',
            skills: [
                { name: 'MySQL' },
                { name: 'Firestore' },
                { name: 'SQLite' },
                { name: 'MongoDB' },
            ],
        },
        {
            name: 'AI & Machine Learning',
            skills: [
                { name: 'TensorFlow', highlight: true },
                { name: 'LangChain', highlight: true },
                { name: 'LangGraph', highlight: true },
                { name: 'PyTorch' },
                { name: 'OpenCV' },
                { name: 'Scikit-learn' }
            ],
        },
        {
            name: 'Tools & DevOps',
            skills: [
                { name: 'Git', highlight: true },
                { name: 'AWS', highlight: true },
                { name: 'GitHub' },
                { name: 'Android Studio' },
                { name: 'Unity' },
            ],
        },
    ],
};
