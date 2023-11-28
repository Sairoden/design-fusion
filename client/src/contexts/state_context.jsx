import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "/threejs.png",
    fullDecal: "/threejs.png",
  });

  const value = { state, setState };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
