import type { ButtonHTMLAttributes, ReactNode } from 'react';
import Text from './Text';

type ButtonVariant = 'default' | 'primary';

const buttonVariants: Record<ButtonVariant, string> = {
    default: 'bg-[var(--background)]',
    primary: 'bg-[var(--primary)]',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children?: ReactNode;
}

export function Button({
    variant = 'default',
    className = '',
    children,
    ...props
}: ButtonProps) {
    return (
        <Text
            as="button"
            variant="heading"
            className={`
                        flex items-center justify-center rounded-xl
                        p-3 cursor-pointer
                        text-[var(--text)]
                        bg-[linear-gradient(var(--gradient))]
                        hover:bg-[linear-gradient(var(--gradient-hover))]
                        shadow-[var(--shadow)]
                        ${buttonVariants[variant]}
                        ${className}
                    `.trim()}
            {...props}
        >
            {children}
        </Text>
    );
}
