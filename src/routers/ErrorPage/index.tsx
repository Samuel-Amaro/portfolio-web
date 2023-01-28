import { useRouteError, NavLink, isRouteErrorResponse } from "react-router-dom";
import Heading from "../../components/Headings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "./error.css";
import React from "react";

export default function Index() {
    const error = useRouteError();

    return (
      <div className="error">
        <Heading level={2} className="error__title"><FontAwesomeIcon icon={faTriangleExclamation} className="error__icon"/> Oops!</Heading>
        <p className="error__description">
          Desculpe, ocorreu um erro inesperado.
        </p>
        <p className="error__message">
          {
            isRouteErrorResponse(error) ? <i>{error.statusText || error.statusText}</i> : "Oops"
          }
        </p>
        <NavLink
          to="/"
          target="_self"
          rel="next"
          aria-label="Retornar pagina Home"
          title="Retornar pagina Home"
          className="error__link"
        >
          Home
        </NavLink>
      </div>
    );
}   