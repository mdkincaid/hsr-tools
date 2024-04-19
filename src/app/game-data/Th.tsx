import { Center, rem, Group, Text, UnstyledButton, Table } from "@mantine/core";
import { TbSelector, TbChevronDown, TbChevronUp, TbSearch } from "react-icons/tb";

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
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center>
                        <Icon style={{ width: rem(16), height: rem(16) }} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    )
}