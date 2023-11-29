// CONTEXTS
import { useStateContext } from "../contexts/state_context";

function Tab({ isFilterTab, isActiveTab, key, tab, onClick }) {
  const { state } = useStateContext();
  const activeStyles =
    isFilterTab && isActiveTab
      ? {
          backgroundColor: state.color,
          opacity: 0.5,
        }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={key}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      onClick={onClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={`${tab.name} icon`}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
}

export default Tab;
