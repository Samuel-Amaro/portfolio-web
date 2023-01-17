import "./cardproject.css";

export default function CardProject(props) {
  return (
    <div className="cardproj">
      <div className="cardproj__preview-datas">
        {/*<h3 className="project__title">{props.name}</h3>*/}
        <div className="cardproj__links">
          <a
            href={props.repository}
            target="_blank"
            rel="noreferrer"
            className="cardproj__link cardproj__link-repository"
            aria-label="Link para Visualizar Repositorio Do Projeto"
          >
            Visualizar Código
          </a>
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="cardproj__link cardproj__link-liveresult"
            aria-label="Link para visualizar Projeto ao Vivo"
          >
            Visualizar Projeto
          </a>
        </div>
      </div>
      <div className="cardproj__thumbnail">
        <img
          src={props.sourceImage}
          alt={`Project ${props.name}`}
          className="cardproj__ilustration"
        />
      </div>
    </div>
  );
}
