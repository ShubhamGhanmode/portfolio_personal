import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'default' | 'narrow' | 'wide';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size = 'default', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'mx-auto w-full px-4 sm:px-6 lg:px-8',
                    size === 'default' && 'max-w-[--spacing-container]',
                    size === 'narrow' && 'max-w-3xl',
                    size === 'wide' && 'max-w-7xl',
                    className
                )}
                {...props}
            />
        );
    }
);

Container.displayName = 'Container';
