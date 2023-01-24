import Section from "../Section";
import DataProjects from "../../data/projects.json";
import CardProject from "./Card";
import "./projects.css";
import { useEffect, useRef, useState } from "react";
import ProjectContent from "./Content";
import ProjectLinks from "./Links";
import Heading2 from "../Headings/Heading2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//TODO: ADD ESTILO DO LINK VER TUDO APOS OS PROJETOS
//TODO: ARRUMAR FORMA DE DELPOY PARA QUE POSSAMOS USAR REACT-ROUTER BROWSER ROUTER NO GITHUB PAGES

export default function Projects(props) {
  //const refElemListProjects = useRef(0);

  //começar a carregar dos projetos mais recentes para os mais antigos
  //reordenando os objetos
  /*const listCardProjects = DataProjects.projects
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
    */

  //obtem os 3 primeiros cards de projeto iniciais
  /*const [listProjectsView, setListProjectView] = useState(
    listCardProjects.slice(0, 3)
  );*/

  /*function loadMore(startIndex, endIndex) {
    if (listProjectsView.length < listCardProjects.length) {
      setListProjectView([
        ...listProjectsView,
        ...listCardProjects.slice(startIndex, endIndex),
      ]);
    }
  }

  //TODO: SCROLL NÃO ESTA MOVENDO CERTO, JUNTO COM A ADIÇÃO DE NOVOS PROJETOS NO CONTEINER, ARRUMAR
  function moveScroll() {
    console.log(refElemListProjects.current.scrollHeight);
    refElemListProjects.current.scrollBy(
      0,
      refElemListProjects.current.scrollHeight
    );
  }

  function loadMinus(startIndex, endIndex) {
    setListProjectView([...listCardProjects.slice(startIndex, endIndex)]);
  }

  useEffect(() => {
    moveScroll();
  }, []);
  */

  /*function handleButtons(event) {
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
      if (endIndex >= 2) {
        loadMinus(startIndex, endIndex);
      }
    } else {
      //carrega todos projetos
      setListProjectView([...listCardProjects.slice()]);
    }

    //!CODE ANTIGO NÃO USAR ESTA PARTE 
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
    //!FIM DO CODE ANTIGO
  }*/

  //a cada projeto add move o scroll
  /*useEffect(() => {
    if (document.querySelector(".projects__list").scrollTop !== 0) {
      console.log(
        "ScrollHeight: " +
          document.querySelector(".projects__list").scrollHeight
      );
      console.log(
        "ScrollTop: " + document.querySelector(".projects__list").scrollTop
      );
      console.log(
        "offSetHeight: " +
          document.querySelector(".projects__list").offsetHeight
      );
      console.log(
        refElemListProjects.current.scrollHeight +
          refElemListProjects.current.scrollTop
      );
      document.querySelector(".projects__list").scrollTop =
        document.querySelector(".projects__list").scrollHeight;
      console.log(refElemListProjects.current.scrollTop);
    }
  });
  */

  return (
    <Section
      nameSection="projects"
      refSection={props.refSectionProjects}
      className="section__projects"
    >
      <div className="projects">
        <Heading2>Projetos</Heading2>
        <p className="projects__description">
          Portefólio, com projetos desenvolvidos para fins de prática em
          determinadas tecnologias. Cada card de projeto possui um link para
          visualização do projeto e um link para o repositório do projeto com a
          sua respectiva implementação.
        </p>
        <ul
          /*ref={refElemListProjects}*/
          className="projects__list"
          aria-live="polite"
          aria-atomic="true"
          aria-label="Lista Projetos Concluidos"
        >
          {DataProjects.projects
            .sort((a, b) => b.id - a.id)
            .filter((project) => {
              return project.id > 27;
            })
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
                      <ProjectLinks
                        url={project.url}
                        repository={project.repository}
                      />
                    </>
                  }
                </li>
              );
            })}
        </ul>
        {/*<div className="projects__buttons">
          <button
            className="projects__button projects__button--more"
            type="button"
            onPointerDown={(event) => {
              handleButtons(event);
              moveScroll();
            }}
            aria-label="Carregar Mais Projetos"
            title="Carregar Mais Projetos"
            data-name="btn-more"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handleButtons(event);
                moveScroll();
              }
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            className="projects__button projects__button--minus"
            type="button"
            onPointerDown={(event) => handleButtons(event)}
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
            onPointerDown={(event) => {
              handleButtons(event);
              moveScroll();
            }}
            aria-label="Carregar Todos Projetos"
            title="Carregar Todos Projetos"
            data-name="btn-all"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handleButtons(event);
                moveScroll();
              }
            }}
          >
            All
          </button>
          <Link
            to="/projects"
            title="Ir para página projetos"
            aria-label="Ir para página projetos"
            target="_self"
            rel="next"
            className="projects__button"
          >
            Ver Tudo <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        */}
        <Link
          to="/projects"
          title="Ir para página projetos"
          aria-label="Ir para página projetos"
          target="_self"
          rel="next"
          className="projects__button"
        >
          Ver Tudo{" "}
          <span className="projects__wrapper-icon">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="projects__icon-button"
            />
          </span>
        </Link>
      </div>
    </Section>
  );
}
