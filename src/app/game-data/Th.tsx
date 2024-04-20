import { Center, rem, Group, Text, UnstyledButton, Table } from "@mantine/core";
import { TbSelector, TbChevronDown, TbChevronUp } from "react-icons/tb";

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

export default function Th({children, reversed, sorted, onSort}: ThProps) {
    const Icon = sorted ? (reversed ? TbChevronUp : TbChevronDown) : TbSelector;

    return (
        <Table.Th>
            <UnstyledButton onClick={onSort}>
                <Group justify="space-between">
                    <Text>
                        {children}
                    </Text>
                    <Center>
                        <Icon  />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    )
}