import "./NavBar.css";
import profile from "../assets/images/profile.jfif";
import iconHamburguer from "../assets/images/icon-hamburguer.svg";
import { useState } from "react";


export default function NavBar() {
    const [btnIsPressed, setBtnIsPressed] = useState(false);

    function hadleBtn(event) {
      setBtnIsPressed(!btnIsPressed);
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
          title="button menu"
          class="main__button-menu"
          tabindex="0"
          aria-expanded={btnIsPressed ? "true" : "false"}
          onPointerDown={(event) => hadleBtn(event)}
        >
          <img
            class="button-menu__icon"
            src={iconHamburguer}
            alt="icon menu"
            width="25"
            height="25"
          />
        </button>
        <nav
          className={btnIsPressed ? "nav nav_show" : "nav"}
        >
          <ul className="nav__links" role="menu">
            <li className="nav__item" role="menuitem">
              <a className="nav__link" href="#about" target="_self" rel="next">
                sobre
              </a>
            </li>
            <li className="nav__item" role="menuitem">
              <a
                className="nav__link"
                href="#experience"
                target="_self"
                rel="next"
              >
                experiência
              </a>
            </li>
            <li className="nav__item" role="menuitem">
              <a className="nav__link" href="#skills" target="_self" rel="next">
                skills
              </a>
            </li>
            <li className="nav__item" role="menuitem">
              <a
                className="nav__link"
                href="#interesses"
                target="_self"
                rel="next"
              >
                interesses
              </a>
            </li>
            <li className="nav__item" role="menuitem">
              <a
                className="nav__link"
                href="#education"
                target="_self"
                rel="next"
              >
                educação
              </a>
            </li>
            <li className="nav__item" role="menuitem">
              <a
                className="nav__link"
                href="#projects"
                target="_self"
                rel="next"
              >
                projetos
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
}