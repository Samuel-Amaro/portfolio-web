import SectionAbout from "./SectionAbout";
import Diviser from "./Diviser";
import SectionExperience from "./SectionExperience";
import SectionEducation from "./SectionEducation";

export default function ContentMain() {
    return (
        <article className="main__content-main">
            <SectionAbout />
            <Diviser />
            <SectionExperience />
            <Diviser />
            <SectionEducation />
            <Diviser />
        </article>
    );
}