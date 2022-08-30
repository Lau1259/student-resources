import React from "react";
import { useState } from "react";

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState();
;

  return (
    <ThemeContext.Provider value={{ value: theme, onSetTheme: setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext({
  theme: "",
  onSetTheme: (choice) => {},
});
