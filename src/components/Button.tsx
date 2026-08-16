import type { ButtonHTMLAttributes, ReactNode } from 'react';
import Text from './Text';

type ButtonVariant = 'default' | 'primary' | 'accent';

const buttonVariants: Record<ButtonVariant, string> = {
    default: 'bg-[linear-gradient(var(--gradient))] hover:bg-[linear-gradient(var(--gradient-hover))] active:scale-95',
    primary: 'bg-[var(--primary)] text-[var(--text)] hover:opacity-90 active:scale-95 font-medium',
    accent: 'bg-[var(--accent)] text-white hover:opacity-90 active:scale-95 font-bold shadow-md',
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
                flex items-center justify-center rounded-2xl
                p-3 cursor-pointer select-none
                text-[var(--text)]
                shadow-[var(--shadow)]
                transition-all duration-150 ease-in-out
                ${buttonVariants[variant]}
                ${className}
            `.trim()}
            {...props}
        >
            {children}
        </Text>
    );
}