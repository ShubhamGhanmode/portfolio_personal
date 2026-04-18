import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

interface ButtonAsButtonProps
    extends ButtonBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
    href?: never;
}

interface ButtonAsLinkProps
    extends ButtonBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function getButtonClasses(
    variant: ButtonVariant = 'primary',
    size: ButtonSize = 'md',
    className?: string
) {
    return cn(
        'group relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-background] disabled:pointer-events-none disabled:opacity-60 overflow-hidden',
        // Variants
        variant === 'primary' &&
        'bg-[--color-primary] text-[--color-background] shadow-[var(--shadow-lift)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_var(--color-primary)] active:translate-y-0 active:shadow-[var(--shadow-soft)]',
        variant === 'secondary' &&
        'bg-[--color-secondary] text-[--color-background] shadow-[var(--shadow-lift)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_var(--color-secondary)] active:translate-y-0 active:shadow-[var(--shadow-soft)]',
        variant === 'outline' &&
        'border-2 border-[--color-border] bg-transparent text-[--color-foreground] hover:border-[--color-primary] hover:text-[--color-primary] hover:bg-[color-mix(in_srgb,var(--color-primary)_8%,transparent)] hover:-translate-y-0.5',
        variant === 'ghost' && 'text-[--color-foreground] hover:bg-[--color-accent] hover:text-[--color-primary]',
        // Sizes
        size === 'sm' && 'h-9 px-5 text-sm rounded-[--radius-full]',
        size === 'md' && 'h-12 px-7 text-base rounded-[--radius-full]',
        size === 'lg' && 'h-14 px-9 text-lg rounded-[--radius-full]',
        className
    );
}

export const Button = forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    ButtonProps
>((props, ref) => {
    const { variant = 'primary', size = 'md', className, ...rest } = props;

    if ('href' in props && props.href) {
        const { href, ...linkProps } = rest as ButtonAsLinkProps;
        const isExternal = href.startsWith('http') || href.startsWith('mailto:');

        if (isExternal) {
            return (
                <a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={href}
                    className={getButtonClasses(variant, size, className)}
                    {...linkProps}
                />
            );
        }

        return (
            <Link
                ref={ref as React.Ref<HTMLAnchorElement>}
                href={href}
                className={getButtonClasses(variant, size, className)}
                {...(linkProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}
            />
        );
    }

    return (
        <button
            ref={ref as React.Ref<HTMLButtonElement>}
            className={getButtonClasses(variant, size, className)}
            {...(rest as ButtonAsButtonProps)}
        />
    );
});

Button.displayName = 'Button';
