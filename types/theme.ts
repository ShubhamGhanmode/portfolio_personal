// Theme type definitions

export interface ThemeColors {
    primary: {
        light: string;
        dark: string;
    };
    secondary: {
        light: string;
        dark: string;
    };
    background: {
        light: string;
        dark: string;
    };
    foreground: {
        light: string;
        dark: string;
    };
    muted: {
        light: string;
        dark: string;
    };
    accent: {
        light: string;
        dark: string;
    };
    border: {
        light: string;
        dark: string;
    };
}

export interface ThemeFonts {
    heading: string;
    body: string;
    mono: string;
}

export interface ThemeSpacing {
    section: string;
    container: string;
}

export interface ThemeBorderRadius {
    sm: string;
    md: string;
    lg: string;
    full: string;
}

export interface ThemeConfig {
    colors: ThemeColors;
    fonts: ThemeFonts;
    spacing: ThemeSpacing;
    borderRadius: ThemeBorderRadius;
}
