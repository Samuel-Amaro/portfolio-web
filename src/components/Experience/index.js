import Section from "../Section";
import WrapperDatas from "../WrapperDatas";
import "./experience.css";
import Heading2 from "../Headings/Heading2";

export default function Experience(props) {
  return (
    <Section nameSection="experience" refSection={props.refSectionExperience}>
      <div className="experience">
        {/*<h2 className="section__heading-2">experiência</h2>*/}
        <Heading2>experiência</Heading2>
        <WrapperDatas
          heading3="Sem experiência profissional"
          heading4="desempregado atualmente"
          description="Em busca da primeira oportunidade profissional relacionada a areá de desenvolvimento web para atuar como desenvolvedor front-end."
          dateStart="jan 2022"
          dateEnd="Presente"
        />
      </div>
    </Section>
  );
}
