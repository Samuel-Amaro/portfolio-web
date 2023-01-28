import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./workflow.css";
import React from "react";

type PropsWorkflow = {
  children: React.ReactNode
}

export default function Workflow({children}: PropsWorkflow) {
    return (
      <p className="workflow__text">
        <FontAwesomeIcon icon={faCheck} />
        {children}
      </p>
    );
}