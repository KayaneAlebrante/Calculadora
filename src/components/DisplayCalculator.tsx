import Text from "./Text";

export default function DisplayCalculator({ operation, result }: { operation: string, result: string }) {
    return (
        <div className={`flex flex-col gap-2 px-[1.375rem]
                cursor-default select-none
            `}>
            <Text
                as="div"
                variant="muted"
                className="flex items-center justify-end">
                {operation}
            </Text>

            <div className={`flex items-center justify-between`}>
                <Text variant="muted">
                    =
                </Text>

                <Text variant="blast">
                    {result}
                </Text>

            </div>
        </div>
    );
}