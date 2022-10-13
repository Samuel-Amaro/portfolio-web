import "./Workflow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Workflow(props) {
    return (
      <p className="workflow__text">
        {/*<img src={iconCheck} width="16" height="16" alt="" className="workflow__icon" aria-hidden="true"/>
            {props.text}*/}
        <FontAwesomeIcon icon={faCheck} />
        {props.text}
      </p>
    );
}