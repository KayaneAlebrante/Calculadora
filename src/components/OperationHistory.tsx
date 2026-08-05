import Card from "./Card";
import Text from "./Text";

export default function OperationHistory() {
    return (
    <Card className="w-full py-10 px-8">
        <Text as="h1" variant="heading" className="mb-4">
            Histórico de Operações
        </Text>

        <ul className="flex flex-col gap-3">
            <Text as="li">
                1 + 1 = 2
            </Text>
            <Text as="li">
                2 x 3 = 6
            </Text>
            <Text as="li">
                10 / 2 = 5
            </Text>
        </ul>
    </Card>
    );

}