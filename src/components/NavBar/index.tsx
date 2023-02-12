import "./navbar.css";
import profile from "../../assets/images/profile.jfif";
import Link from "./Link";
import React, { useEffect, useState} from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faFile,
  faUserGraduate,
  faClipboardList,
  faList,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

type PropsNavBar = {
  items: string[];
};

export default function NavBar({ items }: PropsNavBar) {
  const [btnIsPressed, setBtnIsPressed] = useState(false);
  const [menuItemActiveScroll, setMenuItemActiveScroll] = useState("about");
  const themeContext = useThemeContext();

  function toggleStatus(
    event:
      | React.PointerEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>
  ) {
    let state = "";
    if (event.currentTarget.getAttribute("aria-checked") === "true") {
      state = "false";
    } else {
      state = "true";
    }
    event.currentTarget.setAttribute("aria-checked", state);
  }

  function getIcon(item: string) {
    switch (item) {
      case "sobre":
        return faUser;
      case "experiencia":
        return faFile;
      case "educacao":
        return faUserGraduate;
      case "skills":
        return faClipboardList;
      case "interesses":
        return faList;
      case "projects":
        return faCode;
      default:
        throw new Error("Icon não encontrado para o item fornecido");
    }
  }

  function getWord(item: string) {
    switch (item) {
      case "sobre":
        return "Sobre";
      case "experiencia":
        return "experiência";
      case "educacao":
        return "educação";
      case "skills":
        return "Habilidades";
      case "interesses":
        return "interesses";
      case "projects":
        return "Projetos";
      default:
        throw new Error("Icon não encontrado para o item fornecido");
    }
  }

  useEffect(() => {
    //destaca um link automaticamente de acordo com a section visivel na windown
    function onActiveItemMenuScroll() {
      document.querySelectorAll("section").forEach((e) => {
        if (window.pageYOffset >= e.offsetTop) {
          setMenuItemActiveScroll(e.id);
        }
      });
    }

    window.addEventListener("scroll", onActiveItemMenuScroll);

    return () => {
      window.removeEventListener("scroll", onActiveItemMenuScroll);
    };
  }, []);

  return (
    <aside className="navbar">
      <div className="navbar__data-profile">
        <span className="navbar__name">Samuel Amaro</span>
        <div className="navbar__profile-img">
          <img src={profile} alt="Perfil Samuel Amaro" />
        </div>
      </div>
      <div
        className="switch"
        role="switch"
        aria-checked={themeContext.theme === "light" ? false : true}
        onPointerDown={(event) => {
          toggleStatus(event);
          themeContext.setToggleTheme(
            event.currentTarget.getAttribute("aria-checked") === "true"
              ? "dark"
              : "light"
          );
        }}
        aria-label="Alternador de esquema de cores desde site"
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            toggleStatus(event);
            themeContext.setToggleTheme(
              event.currentTarget.getAttribute("aria-checked") === "true"
                ? "dark"
                : "light"
            );
          }
        }}
        tabIndex={0}
      >
        <div className="switch__icons">
          <span className="switch__icon">
            <FontAwesomeIcon icon={faMoon} className="switch__icon" />
          </span>
          <span className="switch__icon">
            <FontAwesomeIcon icon={faSun} className="switch__icon" />
          </span>
        </div>
        <span
          className="switch-controler"
          aria-label="Switch Controlador para alternar temas"
          title="Controlador esquema de cores usado neste site"
          tabIndex={0}
        ></span>
      </div>
      <button
        type="button"
        title="Botão Menu, Pode ser acionado com Mouse ou Key Enter"
        className="navbar__button-menu"
        aria-expanded={btnIsPressed ? "true" : "false"}
        onPointerDown={() => {
          setBtnIsPressed(!btnIsPressed);
        }}
        aria-label="Botão Mostrar/Ocultar Links de navegação"
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            setBtnIsPressed(!btnIsPressed);
          }
        }}
      >
        <FontAwesomeIcon icon={faBars} className="navbar__icon-button" />
      </button>
      <nav className={btnIsPressed ? "nav nav--show" : "nav nav--hidden"}>
        <ul
          className="nav__links"
          role="menu"
          aria-label="Lista de links de Menu de navegação"
        >
          {items.map((item, index) => {
            return (
              <li
                className="nav__item"
                role="menuitem"
                aria-label={`Link pular para seção ${item}`}
                key={index}
              >
                <Link
                  href={`#${item}`}
                  label={`Link de Menu para section ${item}`}
                  menuItemActiveScroll={menuItemActiveScroll}
                  nameSectionMenu={item}
                >
                  <FontAwesomeIcon icon={getIcon(item)} className="nav__icon" />{" "}
                  {getWord(item)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
