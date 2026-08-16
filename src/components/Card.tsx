import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export default function Card({
     children,
     className
}: CardProps) {
    return (
        <div className={`bg-[var(--card-background)] shadow-[var(--shadow)] rounded-2xl 
        ${className ? className : ''}`}>
            {children}   
        </div>
    )
}