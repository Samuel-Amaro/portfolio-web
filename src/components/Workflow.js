import iconCheck from "../assets/images/icon-check-solid-gray.svg";
import "./Workflow.css";

export default function Workflow(props) {
    return (
        <p className="workflow__text">
            <img src={iconCheck} width="16" height="16" alt="" className="workflow__icon" aria-hidden="true"/>
            {props.text}
        </p>
    );
}