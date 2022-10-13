import "./NavBar.css";
import profile from "../assets/images/profile.jfif";
import iconHamburguer from "../assets/images/icon-hamburguer.svg";
import {useState} from "react";

export default function NavBar(props) {
  const [btnIsPressed, setBtnIsPressed] = useState(false);

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

  function handleChangeBtnToggle(event) {
    props.onSetOptionTheme(event.target.value);
    localStorage.setItem("themeOption", event.target.value);
  }

  return (
    <aside className="main__nav-bar">
      <div className="main__data-profile">
        <span class="professional-position">Samuel Amaro</span>
        <div class="main__profile-img">
          <img src={profile} alt="Perfil Samuel Amaro" />
        </div>
      </div>
      <div class="switch-theme">
        <input
          type="radio"
          id="theme-light"
          name="option-theme"
          aria-label="Option theme light"
          value="light"
          class="option-theme"
          tabindex="0"
          title="Option Theme light"
          onChange={(event) => handleChangeBtnToggle(event)}
          checked={props.optionThemeCurrent === "light" ? true : false}
        />
        <input
          type="radio"
          id="theme-dark"
          name="option-theme"
          aria-label="Option theme dark"
          value="dark"
          class="option-theme"
          tabindex="0"
          title="Option Theme Dark"
          onChange={(event) => handleChangeBtnToggle(event)}
          checked={props.optionThemeCurrent === "dark" ? true : false}
        />
        <button
          type="button"
          class="switch-controler"
          aria-pressed="mixed"
          aria-label="Switch Controller to toggle themes"
          title="Toggle Theme"
        ></button>
      </div>
      <button
        type="button"
        title="Botão Menu, Pode ser acionado com Mouse ou Key Enter"
        class="main__button-menu"
        tabindex="0"
        aria-expanded={btnIsPressed ? "true" : "false"}
        onPointerDown={(event) => hadleBtn(event)}
        aria-label="Botão Mostrar/Ocultar Links de navegação"
        onKeyDown={(event) => handleBtnKey(event)}
      >
        <img
          class="button-menu__icon"
          src={iconHamburguer}
          alt="icon menu"
          width="25"
          height="25"
        />
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
            <a
              className="nav__link"
              href="#about"
              target="_self"
              rel="next"
              aria-label="Link de Menu para section Sobre"
            >
              sobre
            </a>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Experiencia"
          >
            <a
              className="nav__link"
              href="#experience"
              target="_self"
              rel="next"
              aria-label="Link de Menu para section Experiencia"
            >
              experiência
            </a>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Skills"
          >
            <a
              className="nav__link"
              href="#skills"
              target="_self"
              rel="next"
              aria-label="Link de Menu para section Skills"
            >
              skills
            </a>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Interesses"
          >
            <a
              className="nav__link"
              href="#interesses"
              target="_self"
              rel="next"
              aria-label="Link de Menu para section Interesses"
            >
              interesses
            </a>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Educação"
          >
            <a
              className="nav__link"
              href="#education"
              target="_self"
              rel="next"
              aria-label="Link de Menu para section Educação"
            >
              educação
            </a>
          </li>
          <li
            className="nav__item"
            role="menuitem"
            aria-label="Link section Projetos"
          >
            <a
              className="nav__link"
              href="#projects"
              target="_self"
              rel="next"
              aria-label="Link de Menu para section Projetos"
            >
              projetos
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
