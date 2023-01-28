import About from "./About";
import Diviser from "./Diviser";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interesses from "./Interests";
import Projects from "./Projects";
import React from "react";

type refSection = React.RefObject<HTMLElement>;

type PropsContent = {
  refSectionAbout: refSection,
  refSectionExperience: refSection,
  refSectionEducation: refSection,
  refSectionSkills: refSection,
  refSectionInteresses: refSection,
  refSectionProjects: refSection
};

export default function Content({refSectionAbout, refSectionExperience, refSectionEducation, refSectionSkills, refSectionInteresses, refSectionProjects}: PropsContent) {
  return (
    <article className="content">
      <About refSectionAbout={refSectionAbout} />
      <Diviser />
      <Experience refSectionExperience={refSectionExperience} />
      <Diviser />
      <Education refSectionEducation={refSectionEducation} />
      <Diviser />
      <Skills refSectionSkills={refSectionSkills} />
      <Diviser />
      <Interesses refSectionInteresses={refSectionInteresses} />
      <Diviser />
      <Projects refSectionProjects={refSectionProjects} />
    </article>
  );
}
