import Card from "./Card";
import Text from "./Text";
import { useCalculator } from "../context/CalculatorContext";

export default function OperationHistory() {
    const { history } = useCalculator();

    return (
        <Card className="w-full py-10 px-8">
            <Text as="h1" variant="heading" className="mb-4">
                Histórico de Operações
            </Text>

            {history.length > 0 ? (
                <ul className="flex flex-col gap-3">
                    {history.map((item, index) => (
                        <li key={index} className="flex items-center justify-between">
                            <Text variant="muted">{item}</Text>
                        </li>
                    ))}
                </ul>
            ) : (
                <Text variant="muted">
                    Nenhuma operação realizada.
                </Text>
            )}
        </Card>
    );

}