import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useContext, useCallback, useMemo } from "react";

type DataTheme = "light" | "dark";

type ThemeContextType = {
  theme: DataTheme;
  toggleTheme: (theme: DataTheme) => void;
};

type PropsProviderThemeContext = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext<null | ThemeContextType>(null);

export function ThemeContextProvider({ children }: PropsProviderThemeContext) {
  const [theme, setToggleTheme] = useLocalStorage<DataTheme>(
    "themeOption",
    "light"
  );

  const toggleTheme = useCallback((theme: DataTheme) => {
    setToggleTheme(theme);
  }, [setToggleTheme]);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Error ao usar theme context");
  }

  return themeContext;
}
