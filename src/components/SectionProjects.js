import Section from "./Section";
import DataProjects from "../projects.json";
import CardProject from "./CardProject";
import "./SectionProjects.css";
import Badge from "./Badge";

export default function SectionProjects() {
  let pathsImages = new Map([
    ["html", "badge-logo-html.svg"],
    ["css", "badge-logo-css.png"],
    ["JavaScript", "badge-logo-js.png"],
    ["Bem", "badge-logo-bem.svg"],
    ["ReactJS", "badge-logo-react.svg"],
    ["NPM", "badge-logo-npm.svg"],
    ["PHP", "badge-logo-php.svg"],
    ["PostGreSQL", "badge-logo-postgreesql.svg"],
    ["Boostrap", "badge-logo-bootstrap.svg"],
    ["JQuery", "badge-logo-jquery.svg"],
    ["Chart", "badge-logo-chartjs.svg"],
    ["DataTables", "badge-logo-datatables.png"],
    ["Apache", "badge-logo-apache.svg"],
  ]);
  let badges = [];
  const listCardProjects = DataProjects.projects.map((project) => {
    badges = project.tecnologys.map((tecnology) => {
      return (
        <li className="badge__item" key={tecnology}>
          <Badge
            badgeClass={tecnology}
            text={tecnology}
            src={"./images/" + pathsImages.get(tecnology)}
          />
        </li>
      );
    });
    return (
      <li className="project__item" key={project.id} tabIndex="0">
        {
          <CardProject
            id={project.id} /*imagens local*/
            src={"./images/" + project.image}
            name={project.name}
            repository={project.repository}
            url={project.url}
          />
        }
        <ul className="badges">
          {badges}
        </ul>
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
      <ul className="projects">{listCardProjects}</ul>
    </Section>
  );
}
