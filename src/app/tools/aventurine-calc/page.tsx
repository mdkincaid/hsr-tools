"use client";

import marks from "@/utils/mainstatSliderMarks";
import getActualNumberOfMainstats from "@/utils/numberOfMainstats";
import {
  Checkbox,
  Divider,
  NumberFormatter,
  NumberInput,
  Slider,
  Text,
} from "@mantine/core";
import { useState } from "react";

export default function Page() {
  const [targetDEF, setTargetDEF] = useState<string | number>("");
  const [lcBaseDEF, setLcBaseDEF] = useState<string | number>("");
  const [lcEffectDEF, setLcEffectDEF] = useState<string | number>("");
  const [isKnightActive, setIsKnightActive] = useState<boolean>(false);
  const [isBelobogActive, setIsBelobogActive] = useState<boolean>(false);
  const [mainstatAmt, setMainstatAmt] = useState(50);
  const [substatValue, setSubstatValue] = useState<string | number>("");
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
    <div className="flex flex-col gap-5 w-2/4">
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
        marks={marks()}
        label={null}
      />
      <Divider size="xl" />
      <NumberInput
        label="DEF% Substat Value"
        placeholder="DEF% Substat Value"
        value={substatValue}
        onChange={setSubstatValue}
        suffix="%"
        hideControls
      />
      <Divider size="xl" />
      <div>
        Missing DEF%:
        <NumberFormatter
          value={targetDEF ? getMissingDEFPercent() : ""}
          decimalScale={2}
          suffix="%"
        ></NumberFormatter>
      </div>
      <div>
        Number of DEF substat rolls:
        <NumberFormatter
          value={getNumberOfSubstatRolls()}
          decimalScale={2}
        ></NumberFormatter>
      </div>
    </div>
  );
}
