import { useRouteError, NavLink } from "react-router-dom";
import Heading2 from "../../components/Headings/Heading2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "./error.css";

export default function Index() {
    const error = useRouteError();

    return (
      <div className="error">
        <Heading2 className="error__title"><FontAwesomeIcon icon={faTriangleExclamation} className="error__icon"/> Oops!</Heading2>
        <p className="error__description">
          Desculpe, ocorreu um erro inesperado.
        </p>
        <p className="error__message">
          <i>{error.statusText || error.message}</i>
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