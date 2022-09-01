import React from "react";
import { useState } from "react";

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  
  const setThemeHandler = (newTheme) =>{
    if(newTheme === null){
      localStorage.removeItem('theme')  
    }
    setTheme(newTheme);
    localStorage.setItem('theme',newTheme)
  }

  return (
    <ThemeContext.Provider value={{ value: theme, onSetTheme: setThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext({
  theme: "",
  onSetTheme: (choice) => {},
});
