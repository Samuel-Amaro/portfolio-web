import "./ProjectLinks.css";

export default function ProjectLinks(props) {
    return (
      <div className="Project-Links">
        <a
          href={props.repository}
          target="_blank"
          rel="noreferrer"
          className="project-links__Link project-links__link-repository"
          aria-label="Link para Visualizar Repositorio Do Projeto"
        >
          Visualizar Código
        </a>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="project-links__Link project-links__link-liveresult"
          aria-label="Link para visualizar Projeto ao Vivo"
        >
          Visualizar Projeto
        </a>
      </div>
    );
}