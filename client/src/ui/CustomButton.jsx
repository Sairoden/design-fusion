// CONTEXTS
import { useStateContext } from "../contexts/state_context";

// CONFIGS
import { getContrastingColor } from "../configs/helpers";

function CustomButton({ children, onClick, type, customStyles }) {
  const { state } = useStateContext();

  const generateStyle = type => {
    switch (type) {
      case "filled":
        return {
          backgroundColor: state.color,
          color: getContrastingColor(state.color),
        };

      case "outline":
        return {
          borderWidth: "1px",
          borderColor: state.color,
          color: state.color,
        };

      default:
        return {};
    }
  };

  return (
    <button
      onClick={onClick}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
    >
      {children}
    </button>
  );
}

export default CustomButton;
