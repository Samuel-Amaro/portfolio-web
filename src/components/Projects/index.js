import Section from "../Section";
import DataProjects from "../../data/projects.json";
import CardProject from "./Card";
import "./projects.css";
import { useRef, useState } from "react";
import ProjectContent from "./Content";
import ProjectLinks from "./Links";
import Heading2 from "../Headings/Heading2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Projects(props) {
  //const [btnIsValid, setBtnIsValid] = useState(true);
  //começar a carregar dos projetos mais recentes para os mais antigos
  //reordenando os objetos
  console.log(DataProjects.projects);
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
                description={project.description}
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

  //TODO: ARRUMAR A FORMA COMO CARREGAR E OCULTAR NOVOS PROJETOS USANDO UMA LOGICA SIMPLES E BEM ESCRITA
  //TODO: MOSTRAR UMA MENSAGEM DE QUANDO TODOS PROJETOS ESTIVEREM CARREGADOS, OU NÃO TEM COMO OCULTAR MAIS PROJETOS
  //TODO: LIMITAR O TAMANHO DO CONTAINER, DE PROJECTS

  //obtem os 3 primeiros cards de projeto iniciais
  const [listProjectsView, setListProjectView] = useState(
    listCardProjects.slice(0, 3)
  );

  function loadMore(startIndex, endIndex) {
    if (listProjectsView.length < listCardProjects.length) {
      setListProjectView([
        ...listProjectsView,
        ...listCardProjects.slice(startIndex, endIndex),
      ]);
    }
  }

  function loadMinus(startIndex, endIndex) {
    setListProjectView([...listCardProjects.slice(startIndex, endIndex)]);
  }

  /*function copyArr(startIndex, endIndex, step) {
    for (let i = startIndex; i < endIndex; i += step) {
      setListProjectView([...listProjectsView, listCardProjects[i]]);
    }
  }*/

  function handleButtons(event) {
    let startIndex, endIndex;
    //carrega mais projetos
    if (event.currentTarget.dataset.name.toLowerCase() === "btn-more") {
      startIndex = listProjectsView.length;
      endIndex = startIndex + 3;
      if (endIndex < listCardProjects.length - 1) {
        //posso carregar mais três
        loadMore(startIndex, endIndex);
      } else {
        //posso carregar quantos então?
        let dif = listCardProjects.length - listProjectsView.length;
        if (dif > 0) {
          loadMore(startIndex, listProjectsView.length + dif);
        }
      }
    } else if (event.currentTarget.dataset.name.toLowerCase() === "btn-minus") {
      //carrega menos projetos
      startIndex = 0;
      endIndex = listProjectsView.length - 3;
      //posso diminuir mais três
      if (endIndex > 3) {
        loadMinus(startIndex, endIndex);
      }
    } else {
      //carrega todos projetos
      setListProjectView([...listCardProjects.slice()]);
    }
    /*if (listProjectsView.length - 1 === listCardProjects.length - 1) {
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
    }*/
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
            onPointerDown={(event) => handleButtons(event)}
            /*disabled={btnIsValid ? "" : "disabled"}*/
            aria-label="Carregar Mais Projetos"
            title="Carregar Mais Projetos" /*{
              btnIsValid
                ? "Carregar Mais Projetos"
                : "Todos Projetos ja estão carregados"
            }*/
            data-name="btn-more"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handleButtons(event);
              }
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            className="projects__button projects__button--minus"
            type="button"
            onPointerDown={(event) => handleButtons(event)}
            /*disabled={btnIsValid ? "" : "disabled"}*/
            aria-label="Ocultar Projetos"
            title="Ocultar mais projetos"
            data-name="btn-minus"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handleButtons(event);
              }
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button
            className="projects__button projects__button--all"
            type="button"
            value="Carregar Tudo"
            onPointerDown={(event) => handleButtons(event)}
            /*disabled={btnIsValid ? "" : "disabled"}*/
            aria-label="Carregar Todos Projetos"
            title="Carregar Todos Projetos" /*{
              btnIsValid
                ? "Carregar Todos Projetos"
                : "Todos Projetos ja estão carregados"
            }*/
            data-name="btn-all"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handleButtons(event);
              }
            }}
          >
            All
          </button>
        </div>
      </div>
    </Section>
  );
}
