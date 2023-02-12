import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useContext } from "react";

type ThemeContextType = {
  theme: string,
  setToggleTheme: React.Dispatch<React.SetStateAction<string>>;
};

type PropsProviderThemeContext = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext<null | ThemeContextType>(null);

export function ThemeContextProvider({children}: PropsProviderThemeContext) {

  const [theme, setToggleTheme] = useLocalStorage("themeOption", "light");

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.dataset.theme = theme;
  }, [theme]);

  return (<ThemeContext.Provider value={{theme, setToggleTheme}}>
    {children}
  </ThemeContext.Provider>);
}

export function useThemeContext() {
  const themeContext = useContext(ThemeContext);

  if(!themeContext) {
    throw new Error("Error ao usar theme context");
  }

  return themeContext;
}


