import SectionAbout from "./SectionAbout";
import Diviser from "./Diviser";
import SectionExperience from "./SectionExperience";
import SectionEducation from "./SectionEducation";
import SectionSkills from "./SectionSkills";
import SectionInteresses from "./SectionInteresses";
import SectionProjects from "./SectionProjects";


export default function ContentMain(props) {
    return (
      <article className="main__content-main">
        <SectionAbout refSectionAbout={props.refSectionAbout} />
        <Diviser />
        <SectionExperience refSectionExperience={props.refSectionExperience} />
        <Diviser />
        <SectionEducation refSectionEducation={props.refSectionEducation} />
        <Diviser />
        <SectionSkills refSectionSkills={props.refSectionSkills} />
        <Diviser />
        <SectionInteresses refSectionInteresses={props.refSectionInteresses} />
        <Diviser />
        <SectionProjects refSectionProjects={props.refSectionProjects} />
      </article>
    );
}