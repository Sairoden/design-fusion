// REACT & LIBRARIES
import { SketchPicker } from "react-color";

// CONTEXTS
import { useStateContext } from "../contexts/state_context";

function ColorPicker() {
  const { state, setState } = useStateContext();

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={state.color}
        disableAlpha
        onChange={color =>
          setState(prevState => ({ ...prevState, color: color.hex }))
        }
      />
    </div>
  );
}

export default ColorPicker;
