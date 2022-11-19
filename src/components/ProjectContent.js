import "./ProjectContent.css";

export default function ProjectContent(props) {
    return (
      <div className="Project-Content">
        <h3 className="project-content__Title">{props.title}</h3>
        <ul className="project-content__List-Tecnologys">
            {props.tecnologys.map((tecnology, index) => {
                return <li className="project-content__Item-Tecnology" key={index}>
                    {tecnology}
                </li>
            })}
        </ul>
      </div>
    );
}