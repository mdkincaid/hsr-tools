"use client";

import { Table, Text, TextInput, keys, rem } from "@mantine/core";
import Characters from "@/data/characters.json";
import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import Th from "./Th";

type Character = {
  Unit: string;
  Element: string;
  Path: string;
  Rarity: number;
  BaseHP: number;
  BaseATK: number;
  BaseDEF: number;
  BaseSpeed: number;
  UltCost: string;
};

function filterData(data: Character[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) =>
      item[key].toString().toLowerCase().includes(query)
    )
  );
}

function sortData(
  data: Character[],
  payload: { sortBy: keyof Character | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].toString().localeCompare(a[sortBy].toString());
      }

      return a[sortBy].toString().localeCompare(b[sortBy].toString());
    }),
    payload.search
  );
}

export default function CharacterTable() {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(Characters);
  const [sortBy, setSortBy] = useState<keyof Character | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof Character) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(Characters, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(Characters, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    );
  };

  const rows = sortedData.map((row: Character) => (
    <Table.Tr key={row.Unit}>
      <Table.Td>{row.Unit}</Table.Td>
      <Table.Td>{row.Element}</Table.Td>
      <Table.Td>{row.Path}</Table.Td>
      <Table.Td>{row.Rarity}</Table.Td>
      <Table.Td>{row.BaseHP}</Table.Td>
      <Table.Td>{row.BaseATK}</Table.Td>
      <Table.Td>{row.BaseDEF}</Table.Td>
      <Table.Td>{row.BaseSpeed}</Table.Td>
      <Table.Td>{row.UltCost}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={<TbSearch style={{ width: rem(16), height: rem(16) }} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table highlightOnHover>
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === "Unit"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("Unit")}
            >
              Unit Name
            </Th>
            <Th
              sorted={sortBy === "Element"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("Element")}
            >
              Element
            </Th>
            <Th
              sorted={sortBy === "Path"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("Path")}
            >
              Path
            </Th>
            <Th
              sorted={sortBy === "Rarity"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("Rarity")}
            >
              Rarity
            </Th>
            <Th
              sorted={sortBy === "BaseHP"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("BaseHP")}
            >
              Base HP
            </Th>
            <Th
              sorted={sortBy === "BaseATK"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("BaseATK")}
            >
              Base ATK
            </Th>
            <Th
              sorted={sortBy === "BaseDEF"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("BaseDEF")}
            >
              Base DEF
            </Th>
            <Th
              sorted={sortBy === "BaseSpeed"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("BaseSpeed")}
            >
              Base Speed
            </Th>
            <Th
              sorted={sortBy === "UltCost"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("UltCost")}
            >
              Ult Cost
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>{rows.length > 0 ? (
            rows
        ) : (
            <Table.Tr>
                <Table.Td colSpan={Object.keys(Characters[0]).length}>
                    <Text >
                        Nothing Found
                    </Text>
                </Table.Td>
            </Table.Tr>
        )}</Table.Tbody>
      </Table>
    </>
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
