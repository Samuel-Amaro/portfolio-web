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
import "./index.css";
import { useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useTheme from "../../hooks/useTheme";

export default function Index() {
  const optionsSelect = [
    "React",
    "HTML-CSS-JS Vanilla",
    "PHP",
    "JAVA",
    "JavaScript",
    "CSS",
    "Typescript",
  ];

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
                    />
                  </div>
                </div>
                <div className="formsearch__wrapper-select">
                  <Select optionsSelect={optionsSelect} />
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
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}
