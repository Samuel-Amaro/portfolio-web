import useLocalStorage from "./useLocalStorage";
import { useState, useEffect } from "react";

export default function useTheme() {
    const [theme, setTheme] = useLocalStorage("themeOption", "light");
    const [stateContext, setStateContext] = useState({
      theme: theme,
      toggleTheme: toggleTheme,
    });

    function toggleTheme(themeOption) {
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
      document.querySelector("body").dataset.theme = theme;
    }, [theme]);

    return [theme, toggleTheme, stateContext]
}