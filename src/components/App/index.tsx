import NavBar from "../NavBar";
import Content from "../Content";
import Footer from "../Footer";
import React, {useRef} from "react";
import "./app.css";
import ButtonPageUp from "../ButtonPageUp";
import { ThemeContext } from "../../context/ThemeContext";
import useTheme from "../../hooks/useTheme";

function App() {
 const [theme, toggleTheme] = useTheme();

  //criar as refs para as sections
  const refSectionAbout = useRef<HTMLElement>(null);
  const refSectionExperience = useRef<HTMLElement>(null);
  const refSectionEducation = useRef<HTMLElement>(null);
  const refSectionSkills = useRef<HTMLElement>(null);
  const refSectionInteresses = useRef<HTMLElement>(null);
  const refSectionProjects = useRef<HTMLElement>(null);

  const refSections = [refSectionAbout, refSectionExperience, refSectionEducation, refSectionSkills, refSectionInteresses, refSectionProjects];

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <main className="main">
        <NavBar
          refSections={refSections}
        />
        <Content
          /*refSections={refSections}*/
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
    </ThemeContext.Provider>
  );
}

export default App;
