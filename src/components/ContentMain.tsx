import About from "./About";
/*import Diviser from "./Diviser";*/
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interesses from "./Interests";
import Projects from "./Projects";
import Section from "./Section";
import Content from "./Content";
import React from "react";

type PropsContent = {
  nameSections: string[];
};

export default function ContentMain({ nameSections }: PropsContent) {
  function getSectionByName(nameSection: string) {
    switch (nameSection) {
      case "sobre":
        return <About />;
      case "experiencia":
        return <Experience />;
      case "educacao":
        return <Education />;
      case "skills":
        return <Skills />;
      case "interesses":
        return <Interesses />;
      case "projects":
        return <Projects />;
      default:
        throw new Error("Name section não mapeou para um componente de seção");
    }
  }

  return (
    <article className="content">
      {nameSections.map((name, index) => {
        return index < nameSections.length - 1 ? (
          <Content
            nameSection={name}
            className={`section__${name}`}
            key={index}
          >
            {getSectionByName(name)}
          </Content>
        ) : (
          <Section
            className={`section__${name}`}
            nameSection={name}
            key={index}
          >
            {getSectionByName(name)}
          </Section>
        );
      })}
    </article>
  );
}
