import Badge from "./Badge";

export default function CardProject(props) {
  let pathsImages = new Map([
    ["html", "badge-logo-html.svg"],
    ["css", "badge-logo-css.png"],
    ["JavaScript", "badge-logo-js.png"],
    ["Bem", "badge-logo-bem.svg"],
    ["ReactJS", "badge-logo-react.svg"],
    ["NPM", "badge-logo-npm.svg"],
    ["PHP", "badge-logo-php.svg"],
    ["PostGreSQL", "badge-logo-postgreesql.svg"],
    ["Boostrap", "badge-logo-bootstrap.svg"],
    ["JQuery", "badge-logo-jquery.svg"],
    ["Chart", "badge-logo-chartjs.svg"],
    ["DataTables", "badge-logo-datatables.png"],
    ["Apache", "badge-logo-apache.svg"],
  ]);
  let badges = props.tecnologys.map((tecnology) => {
    return (
      <li className="badge__item" key={tecnology}>
        <Badge
          badgeClass={tecnology}
          text={tecnology}
          src={"./images/" + pathsImages.get(tecnology)}
        />
      </li>
    );
  });
  return (
    <div className="project__card" id={props.id}>
      <div className="project__thumbnail">
        <img src={props.src} alt={`Project ${props.name}`} />
      </div>
      <ul className="badges">{badges}</ul>
      <div className="project__preview-datas">
        <h3 className="project__title">{props.name}</h3>
        <div className="project__links">
          <a
            href={props.repository}
            target="_blank"
            rel="noreferrer"
            className="project__link project__link-repository"
          >
            Repositório
          </a>
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="project__link project__link-liveresult"
          >
            Visualizar
          </a>
        </div>
      </div>
    </div>
  );
}
