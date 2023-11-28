// CONTEXTS
import { useStateContext } from "../contexts/state_context";

function CustomButton({ children, onClick, type, customStyles }) {
  const { state } = useStateContext();

  const generateStyle = type => {
    switch (type) {
      case "filled":
        return { backgroundColor: state.color, color: "#fff" };

      case "outlined":
        return {
          backgroundColor: "#fff",
          color: state.color,
          border: `1px solid ${state.color}`,
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
