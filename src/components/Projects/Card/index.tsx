import React from "react";
import "./cardproject.css";

type PropsCard = {
  description: string,
  repository: string,
  url: string,
  sourceImage: string,
  name: string
};

export default function CardProject({description, repository, url, sourceImage, name}: PropsCard) {
  return (
    <div className="cardproj" title={description}>
      <div className="cardproj__preview-datas">
        <div className="cardproj__links" title={description}>
          <a
            href={repository}
            target="_blank"
            rel="noreferrer"
            className="cardproj__link cardproj__link-repository"
            aria-label="Link para Visualizar Repositório Do Projeto"
            title="Link para Visualizar Repositório Do Projeto"
          >
            Visualizar Código
          </a>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="cardproj__link cardproj__link-liveresult"
            aria-label="Link para visualizar Projeto ao Vivo"
            title="Link para visualizar Projeto ao Vivo"
          >
            Visualizar Projeto
          </a>
        </div>
      </div>
      <div className="cardproj__thumbnail">
        <img
          src={sourceImage}
          alt={`Project ${name}`}
          className="cardproj__ilustration"
        />
      </div>
    </div>
  );
}
