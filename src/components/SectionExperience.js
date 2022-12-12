import Section from "./Section";
import ContentRow from "./ContentRow";
import "./SectionExperience.css";

export default function SectionExperience(props) {
    return (
      <Section nameSection="experience" refSection={props.refSectionExperience}>
        <h2 className="section__heading-2">experiência</h2>
        <ContentRow
          heading3="Sem experiência profissional"
          heading4="desempregado atualmente"
          description="Em busca da primeira oportunidade profissional relacionada a areá de desenvolvimento web para atuar como desenvolvedor front-end."
          dateStart="jan 2022"
          dateEnd="Presente"
        />
      </Section>
    );
}
