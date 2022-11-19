import Section from "./Section";
import ContentRow from "./ContentRow";

export default function SectionEducation(props) {
    return (
      <Section nameSection="education" refSection={props.refSectionEducation}>
        <h2 className="section__heading-2">educação</h2>
        <ContentRow
          heading3="Instituto Federal de Goiás Campus Formosa"
          heading4="Graduação - tecnologia"
          description="Superior de tecnologia em Análise e Desenvolvimento de Sistemas"
          dateStart="Março 2019"
          dateEnd="Dez 2021"
        />
      </Section>
    );
}