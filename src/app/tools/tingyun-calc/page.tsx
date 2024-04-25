import {
  Center,
  Divider,
  NumberFormatter,
  NumberInput,
  Space,
  Stack,
  Title,
} from "@mantine/core";

export default function Page() {
  return (
    <div>
      <div className="w-2/4 border rounded-xl p-3 m-auto text-xs">
        <Center>
          <Title order={2}>Tingyun Skill Buff Calculator</Title>
        </Center>
      </div>
      <Space h="xs" />
      <div className="w-2/4 border rounded-xl p-3 m-auto text-xs">
        purpose goes here
      </div>
      <Space h="xs" />
      <div className="w-2/4 border rounded-xl p-3 m-auto">
        <Stack align="stretch" gap="lg" className="mb-4">
          <NumberInput label="Target Base ATK" hideControls />
          <NumberInput label="Target LC Base ATK" hideControls />
          <NumberInput label="Tingyun LC Base ATK" hideControls />
          <NumberInput label="Tingyun Skill Trace Level" hideControls />
          <NumberInput label="Extra Flat ATK" hideControls />
          <NumberInput label="Extra ATK%" hideControls />
        </Stack>
        <Divider size="xl" />
        <Stack className="mt-4 mb-4">
          <div>
            Target Total Base ATK:
            <NumberFormatter value="10" prefix=" " suffix="" />
          </div>
          <div>
            ATK% Buff from Tingyun:
            <NumberFormatter value="10" prefix=" " suffix="%" />
          </div>
          <div>
            ATK Buff from Tingyun:
            <NumberFormatter value="10" prefix=" " suffix="" />
          </div>
          <div>
            Hands Base ATK:
            <NumberFormatter value="10" prefix=" " suffix="" />
          </div>
          <div>
            Tingyun Trace ATK%:
            <NumberFormatter value="10" prefix=" " suffix="%" />
          </div>
          <div>
            Tingyun Base ATK:
            <NumberFormatter value="10" prefix=" " suffix="" />
          </div>
          <div>
            Tingyun Total Base ATK:
            <NumberFormatter value="10" prefix=" " suffix="" />
          </div>
          <div>
            Tingyun ATK% Cap:
            <NumberFormatter value="10" prefix=" " suffix="%" />
          </div>
          <div>
            Tingyun ATK Goal:
            <NumberFormatter value="10" prefix=" " suffix="" />
          </div>
        </Stack>
        <Divider size="xl" />
        <Stack className="mt-4">
          <div>
            ATK Needed:
            <NumberFormatter value="10" prefix=" " suffix="" />
          </div>
          <div>
            ATK% Needed:
            <NumberFormatter value="10" prefix=" " suffix="%" />
          </div>
        </Stack>
      </div>
    </div>
  );
}
