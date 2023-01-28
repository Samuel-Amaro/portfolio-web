import useLocalStorage from "./useLocalStorage";
import { useState, useEffect } from "react";

export default function useTheme() {
    const [theme, setTheme] = useLocalStorage("themeOption", "light");
    const [stateContext, setStateContext] = useState({
      theme: theme,
      toggleTheme: toggleTheme,
    });

    function toggleTheme(themeOption: string) {
      setStateContext((previosState) => {
        return {
          ...previosState,
          theme: themeOption,
          toggleTheme: previosState.toggleTheme,
        };
      });
      setTheme(themeOption);
    }

    useEffect(() => {
      const body = document.querySelector("body") as HTMLBodyElement;
      body.dataset.theme = theme;
    }, [theme]);

    return [theme, toggleTheme, stateContext]
}