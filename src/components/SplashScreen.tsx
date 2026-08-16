import { useEffect, useState } from 'react';
import Text from './Text';
import { Calculator } from 'lucide-react';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 400);
        }, 1200);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`
            fixed inset-0 z-50 flex flex-col items-center justify-center
            bg-[var(--background)] transition-opacity duration-400
            ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}>
            <div className="flex flex-col items-center gap-4 animate-pulse">
                <Calculator className="w-16 h-16 text-[var(--primary)]" />
                <div className="w-32 h-1 bg-[var(--primary)] rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[var(--accent)] animate-[shimmer_1s_infinite]"></div>
                </div>
                <Text variant="muted" className="text-sm">
                    Carregando calculadora...
                </Text>
            </div>
        </div>
    );
}