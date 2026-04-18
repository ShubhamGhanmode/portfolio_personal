// General utility functions

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes intelligently
 * Combines clsx for conditional classes with tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Generate a section ID from a module name
 */
export function getSectionId(moduleName: string): string {
    return moduleName.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Format a date string for display
 */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
        ...options,
    });
}
