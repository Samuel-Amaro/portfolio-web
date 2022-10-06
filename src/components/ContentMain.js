import SectionAbout from "./SectionAbout";
import Diviser from "./Diviser";
import SectionExperience from "./SectionExperience";
import SectionEducation from "./SectionEducation";
import SectionSkills from "./SectionSkills";
import SectionInteresses from "./SectionInteresses";
import SectionProjects from "./SectionProjects";
import "./ContentMain.css";

export default function ContentMain() {
    return (
        <article className="main__content-main">
            <SectionAbout />
            <Diviser />
            <SectionExperience />
            <Diviser />
            <SectionEducation />
            <Diviser />
            <SectionSkills />
            <Diviser />
            <SectionInteresses />
            <Diviser />
            <SectionProjects />
        </article>
    );
}