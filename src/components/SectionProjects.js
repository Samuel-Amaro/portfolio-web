import Section from "./Section";
import DataProjects from "../projects.json";
import CardProject from "./CardProject";
import "./SectionProjects.css";

export default function SectionProjects() {
    const listCardProjects = DataProjects.projects.map((project) => {
      return (
        <li className="project__item" key={project.id} tabIndex="0">
          {
            <CardProject
              id={project.id} /*imagens local*/
              src={"./images/" + project.image}
              name={project.name}
              tecnologys={project.tecnologys}
              repository={project.repository}
              url={project.url}
            />
          }
        </li>
      );
    });
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
          {listCardProjects}
        </ul>
      </Section>
    );
}