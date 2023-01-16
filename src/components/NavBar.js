import "./NavBar.css";
import profile from "../assets/images/profile.jfif";
import Link from "./Link";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import {faSun, faMoon} from "@fortawesome/free-regular-svg-icons"

export default function NavBar(props) {
  const [btnIsPressed, setBtnIsPressed] = useState(false);
  const refSections = [
    props.refSectionAbout,
    props.refSectionExperience,
    props.refSectionEducation,
    props.refSectionSkills,
    props.refSectionInteresses,
    props.refSectionProjects,
  ];
  const [menuItemActiveScroll, setMenuItemActiveScroll] = useState("about");

  function hadleBtn(event) {
    setBtnIsPressed((value) => {
      return !value;
    });
  }

  function handleBtnKey(event) {
    if (event.code === "Enter") {
      setBtnIsPressed(!btnIsPressed);
    }
  }

  function toggleStatus(event) {
    let state = '';
    if(event.currentTarget.getAttribute("aria-checked") === 'true') {
     state = 'false'; 
    }else{
      state = 'true';
    }
    event.currentTarget.setAttribute("aria-checked", state);
    
  }

  window.addEventListener("scroll", onActiveItemMenuScroll);

  function onActiveItemMenuScroll(event) {
    refSections.forEach((refSection) => {
      if (window.pageYOffset >= refSection.current.offsetTop) {
        setMenuItemActiveScroll(refSection.current.id);
      }
    });
  }

  return (
    <aside className="main__nav-bar">
      <div className="main__data-profile">
        <span className="professional-position">Samuel Amaro</span>
        <div className="main__profile-img">
          <img src={profile} alt="Perfil Samuel Amaro" />
        </div>
      </div>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div
            className="switch"
            role="switch"
            aria-checked={theme === "light" ? false : true}
            onPointerDown={(event) => {
              toggleStatus(event);
              toggleTheme(event.currentTarget.getAttribute("aria-checked") === 'true' ? "dark" : "light");
            }}
            aria-label="Alternador de esquema de cores desde site"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                toggleStatus(event);
                toggleTheme(
                  event.currentTarget.getAttribute("aria-checked") === "true"
                    ? "dark"
                    : "light"
                );
              }
            }}
            tabIndex="0"
          >
            <div className="switch__icons">
              <span className="switch__icon">
                <FontAwesomeIcon icon={faMoon} className="icon" />
              </span>
              <span className="switch__icon">
                <FontAwesomeIcon icon={faSun} className="icon" />
              </span>
            </div>
            <span
              className="switch-controler"
              aria-label="Switch Controlador para alternar temas"
              title="Controlador esquema de cores usado neste site"
              tabIndex="0"
            ></span>
          </div>
        )}
      </ThemeContext.Consumer>
      <button
        type="button"
        title="Botão Menu, Pode ser acionado com Mouse ou Key Enter"
        className="main__button-menu"
        aria-expanded={btnIsPressed ? "true" : "false"}
        onPointerDown={(event) => hadleBtn(event)}
        aria-label="Botão Mostrar/Ocultar Links de navegação"
        onKeyDown={(event) => handleBtnKey(event)}
      >
        <FontAwesomeIcon icon={faBars} className="button-menu__icon" />
      </button>
      <nav className={btnIsPressed ? "nav nav_show" : "nav nav_hidden"}>
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
              text="sobre"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="about"
            />
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Experiencia"
          >
            <Link
              href="#experience"
              label="Link de Menu para section Experiencia"
              text="experiência"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="experience"
            />
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Educação"
          >
            <Link
              href="#education"
              label="Link de Menu para section Educação"
              text="educação"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="education"
            />
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Skills"
          >
            <Link
              href="#skills"
              label="Link de Menu para section Skills"
              text="skills"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="skills"
            />
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Interesses"
          >
            <Link
              href="#interesses"
              label="Link de Menu para section Interesses"
              text="interesses"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="interesses"
            />
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Projetos"
          >
            <Link
              href="#projects"
              label="Link de Menu para section Projetoso"
              text="projetos"
              menuItemActiveScroll={menuItemActiveScroll}
              nameSectionMenu="projects"
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
