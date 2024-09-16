import { createContext, useState } from "react";
import { COLORS } from "../constants/colors";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  console.log(children);
  const [btnColor, setBtnColor] = useState(COLORS.GREEN);
  const [btnTextColor, setBtnTextColor] = useState(COLORS.GREEN);
  const [pageColor, setPageColor] = useState(COLORS.RED);
  const [btnStyles, setBtnStyles] = useState(COLORS.GREEN);

  return (
    <ThemeContext.Provider
      value={{
        btnColor,
        setBtnColor,
        btnTextColor,
        setBtnTextColor,
        pageColor,
        setPageColor,
        btnStyles,
        setBtnStyles,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
