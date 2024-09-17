import { createContext, useState } from "react";
import { COLORS } from "../constants/colors";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [btnColor, setBtnColor] = useState(COLORS.BLUE);
  const [btnTextColor, setBtnTextColor] = useState(COLORS.PLUM);
  const [pageColor, setPageColor] = useState(COLORS.LAVENDER);

  return (
    <ThemeContext.Provider
      value={{
        btnColor,
        setBtnColor,
        btnTextColor,
        setBtnTextColor,
        pageColor,
        setPageColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
