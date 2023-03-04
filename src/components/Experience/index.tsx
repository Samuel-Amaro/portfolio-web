import WrapperDatas from "../WrapperDatas";
import Heading2 from "../Headings";
import "./experience.css";
import React from "react";

export default function Experience() {
  return (
    <div className="experience">
      <Heading2 level={2}>experiência</Heading2>
      <WrapperDatas
        title="Sem experiência profissional"
        subtitle="desempregado atualmente"
        description="Em busca da primeira oportunidade profissional relacionada a areá de desenvolvimento web para atuar como desenvolvedor front-end. Atualmente estou estudando desde dez/2021, quando finalizei minha graduação, constantemente, lendo artigos técnicos, documentações, especificações, colocando conhecimento em prática com projetos pessoais, aprendendo boas práticas, é nova ferramentas, para ajudar na minha qualificação profissional em busca de uma oportunidade."
        dateStart="jan 2022"
        dateEnd="Presente"
      />
    </div>
  );
}
