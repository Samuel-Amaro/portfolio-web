import "./projectcontent.css";

export default function ProjectContent(props) {
    return (
      <div className="project-pontent">
        <h3 className="project-content__title">{props.title}</h3>
        <ul className="project-content__list-tecnologys">
            {props.tecnologys.map((tecnology, index) => {
                return <li className="project-content__item-tecnology" key={index}>
                    {tecnology}
                </li>
            })}
        </ul>
      </div>
    );
}