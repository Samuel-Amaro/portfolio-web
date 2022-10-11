import "./Skill.css";

export default function Skill(props) {
    return (
        <img src={props.src} alt={props.alt} title={props.title} height={props.height} width={props.width} className="img-skill"
        />
    );
}