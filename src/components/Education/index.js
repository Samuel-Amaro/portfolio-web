import Section from "../Section";
import WrapperDatas from "../WrapperDatas";
import Heading2 from "../Headings/Heading2";
import "./education.css";

export default function Education(props) {
  return (
    <Section nameSection="education" refSection={props.refSectionEducation}>
      <div className="education">
        {/*<h2 className="section__heading-2">educação</h2>*/}
        <Heading2>educação</Heading2>
        <WrapperDatas
          heading3="Instituto Federal de Goiás Campus Formosa"
          heading4="Graduação - tecnologia"
          description="Superior de tecnologia em Análise e Desenvolvimento de Sistemas"
          dateStart="Março 2019"
          dateEnd="Dez 2021"
        />
      </div>
    </Section>
  );
}
