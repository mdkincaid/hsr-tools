import { Center, Space, Title } from "@mantine/core";

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
        Calculator goes here
      </div>
    </div>
  );
}
