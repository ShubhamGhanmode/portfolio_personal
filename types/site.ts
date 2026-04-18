// Site configuration types

export interface SiteConfig {
    /** Site name/title */
    name: string;
    /** Site description for SEO */
    description: string;
    /** Base URL for the site */
    url: string;
    /** Open Graph image path */
    ogImage?: string;
    /** Social links */
    links: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
    /** Author/owner information */
    author: {
        name: string;
        role?: string;
    };
}

export interface NavLink {
    /** Link label */
    label: string;
    /** Link href (section ID with # prefix or external URL) */
    href: string;
    /** Whether this is an external link */
    external?: boolean;
}
