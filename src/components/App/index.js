import NavBar from "../NavBar";
import Content from "../Content";
import Footer from "../Footer";
import React, { useState, useRef } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./app.css";
import ButtonPageUp from "../ButtonPageUp";
import { ThemeContext } from "../../context/ThemeContext";

function App() {
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

  //criar as refs para as sections
  const refSectionAbout = useRef(null);
  const refSectionExperience = useRef(null);
  const refSectionEducation = useRef(null);
  const refSectionSkills = useRef(null);
  const refSectionInteresses = useRef(null);
  const refSectionProjects = useRef(null);

  return (
    <ThemeContext.Provider value={stateContext}>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <main className="main" data-theme={theme}>
            <NavBar
              refSectionAbout={refSectionAbout}
              refSectionExperience={refSectionExperience}
              refSectionEducation={refSectionEducation}
              refSectionSkills={refSectionSkills}
              refSectionInteresses={refSectionInteresses}
              refSectionProjects={refSectionProjects}
            />
            <Content
              refSectionAbout={refSectionAbout}
              refSectionExperience={refSectionExperience}
              refSectionEducation={refSectionEducation}
              refSectionSkills={refSectionSkills}
              refSectionInteresses={refSectionInteresses}
              refSectionProjects={refSectionProjects}
            />
            <Footer />
            <ButtonPageUp />
          </main>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

export default App;
