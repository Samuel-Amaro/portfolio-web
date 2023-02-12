import NavBar from "../NavBar";
import ContentMain from "../ContentMain";
import Footer from "../Footer";
import React from "react";
import "./app.css";
import ButtonPageUp from "../ButtonPageUp";
import { ThemeContextProvider } from "../../context/ThemeContext";

function App() {

  //criar as refs para as sections
  const nameSections = ["sobre", "experiencia", "educacao", "skills", "interesses", "projects"];

  return (
    <ThemeContextProvider>
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
    </ThemeContextProvider>
  );
}

export default App;
