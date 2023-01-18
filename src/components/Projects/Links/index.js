import "./projectlinks.css";

export default function ProjectLinks(props) {
    return (
      <div className="project-links">
        <a
          href={props.repository}
          target="_blank"
          rel="noreferrer"
          className="project-links__link project-links__link-repository"
          aria-label="Link para Visualizar Repositorio Do Projeto"
          title="Link para Visualizar Repositório Do Projeto"
        >
          Visualizar Código
        </a>
        <a
          href={props.url}
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