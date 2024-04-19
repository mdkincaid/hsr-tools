"use client";

import { Table } from "@mantine/core";
import Lightcones from "@/data/lightcones.json";

type Lightcone = {
  Lightcone: string;
  Path: string;
  Rarity: number;
  BaseHP: number;
  BaseATK: number;
  BaseDEF: number;
};

export default function LightconeTable() {
  const rows = Lightcones.map((character: Lightcone) => (
    <Table.Tr key={character.Lightcone}>
      <Table.Td>{character.Lightcone}</Table.Td>
      <Table.Td>{character.Path}</Table.Td>
      <Table.Td>{character.Rarity}</Table.Td>
      <Table.Td>{character.BaseHP}</Table.Td>
      <Table.Td>{character.BaseATK}</Table.Td>
      <Table.Td>{character.BaseDEF}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Lightcone</Table.Th>
          <Table.Th>Path</Table.Th>
          <Table.Th>Rarity</Table.Th>
          <Table.Th>Base HP</Table.Th>
          <Table.Th>Base ATK</Table.Th>
          <Table.Th>Base DEF</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

/*
element
path
rarity
base hp
base atk
base def
base speed
ult cost
*/
