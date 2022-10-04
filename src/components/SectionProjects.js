import Section from "./Section";

export default function SectionProjects() {
    return (
      <Section nameSection="projects">
        <h2 className="section__heading-2">Projetos</h2>
        <p className="section__description">
          Portefólio, com projetos desenvolvidos para fins de prática em
          determinadas tecnologias. Cada card de projeto possui um link para
          visualização do projeto e um link para o repositório do projeto com a
          sua respectiva implementação.
        </p>
        <ul className="projects">
        
        </ul>
      </Section>
    );
}