import React from "react";
import Card from "./Card";
import { Button } from "./Button";
import DisplayCalculator from "./DisplayCalculator";

export default function Calculator() {
    const [operation, setOperation] = React.useState('');
    const [result, setResult] = React.useState('');

    function handleButtonClick(input: string) {
        if (input === "=") {  
            const operationResult = eval(operation.replace(/,/g, '.'));
            const parsedResult = parseFloat(operationResult.toFixed(2)).toString().replace('.', ',');
            setResult(parsedResult);
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

    type CalculatorButton = {
        input: string;
        variant?: "primary";
        className?: string;
    };

    const buttons: CalculatorButton[][] = [
        [
            { input: "CE" },
            { input: "C", className: "flex-1" },
            { input: "/", variant: "primary" }
        ],
        [
            { input: "7" },
            { input: "8" },
            { input: "9" },
            { input: "*", variant: "primary" }
        ],
        [
            { input: "4" },
            { input: "5" },
            { input: "6" },
            { input: "-", variant: "primary" }
        ],
        [
            { input: "1" },
            { input: "2" },
            { input: "3" },
            { input: "+", variant: "primary" }
        ],
        [
            { input: "0", className: "flex-1 h-16" },
            { input: "," },
            { input: "=", className: "w-16 h-16 bg-[#7F45E2]" }
        ]
    ];

    return (
        <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
            <DisplayCalculator operation={operation} result={result} />

            <div className="flex flex-col gap-3">
                {buttons.map((row, index) => (
                    <div className="flex gap-3">
                        {row.map((button) => (
                            <Button
                                key={button.input}
                                variant={button.variant ?? "default"}
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