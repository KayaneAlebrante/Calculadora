import React from "react";

type CalculatorHistoryContextValue = {
    history: string[];
    updateHistory: (operation: string, result: string) => void;
};

const CalculatorContext =
    React.createContext<CalculatorHistoryContextValue | null>(null);

export function CalculatorProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [history, setHistory] = React.useState<string[]>([]);
    const historyStorageKey = "calculator_history";

    React.useEffect(() => {
        const savedHistory = localStorage.getItem(historyStorageKey);
        setHistory(savedHistory ? JSON.parse(savedHistory) : []);

        if (!savedHistory) {
            localStorage.setItem(historyStorageKey, JSON.stringify([]));
        }
    }, []);

    function updateHistory(operation: string, result: string) {
        setHistory((prev) => {
            const updatedHistory = [...prev, `${operation} = ${result}`];
            localStorage.setItem(
                historyStorageKey,
                JSON.stringify(updatedHistory)
            );
            return updatedHistory;
        });
    }

    return (
        <CalculatorContext.Provider value={{ history, updateHistory }}>
            {children}
        </CalculatorContext.Provider>
    );
}

export function useCalculator() {
    const context = React.useContext(CalculatorContext);

    if (!context) {
        throw new Error(
            "useCalculator deve ser usado dentro de CalculatorProvider"
        );
    }

    return context;
}