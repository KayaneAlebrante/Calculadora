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

    function updateHistory(operation: string, result: string) {
        setHistory((prev) => [
            ...prev,
            `${operation} = ${result}`,
        ]);
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