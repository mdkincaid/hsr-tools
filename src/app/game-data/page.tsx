"use client";

import { Tabs } from '@mantine/core';
import CharacterTable from './characters';
import LightconeTable from './lightcones';

export default function Data() {
  return (
    <Tabs  className='w-4/5 m-auto' variant="outline" defaultValue="characters">
      <Tabs.List className='m-4'>
        <Tabs.Tab value="characters">
          Characters
        </Tabs.Tab>
        <Tabs.Tab value="lightcones">
          Lightcones
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="characters">
        <CharacterTable />
      </Tabs.Panel>

      <Tabs.Panel value="lightcones">
        <LightconeTable />
      </Tabs.Panel>
    </Tabs>
  );
}