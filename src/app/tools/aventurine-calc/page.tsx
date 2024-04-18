"use client";

import { Checkbox, NumberInput, Slider, Text } from "@mantine/core";
import { useState } from "react";

export default function Page() {
  const [targetDEF, setTargetDEF] = useState<string | number>("");
  const [lcBaseDEF, setLcBaseDEF] = useState<string | number>("");
  const [lcEffectDEF, setLcEffectDEF] = useState<string | number>("");
  const [isKnightActive, setIsKnightActive] = useState<boolean>(false);
  const [isBelobogActive, setIsBelobogActive] = useState<boolean>(false);
  const [mainstatAmt, setMainstatAmt] = useState(50);
  const [substatValue, setSubstatValue] = useState<string | number>("");

  const marks = [
    { value: 0, label: "0" },
    { value: 25, label: "1" },
    { value: 50, label: "2" },
    { value: 75, label: "3" },
    { value: 100, label: "4" },
  ];

  return (
    <div>
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
      <Checkbox
        labelPosition="left"
        label="2pc Knight?"
        checked={isKnightActive}
        onChange={(event) => setIsKnightActive(event.currentTarget.checked)}
      />
      <Checkbox
        labelPosition="left"
        label="Belobog?"
        checked={isBelobogActive}
        onChange={(event) => setIsBelobogActive(event.currentTarget.checked)}
      />
      <Text size="sm">Number of DEF% Mainstats</Text>
      <Slider
        value={mainstatAmt}
        onChange={setMainstatAmt}
        step={25}
        marks={marks}
        label={null}
      />
      <NumberInput
        label="DEF% Substat Value"
        placeholder="DEF% Substat Value"
        value={substatValue}
        onChange={setSubstatValue}
        hideControls
      />
    </div>
  );
}

/*
  target def: number input
  lc base def: number input
  lc effect def%: number input %
  2pc knight?: checkbox
  belobog?: checkbox
  # of DEF mainstats: dropdown (1, 2, 3, 4)

  missing def%: number output %
  DEF% substat value: number input %
  # of def subs: number output

  */
