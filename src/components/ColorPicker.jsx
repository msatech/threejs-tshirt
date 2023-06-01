import React from "react";

import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../../store";
import CustomButton from "./CustomButton";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={state.presetColors}
        onChange={(color) => (state.color = color.hex)}
      />
      <CustomButton type="filled" title="Save Color" handleClick={() => state.presetColors = [...state.presetColors, snap.color]} customStyle="w-full px-4 py-1 mt-1 font-bold text-sm" />
    </div>
  );
};

export default ColorPicker;
