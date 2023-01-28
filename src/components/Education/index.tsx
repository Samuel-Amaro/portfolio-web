import Section from "../Section";
import WrapperDatas from "../WrapperDatas";
import Heading2 from "../Headings/";
import "./education.css";
import React from "react";

type PropsEducation = {
  refSectionEducation: React.RefObject<HTMLElement>
};

export default function Education({refSectionEducation}: PropsEducation) {
  return (
    <Section nameSection="education" refSection={refSectionEducation}>
      <div className="education">
        <Heading2 level={2}>educação</Heading2>
        <WrapperDatas
          title="Instituto Federal de Goiás Campus Formosa"
          subtitle="Graduação - tecnologia"
          description="Superior de tecnologia em Análise e Desenvolvimento de Sistemas"
          dateStart="Março 2019"
          dateEnd="Dez 2021"
        />
      </div>
    </Section>
  );
}
