import Section from "./Section";
import DataProjects from "../projects.json";
import CardProject from "./CardProject";
import "./SectionProjects.css";
import Badge from "./Badge";
import { useState } from "react";

export default function SectionProjects() {
  const [btnIsValid, setBtnIsValid] = useState(true);
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
  //começar a carregar dos projetos mais recentes para os mais antigos
  //reordenando os objetos
  const listCardProjects = DataProjects.projects
    .sort((a, b) => b.id - a.id)
    .map((project) => {
      //badges project
      badges = project.tecnologys.map((tecnology) => {
        return (
          <li className="badge__item" key={tecnology} aria-label={"Tecnologia " + tecnology}>
            <Badge
              badgeClass={tecnology}
              text={tecnology}
              src={"./images/" + pathsImages.get(tecnology)}
            />
          </li>
        );
      });
      //item project
      return (
        <li
          className="project__item"
          key={project.id}
          tabIndex="0"
          aria-label={
            "Projeto " + project.name + " Implementado com as tecnologias " + project.tecnologys.join(",")
          }
        >
          {
            <CardProject
              /*id={project.id}*/ /*imagens local*/
              src={"./images/" + project.image}
              name={project.name}
              repository={project.repository}
              url={project.url}
            />
          }
          <ul className="badges" aria-label={"Lista de Tecnologias Que Foram usadas na implementação do Projeto " + project.name + " foram " + project.tecnologys.join(",")}>{badges}</ul>
        </li>
      );
    });

  //obtem os 3 primeiros cards de projeto iniciais
  const [listProjectsView, setListProjectView] = useState(
    listCardProjects.slice(0, 3)
  );

  function handleButtons(event) {
    let startIndex, endCurrentIndex, endIndex;
    if (listProjectsView.length - 1 === listCardProjects.length - 1) {
      //desativa button para não carregar mais
      setBtnIsValid(false);
    }else{
      startIndex = listProjectsView.length;
      endCurrentIndex = listProjectsView.length - 1 + 3;
      endIndex =
        endCurrentIndex < listCardProjects.length - 1
          ? endCurrentIndex
          : listCardProjects.length -
            1 -
            (listProjectsView.length - 1) +
            (listProjectsView.length - 1);
      if (event.target.classList.contains("button__more")) {
        setListProjectView([
          ...listProjectsView,
          ...listCardProjects.slice(startIndex, endIndex + 1),
        ]);
      }

      if(event.target.classList.contains("button__all")) {
        setListProjectView([...listCardProjects]);
        //desativa button para não carregar mais
        setBtnIsValid(false);
      }
    }
    
  }

  return (
    <Section nameSection="projects">
      <h2 className="section__heading-2">Projetos</h2>
      <p className="section__description">
        Portefólio, com projetos desenvolvidos para fins de prática em
        determinadas tecnologias. Cada card de projeto possui um link para
        visualização do projeto e um link para o repositório do projeto com a
        sua respectiva implementação.
      </p>
      <ul className="projects" aria-live="polite" aria-atomic="true" aria-label="Lista Projetos Concluidos">{listProjectsView}</ul>
      <div className="buttons__load">
        <button
          className="button button__more"
          type="button"
          value="Carregar Mais"
          onClick={(event) => handleButtons(event)}
          disabled={btnIsValid ? "" : "disabled"}
          aria-label="Carregar Mais Projetos"
        >
          Carregar Mais
        </button>
        <button
          className="button button__all"
          type="button"
          value="Carregar Tudo"
          onClick={(event) => handleButtons(event)}
          disabled={btnIsValid ? "" : "disabled"}
          aria-label="Carregar Todos Projetos"
        >
          Carregar Tudo
        </button>
      </div>
    </Section>
  );
}
