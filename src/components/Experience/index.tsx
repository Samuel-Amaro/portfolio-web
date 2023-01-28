import Section from "../Section";
import WrapperDatas from "../WrapperDatas";
import Heading2 from "../Headings";
import "./experience.css";
import React from "react";

type PropsExperience = {
  refSectionExperience: React.RefObject<HTMLElement>
};

export default function Experience({refSectionExperience}: PropsExperience) {
  return (
    <Section nameSection="experience" refSection={refSectionExperience}>
      <div className="experience">
        <Heading2 level={2}>experiência</Heading2>
        <WrapperDatas
          title="Sem experiência profissional"
          subtitle="desempregado atualmente"
          description="Em busca da primeira oportunidade profissional relacionada a areá de desenvolvimento web para atuar como desenvolvedor front-end."
          dateStart="jan 2022"
          dateEnd="Presente"
        />
      </div>
    </Section>
  );
}
