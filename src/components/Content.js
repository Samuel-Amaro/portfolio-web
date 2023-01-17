import About from "./About";
import Diviser from "./Diviser";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interesses from "./Interests";
import Projects from "./Projects";

export default function Content(props) {
  return (
    <article className="content">
      <About refSectionAbout={props.refSectionAbout} />
      <Diviser />
      <Experience refSectionExperience={props.refSectionExperience} />
      <Diviser />
      <Education refSectionEducation={props.refSectionEducation} />
      <Diviser />
      <Skills refSectionSkills={props.refSectionSkills} />
      <Diviser />
      <Interesses refSectionInteresses={props.refSectionInteresses} />
      <Diviser />
      <Projects refSectionProjects={props.refSectionProjects} />
    </article>
  );
}
