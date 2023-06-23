import NavBar from "../NavBar";
import ContentMain from "../ContentMain";
import Footer from "../Footer";
import React, { useEffect } from "react";
import "./app.css";
import ButtonPageUp from "../ButtonPageUp";

function App() {

  useEffect(() => {
    return () => {
      document.querySelector(".main")?.classList.add("main--pading");
    };
  });

  //criar as refs para as sections
  const nameSections = [
    "sobre",
    "experiencia",
    "educacao",
    "skills",
    "interesses",
    "projects",
  ];

  return (
    <>
      <NavBar items={nameSections}/>
      <ContentMain nameSections={nameSections} />
      <Footer />
      <ButtonPageUp />
    </>
  );
}

export default App;
