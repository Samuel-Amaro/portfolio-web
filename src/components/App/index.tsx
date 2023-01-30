import NavBar from "../NavBar";
import ContentMain from "../ContentMain";
import Footer from "../Footer";
import React, {/*useRef*/} from "react";
import "./app.css";
import ButtonPageUp from "../ButtonPageUp";
import { ThemeContext } from "../../context/ThemeContext";
import useTheme from "../../hooks/useTheme";

function App() {
 const [theme, toggleTheme] = useTheme();

  //criar as refs para as sections
  const nameSections = ["sobre", "experiencia", "educacao", "skills", "interesses", "projects"];

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <main className="main">
        <NavBar
          items={nameSections}
        />
        <ContentMain
          nameSections={nameSections}
        />
        <Footer />
        <ButtonPageUp />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
