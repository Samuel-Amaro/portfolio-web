import NavBar from "./NavBar";
import ContentMain from "./ContentMain";
import Footer from "./Footer";
import React, { useState, useRef } from "react";
import "./App.css";
import ButtonPageUp from "./ButtonPageUp";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [optionTheme, setOptionTheme] = useState({
    theme:
      localStorage.getItem("themeOption") === null
        ? "light"
        : localStorage.getItem("themeOption"),
    toggleTheme: toggleTheme,
  });

  function toggleTheme(themeOption) {
    setOptionTheme((previosState) => {
      return {
        ...previosState,
        theme: themeOption,
        toggleTheme: previosState.toggleTheme,
      };
    });
    localStorage.setItem("themeOption", themeOption);
  }

  //criar as refs para as sections
  const refSectionAbout = useRef(null);
  const refSectionExperience = useRef(null);
  const refSectionEducation = useRef(null);
  const refSectionSkills = useRef(null);
  const refSectionInteresses = useRef(null);
  const refSectionProjects = useRef(null);

  return (
    <ThemeContext.Provider value={optionTheme}>
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
            <ContentMain
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
