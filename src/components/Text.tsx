import type { ElementType, HTMLAttributes, ReactNode } from 'react';

const textVariants = {
    default: 'text-xl',
    muted: 'text-xl',
    heading: 'text-2xl',
    blast: 'text-3xl',
} as const;

type TextVariant = keyof typeof textVariants;

interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    variant?: TextVariant;
    className?: string;
    children?: ReactNode;
}

export default function Text({
    as: Component = 'span',
    variant = 'default',
    className = '',
    children,
    ...props
}: TextProps) {
    return (
        <Component
            className={`${textVariants[variant]} ${className ? className : ''}`.trim()}
            {...props}
        >
            {children}
        </Component>
    );
}
