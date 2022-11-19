import "./CardProject.css";

export default function CardProject(props) {
  return (
    <div className="project__card">
      <div className="project__preview-datas">
        {/*<h3 className="project__title">{props.name}</h3>*/}
        <div className="project__links">
          <a
            href={props.repository}
            target="_blank"
            rel="noreferrer"
            className="project__link project__link-repository"
            aria-label="Link para Visualizar Repositorio Do Projeto"
          >
            Visualizar Código
          </a>
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="project__link project__link-liveresult"
            aria-label="Link para visualizar Projeto ao Vivo"
          >
            Visualizar Projeto
          </a>
        </div>
      </div>
      <div className="project__thumbnail">
        <img
          src={props.sourceImage}
          alt={`Project ${props.name}`}
          className="thumbnail-ilustration"
        />
      </div>
    </div>
  );
}
