import "./projectlinks.css";
import React from "react";

type PropsLinks = {
  repository: string,
  url: string
};

export default function ProjectLinks({repository, url}: PropsLinks) {
    return (
      <div className="project-links">
        <a
          href={repository}
          target="_blank"
          rel="noreferrer"
          className="project-links__link project-links__link-repository"
          aria-label="Link para Visualizar Repositorio Do Projeto"
          title="Link para Visualizar Repositório Do Projeto"
        >
          Visualizar Código
        </a>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="project-links__link project-links__link-liveresult"
          aria-label="Link para visualizar Projeto ao Vivo"
          title="Link para visualizar Projeto ao Vivo"
        >
          Visualizar Projeto
        </a>
      </div>
    );
}