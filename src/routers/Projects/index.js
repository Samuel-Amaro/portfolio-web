import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DataProjects from "../../data/projects.json";
import CardProject from "../../components/Projects/Card";
import ProjectContent from "../../components/Projects/Content";
import ProjectLinks from "../../components/Projects/Links";
import { useState } from "react";

export default function Index() {

  const optionsSelect = ["React", "HTML-CSS-JS Vanilla", "PHP", "JAVA"];
  const[isSelectOpen, setIsSelectOpen] = useState(false);
  const[optionSelected, setOptionSelected] = useState({option: "Filtre Por Tecnologias", id: ""});

  function handleSelectIsOpen(event) {
    setIsSelectOpen(!isSelectOpen);
  }

  function handleOptionSelected(event) {
    setOptionSelected({option: event.target.dataset.value, id: event.target.id});
  }

  //TODO: ADD ACESSIBILIDADE DE TECLADO E GERENCIAMENTO DE FOCO, NO WIDGET SELECT
  //TODO: ADD ESTILOS NESTA PÁGINA DE PROJETOS


  return (
    <>
      <header className="header">
        <Link
          to="/"
          target="_self"
          rel="next"
          title="Retornar Página Home"
          aria-label="Retornar Página Home"
        >
          <FontAwesomeIcon icon={faHouse} className="header__icon" />
        </Link>
        <h2 className="header__title">
          <FontAwesomeIcon icon={faCode} /> Projetos
        </h2>
      </header>
      <form
        className="formsearch"
        aria-label="Formulário para pesquisa e filtragem de projetos"
      >
        <div className="formsearch__group">
          <input
            type="search"
            name="search"
            aria-label="Entre com o nome de um projeto para pesquisa"
            title="Entre com o nome de um projeto para pesquisa"
            className="formsearch__input"
            placeholder="Pesquise um projeto..."
          />
          <div className="formsearch__wrapper-select">
            <label id="label-select" className="formsearch__label">
              Filtrar por Tecnologias
            </label>
            <div
              className={
                isSelectOpen
                  ? "formsearch__combo formsearch__combo--open"
                  : "formsearch__combo"
              }
              onPointerDown={(event) => {
                handleSelectIsOpen(event);
              }}
            >
              <div
                className="formsearch__combo-input"
                id="combo1"
                aria-expanded={isSelectOpen}
                tabIndex="0"
                aria-controls="listbox1"
                role="combobox"
                aria-haspopup="listbox"
                aria-labelledby="label-select"
                aria-activedescendant={isSelectOpen ? optionSelected.id : ""}
              >
                {optionSelected.option}
              </div>
              <div
                className="formsearch__combo-menu"
                role="listbox"
                id="listbox1"
                aria-labelledby="label-select"
                tabIndex="-1"
              >
                {
                  optionsSelect.map((o, index) => {
                    return (
                      <div
                        key={index}
                        role="option"
                        id={`combo1-${index}`}
                        className={
                          o.toLowerCase() === optionSelected.option.toLowerCase()
                            ? "formsearch__combo-option formsearch__combo-option--selected"
                            : "formsearch__combo-option"
                        }
                        aria-selected={
                          o.toLowerCase() === optionSelected.option.toLowerCase()
                            ? "true"
                            : "false"
                        }
                        onPointerDown={(event) => {
                          handleOptionSelected(event);
                        }}
                        data-value={o.toLowerCase()}
                      >
                        {o}
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </form>
      <ul className="listprojects" aria-label="Lista de projetos">
        {DataProjects.projects
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
                    <p className="listprojects__description">
                      {project.description}
                    </p>
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
    </>
  );
}
