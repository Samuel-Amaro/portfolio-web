import Section from "../Section";
import DataProjects from "../../data/projects.json";
import CardProject from "./Card";
import "./projects.css";
import { useState } from "react";
import ProjectContent from "./Content";
import ProjectLinks from "./Links";
import Heading2 from "../Headings/Heading2";

export default function Projects(props) {
  const [btnIsValid, setBtnIsValid] = useState(true);
  //começar a carregar dos projetos mais recentes para os mais antigos
  //reordenando os objetos
  const listCardProjects = DataProjects.projects
    .sort((a, b) => b.id - a.id)
    .map((project) => {
      //item project
      return (
        <li
          className="projects__item"
          key={project.id}
          tabIndex="0"
          aria-label={
            "Projeto " +
            project.name +
            " Implementado com as tecnologias " +
            project.tecnologys.join(",")
          }
        >
          {
            <>
              <CardProject
                sourceImage={`${process.env.PUBLIC_URL}/images/${project.image}`}
                name={project.name}
                repository={project.repository}
                url={project.url}
              />
              <ProjectContent
                title={project.name}
                tecnologys={project.tecnologys}
              />
              <ProjectLinks url={project.url} repository={project.repository} />
            </>
          }
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
    } else {
      startIndex = listProjectsView.length;
      endCurrentIndex = listProjectsView.length - 1 + 3;
      endIndex =
        endCurrentIndex < listCardProjects.length - 1
          ? endCurrentIndex
          : listCardProjects.length -
            1 -
            (listProjectsView.length - 1) +
            (listProjectsView.length - 1);
      if (event.target.classList.contains("projects__button--more")) {
        setListProjectView([
          ...listProjectsView,
          ...listCardProjects.slice(startIndex, endIndex + 1),
        ]);
      }

      if (event.target.classList.contains("projects__button--all")) {
        setListProjectView([...listCardProjects]);
        //desativa button para não carregar mais
        setBtnIsValid(false);
      }
    }
  }

  return (
    <Section nameSection="projects" refSection={props.refSectionProjects}>
      <div className="projects">
        {/*<h2 className="section__heading-2">Projetos</h2>*/}
        <Heading2>Projetos</Heading2>
        <p className="projects__description">
          Portefólio, com projetos desenvolvidos para fins de prática em
          determinadas tecnologias. Cada card de projeto possui um link para
          visualização do projeto e um link para o repositório do projeto com a
          sua respectiva implementação.
        </p>
        <ul
          className="projects__list"
          aria-live="polite"
          aria-atomic="true"
          aria-label="Lista Projetos Concluidos"
        >
          {listProjectsView}
        </ul>
        <div className="projects__buttons">
          <button
            className="projects__button projects__button--more"
            type="button"
            value="Carregar Mais"
            onClick={(event) => handleButtons(event)}
            disabled={btnIsValid ? "" : "disabled"}
            aria-label="Carregar Mais Projetos"
            title={
              btnIsValid
                ? "Carregar Mais Projetos"
                : "Todos Projetos ja estão carregados"
            }
          >
            Carregar Mais
          </button>
          <button
            className="projects__button projects__button--all"
            type="button"
            value="Carregar Tudo"
            onClick={(event) => handleButtons(event)}
            disabled={btnIsValid ? "" : "disabled"}
            aria-label="Carregar Todos Projetos"
            title={
              btnIsValid
                ? "Carregar Todos Projetos"
                : "Todos Projetos ja estão carregados"
            }
          >
            Carregar Tudo
          </button>
        </div>
      </div>
    </Section>
  );
}
