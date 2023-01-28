import React from "react";

type ThemeContextType = {
  theme: string,
  toggleTheme: (themeOption: string) => {},
};

export const ThemeContext = React.createContext({} as ThemeContextType);
