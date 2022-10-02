import Section from "./Section";
import ContentRow from "./ContentRow";

export default function SectionEducation() {
    return (
      <Section nameSection="education">
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