import "./navbar.css";
import profile from "../../assets/images/profile.jfif";
import Link from "./Link";
import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
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
  refSections: React.RefObject<HTMLElement>[],
};

export default function NavBar({refSections}: PropsNavBar) {
  const [btnIsPressed, setBtnIsPressed] = useState(false);
  /*const refSections = [
    props.refSectionAbout,
    props.refSectionExperience,
    props.refSectionEducation,
    props.refSectionSkills,
    props.refSectionInteresses,
    props.refSectionProjects,
  ];*/
  const [menuItemActiveScroll, setMenuItemActiveScroll] = useState("about");
  const themeContext = useContext(ThemeContext);

  function toggleStatus(event: React.PointerEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) {
    let state = "";
    if (event.currentTarget.getAttribute("aria-checked") === "true") {
      state = "false";
    } else {
      state = "true";
    }
    event.currentTarget.setAttribute("aria-checked", state);
  }

  useEffect(() => {
    function onActiveItemMenuScroll() {
      refSections.forEach((refSection) => {
        const section = refSection.current as HTMLElement;
        if (window.pageYOffset >= section.offsetTop) {
          setMenuItemActiveScroll(section.id);
        }
      });
    }
    
    window.addEventListener("scroll", onActiveItemMenuScroll);

    return () => {
      window.removeEventListener("scroll", onActiveItemMenuScroll);
    };
  }, [refSections]);

  

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
          themeContext.toggleTheme(
            event.currentTarget.getAttribute("aria-checked") === "true"
              ? "dark"
              : "light"
          );
        }}
        aria-label="Alternador de esquema de cores desde site"
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            toggleStatus(event);
            themeContext.toggleTheme(
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
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Sobre"
          >
            <Link
              href="#about"
              label="Link de Menu para section Sobre"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="about"
            >
              <FontAwesomeIcon icon={faUser} className="nav__icon" /> sobre
            </Link>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Experiencia"
          >
            <Link
              href="#experience"
              label="Link de Menu para section Experiencia"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="experience"
            >
              <FontAwesomeIcon icon={faFile} className="nav__icon" />{" "}
              experiência
            </Link>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Educação"
          >
            <Link
              href="#education"
              label="Link de Menu para section Educação"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="education"
            >
              <FontAwesomeIcon icon={faUserGraduate} className="nav__icon" />{" "}
              educação
            </Link>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Skills"
          >
            <Link
              href="#skills"
              label="Link de Menu para section Skills"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="skills"
            >
              <FontAwesomeIcon icon={faClipboardList} className="nav__icon" />{" "}
              skills
            </Link>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Interesses"
          >
            <Link
              href="#interesses"
              label="Link de Menu para section Interesses"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="interesses"
            >
              <FontAwesomeIcon icon={faList} className="nav__icon" />
              interesses
            </Link>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Projetos"
          >
            <Link
              href="#projects"
              label="Link de Menu para section Projetoso"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="projects"
            >
              <FontAwesomeIcon icon={faCode} className="nav__icon" />
              projetos
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
