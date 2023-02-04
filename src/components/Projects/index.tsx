import DataProjects from "../../data/projects.json";
import CardProject from "./Card";
import React from "react";
import ProjectContent from "./Content";
import ProjectLinks from "./Links";
import Heading2 from "../Headings/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./projects.css";
import { IProjectDatas } from "../../interface/IProjectDatas.interface";

export default function Projects() {
  return (
    <div className="projects">
      <Heading2 level={2}>Projetos</Heading2>
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
        {DataProjects.projects
          .sort((a: IProjectDatas, b: IProjectDatas) => b.id - a.id)
          .filter((project: IProjectDatas) => {
            return project.tecnologys.map((t) => t.toLowerCase()).includes("react.js");
          })
          .map((project: IProjectDatas) => {
            //item project
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
  );
}
