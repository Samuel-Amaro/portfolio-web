import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DataProjects from "../../data/projects.json";
import CardProject from "../../components/Projects/Card";
import ProjectContent from "../../components/Projects/Content";
import ProjectLinks from "../../components/Projects/Links";
import Heading2 from "../../components/Headings/Heading2";
import Select from "../../components/Select";
import { useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useTheme from "../../hooks/useTheme";
import "./index.css";

export default function Index() {
  const optionsSelect = [
    "All",
    "React.JS",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "JAVA",
    "Typescript",
    "Bem",
  ];

  const [projects, setProjects] = useState(DataProjects.projects);
  const [search, setSearch] = useState("");

  function filterProjects(filter = { filter: "All", by: "tecnologys" }) {
    setProjects(
      DataProjects.projects
        .sort((a, b) => b.id - a.id)
        .filter((project) => {
          if (filter.by === "tecnologys") {
            if (filter.filter.toLowerCase() === "all") {
              return true;
            }
            return project.tecnologys
              .map((tecnologys) => {
                return tecnologys.toLowerCase();
              })
              .includes(filter.filter.toLowerCase());
          } else if (filter.by === "name") {
            if (project.name.toLowerCase().match(filter.filter.toLowerCase())) {
              return true;
            }
          } else {
            return true;
          }
        })
    );
  }

  function handleChangeInput(event) {
    if (event.target.value !== "") {
      filterProjects({ filter: event.target.value, by: "name" });
    } else {
      filterProjects({ filter: "", by: "" });
    }
    setSearch(event.target.value);
  }

  const [theme, toggleTheme, stateContext] = useTheme();

  useEffect(() => {
    //restaura scroll posição original
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeContext.Provider value={stateContext}>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <>
            <header className="header">
              <Link
                to="/"
                target="_self"
                rel="next"
                title="Retornar Página Home"
                aria-label="Retornar Página Home"
                className="header__link-home"
              >
                <FontAwesomeIcon icon={faHouse} className="header__icon" />
              </Link>
              <Heading2 className="header__title">
                <FontAwesomeIcon icon={faCode} /> Projetos
              </Heading2>
            </header>
            <form
              className="formsearch"
              aria-label="Formulário para pesquisa e filtragem de projetos"
            >
              <div className="formsearch__group">
                <div className="formsearch__wrapper-search">
                  <label className="formsearch__label" htmlFor="search">
                    Pesquisar por projetos...
                  </label>
                  <div className="formsearch__wrapper-input">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="icon__input"
                    />
                    <input
                      type="search"
                      name="search"
                      title="Entre com o nome de um projeto para pesquisa"
                      className="formsearch__input"
                      placeholder="Pesquise um projeto..."
                      id="search"
                      onChange={(event) => {
                        handleChangeInput(event);
                      }}
                      value={search}
                    />
                  </div>
                </div>
                <div className="formsearch__wrapper-select">
                  <Select
                    optionsSelect={optionsSelect}
                    filterProjects={filterProjects}
                  />
                </div>
              </div>
            </form>
            {projects.length > 0 ? (
              <>
                <p
                  className="message__info"
                  aria-label="Lista de projetos"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {projects.length} itens
                </p>
                <ul
                  className="listprojects"
                  aria-label="Lista de projetos"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {projects.map((project) => {
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
                              className="listproject__content"
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
            ) : (
              <p className="message">
                Não foi encontrado projetos com o filtro ou nome fornecido
              </p>
            )}
          </>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}
