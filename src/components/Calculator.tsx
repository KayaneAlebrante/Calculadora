import React, { useEffect } from "react";
import Card from "./Card";
import { Button } from "./Button";
import DisplayCalculator from "./DisplayCalculator";
import { useCalculator } from "../context/CalculatorContext";

export default function Calculator() {
    const [operation, setOperation] = React.useState('');
    const [result, setResult] = React.useState('');
    const { updateHistory } = useCalculator();

    function handleButtonClick(input: string) {
        if (input === "=") {  
            try {
                const sanitizedOperation = operation.replace(/,/g, '.').replace(/×/g, '*').replace(/÷/g, '/');
                const operationResult = eval(sanitizedOperation);
                const parsedResult = parseFloat(operationResult.toFixed(2)).toString().replace('.', ',');
                setResult(parsedResult);
                updateHistory(operation, parsedResult);
                setOperation(parsedResult);
            } catch {
                setResult("Erro");
            }
            return;
        }

        if (input === "," && !operation.endsWith(",")) {
            setOperation(`${operation},`);
            return;
        }

        if (input === "C") {
            setOperation("");
            setResult("");
            return;
        }

        if (input === "CE") {
            setResult("");
            setOperation(operation.slice(0, -1));
            return;
        }

        if (result) {
            setOperation(isNaN(parseFloat(input)) ? `${result}${input}` : input);
            setResult("");
            return;
        }
        
        setOperation(`${operation}${input}`);
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', ','].includes(e.key)) {
                handleButtonClick(e.key === '.' ? ',' : e.key);
            } else if (e.key === 'Enter' || e.key === '=') {
                handleButtonClick('=');
            } else if (e.key === 'Backspace') {
                handleButtonClick('CE');
            } else if (e.key === 'Escape') {
                handleButtonClick('C');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [operation, result]);

    const buttons = [
        [
            { input: "CE", variant: "default" as const },
            { input: "C", className: "flex-1", variant: "default" as const },
            { input: "/", variant: "primary" as const }
        ],
        [
            { input: "7", variant: "default" as const },
            { input: "8", variant: "default" as const },
            { input: "9", variant: "default" as const },
            { input: "*", variant: "primary" as const }
        ],
        [
            { input: "4", variant: "default" as const },
            { input: "5", variant: "default" as const },
            { input: "6", variant: "default" as const },
            { input: "-", variant: "primary" as const }
        ],
        [
            { input: "1", variant: "default" as const },
            { input: "2", variant: "default" as const },
            { input: "3", variant: "default" as const },
            { input: "+", variant: "primary" as const }
        ],
        [
            { input: "0", className: "flex-1 h-16", variant: "default" as const },
            { input: ",", variant: "default" as const },
            { input: "=", className: "w-16 h-16", variant: "accent" as const }
        ]
    ];

    return (
        <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-10 px-8 pb-8 shadow-xl backdrop-blur-md transition-all duration-300">
            <DisplayCalculator operation={operation} result={result} />

            <div className="flex flex-col gap-3">
                {buttons.map((row, index) => (
                    <div key={index} className="flex gap-3">
                        {row.map((button) => (
                            <Button
                                key={button.input}
                                variant={button.variant}
                                className={button.className || "w-16 h-16"}
                                onClick={() => handleButtonClick(button.input)}
                            >
                                {button.input}
                            </Button>
                        ))}
                    </div>
                ))}
            </div>
        </Card>
    );
}