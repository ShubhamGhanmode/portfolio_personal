import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'outlined' | 'glass';
    hover?: 'lift' | 'glow' | 'border' | 'none';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', hover = 'lift', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'relative rounded-[--radius-lg] p-6 transition-all duration-300',
                    // Variants
                    variant === 'default' &&
                    'bg-[--color-accent] border border-[--color-border] shadow-[var(--shadow-soft)]',
                    variant === 'elevated' &&
                    'bg-[--color-background] border border-[--color-border] shadow-[var(--shadow-lift)]',
                    variant === 'outlined' && 'glass-card',
                    variant === 'glass' &&
                    'bg-[color-mix(in_srgb,var(--color-background)_70%,transparent)] backdrop-blur-xl border border-[color-mix(in_srgb,var(--color-border)_50%,transparent)] shadow-[var(--shadow-soft),inset_0_1px_0_0_rgba(255,255,255,0.05)]',
                    // Hover effects
                    hover === 'lift' && 'hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]',
                    hover === 'glow' && 'glow-hover hover:-translate-y-1',
                    hover === 'border' && 'gradient-border hover:-translate-y-1',
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('mb-4', className)} {...props} />
    )
);

CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn('text-xl font-semibold text-[--color-foreground] tracking-tight', className)}
            {...props}
        />
    )
);

CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn('text-sm text-[--color-muted] leading-relaxed', className)}
            {...props}
        />
    )
);

CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('', className)} {...props} />
    )
);

CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('mt-4 pt-4 border-t border-[--color-border]', className)} {...props} />
    )
);

CardFooter.displayName = 'CardFooter';
