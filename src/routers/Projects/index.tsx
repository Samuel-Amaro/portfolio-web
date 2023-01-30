import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHouse,
  faMagnifyingGlass,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DataProjects from "../../data/projects.json";
import CardProject from "../../components/Projects/Card";
import ProjectContent from "../../components/Projects/Content";
import ProjectLinks from "../../components/Projects/Links";
import Heading from "../../components/Headings/";
import Select from "../../components/Select";
import React, { useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useTheme from "../../hooks/useTheme";
import "./index.css";
import { IProjectDatas } from "interface/IProjectDatas.interface";
import ButtonPageUp from "components/ButtonPageUp";

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

  const [projects, setProjects] = useState<IProjectDatas[]>(DataProjects.projects);
  const [search, setSearch] = useState("");
  const [isViewNotificationsNewsProjects, setIsViewNotificationsNewsProjects] = useState(isScrollable(document.documentElement) ? true : false);

  type FilterData = {
    filter: string,
    by: string
  };

  function filterProjects({filter = "All", by = "tecnologys"}: FilterData) {
    setProjects(
      DataProjects.projects
        .sort((a: IProjectDatas, b: IProjectDatas) => b.id - a.id)
        .filter((project: IProjectDatas) => {
          if (by === "tecnologys") {
            if (filter.toLowerCase() === "all") {
              return true;
            }
            return project.tecnologys
              .map((tecnologys) => {
                return tecnologys.toLowerCase();
              })
              .includes(filter.toLowerCase());
          } else if (by === "name") {
            if (project.name.toLowerCase().match(filter.toLowerCase())) {
              return true;
            }
          }
          return by === "" ? true : false;
        })
    );
  }

  function isScrollable(element: Element) {
    return element.clientHeight < element.scrollHeight;
  }

  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    //restaura scroll posição original
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let timeoutID: number;
    if(isScrollable(document.documentElement)) {
      setIsViewNotificationsNewsProjects(true);
      timeoutID = window.setTimeout(() => {
        setIsViewNotificationsNewsProjects(false);
      }, 3000);
    }else{
      setIsViewNotificationsNewsProjects(false);
    }

    return () => {
      clearTimeout(timeoutID);
    };
  }, [projects]);



  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
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
          <Heading level={2} className="header__title">
            <FontAwesomeIcon icon={faCode} /> Projetos
          </Heading>
        </header>
        <form
          className="formsearch"
          aria-label="Formulário para pesquisa e filtragem de projetos"
          onSubmit={(event) => {
            event.preventDefault();
          }}
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
                    //event.preventDefault();
                    if (event.target.value !== "") {
                      filterProjects({ filter: event.target.value, by: "name" });
                    } else {
                      filterProjects({ filter: "", by: "" });
                    }
                    setSearch(event.target.value);
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
        {isViewNotificationsNewsProjects && <p className="notification" role="alert"><FontAwesomeIcon icon={faBell} className="notification__icon fa-shake"/> Carregou {projects.length} projetos</p>}
        {projects.length > 0 ? (
          <>
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
                    tabIndex={0}
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
        <ButtonPageUp />
      </>
    </ThemeContext.Provider>
  );
}
