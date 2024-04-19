"use client";

import { Table } from "@mantine/core";
import Characters from "@/data/characters.json";

type Character = {
  Unit: string;
  Element: string;
  Path: string;
  Rarity: number;
  BaseHP: number;
  BaseATK: number;
  BaseDEF: number;
  BaseSpeed: number;
  UltCost: string | number;
};

export default function CharacterTable() {
  const rows = Characters.map((character: Character) => (
    <Table.Tr key={character.Unit}>
      <Table.Td>{character.Unit}</Table.Td>
      <Table.Td>{character.Element}</Table.Td>
      <Table.Td>{character.Path}</Table.Td>
      <Table.Td>{character.Rarity}</Table.Td>
      <Table.Td>{character.BaseHP}</Table.Td>
      <Table.Td>{character.BaseATK}</Table.Td>
      <Table.Td>{character.BaseDEF}</Table.Td>
      <Table.Td>{character.BaseSpeed}</Table.Td>
      <Table.Td>{character.UltCost}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Unit Name</Table.Th>
          <Table.Th>Element</Table.Th>
          <Table.Th>Path</Table.Th>
          <Table.Th>Rarity</Table.Th>
          <Table.Th>Base HP</Table.Th>
          <Table.Th>Base ATK</Table.Th>
          <Table.Th>Base DEF</Table.Th>
          <Table.Th>Base Speed</Table.Th>
          <Table.Th>Ult Cost</Table.Th>
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
