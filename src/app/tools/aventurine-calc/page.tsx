"use client";

import marks from "@/utils/mainstatSliderMarks";
import getActualNumberOfMainstats from "@/utils/numberOfMainstats";
import {
  Center,
  Checkbox,
  Divider,
  Group,
  NumberFormatter,
  NumberInput,
  Slider,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";

export default function Page() {
  const [targetDEF, setTargetDEF] = useState<string | number>(4000);
  const [lcBaseDEF, setLcBaseDEF] = useState<string | number>("");
  const [lcEffectDEF, setLcEffectDEF] = useState<string | number>("");
  const [isKnightActive, setIsKnightActive] = useState<boolean>(false);
  const [isBelobogActive, setIsBelobogActive] = useState<boolean>(false);
  const [mainstatAmt, setMainstatAmt] = useState(50);
  const [substatValue, setSubstatValue] = useState<string | number>(4.86);
  const charBaseDEF = 655;
  const traceDEF = 0.35;
  const belobogDEF = 0.15;
  const knightDEF = 0.15;
  const mainstatDEF = 0.54;

  function getMissingDEFPercent() {
    let baseDEF = (lcBaseDEF as number) + charBaseDEF;
    let percentDifference = -(baseDEF - (targetDEF as number)) / baseDEF;
    let defFromMainstats =
      getActualNumberOfMainstats(mainstatAmt) * mainstatDEF;
    let currentDEFPercent =
      traceDEF +
      (lcEffectDEF as number) / 100 +
      (isBelobogActive ? belobogDEF : 0) +
      (isKnightActive ? knightDEF : 0) +
      defFromMainstats;

    return (percentDifference - currentDEFPercent) * 100;
  }

  function getNumberOfSubstatRolls() {
    let missingDEFPercent = getMissingDEFPercent() / 100;
    let defSubstatValue = (substatValue as number) / 100;

    return missingDEFPercent / defSubstatValue;
  }

  return (
    <div>
      <div className="w-2/4 border rounded-xl p-3 m-auto text-xs">
        <Center>
        <Title order={2}>Aventurine A2 Calculator</Title>
        </Center>
      </div>
      <Space h="xs" />
      <div className="w-2/4 border rounded-xl p-3 m-auto text-xs">
        The purpose of this calculator is to get a rough idea for how much DEF%
        is necessary in order to maximize Aventurine&apos;s A2 Crit Rate buff.
      </div>
      <Space h="xs" />
      <div className="w-2/4 border rounded-xl p-3 m-auto">
        <Stack align="stretch" gap="lg" className="mb-4">
          <NumberInput
            label="Target DEF"
            placeholder="Target DEF"
            value={targetDEF}
            onChange={setTargetDEF}
            hideControls
          />
          <NumberInput
            label="Lightcone Base DEF"
            placeholder="Lightcone Base DEF"
            value={lcBaseDEF}
            onChange={setLcBaseDEF}
            hideControls
          />
          <NumberInput
            label="Lightcone Effect DEF%"
            placeholder="Lightcone Effect DEF%"
            value={lcEffectDEF}
            onChange={setLcEffectDEF}
            hideControls
            suffix="%"
          />
          <Group>
            <Checkbox
              label="2pc Knight?"
              checked={isKnightActive}
              onChange={(event) =>
                setIsKnightActive(event.currentTarget.checked)
              }
            />
            <Checkbox
              label="Belobog?"
              checked={isBelobogActive}
              onChange={(event) =>
                setIsBelobogActive(event.currentTarget.checked)
              }
            />
          </Group>
          <div className="mb-2">
            <Text size="sm">Number of DEF% Mainstats</Text>
            <Slider
              value={mainstatAmt}
              onChange={setMainstatAmt}
              step={25}
              marks={marks()}
              label={null}
            />
          </div>
          <NumberInput
            label="DEF% Substat Value"
            placeholder="DEF% Substat Value"
            value={substatValue}
            onChange={setSubstatValue}
            suffix="%"
            hideControls
          />
        </Stack>
        <Divider size="xl" />
        <Stack className="mt-4">
          <div>
            Missing DEF%:
            <NumberFormatter
              value={targetDEF ? getMissingDEFPercent() : ""}
              decimalScale={2}
              prefix=" "
              suffix="%"
            />
          </div>
          <div>
            Number of DEF substat rolls:
            <NumberFormatter
              value={getNumberOfSubstatRolls()}
              decimalScale={2}
              prefix=" "
            />
          </div>
        </Stack>
      </div>
    </div>
  );
}
