import "./navbar.css";
import profile from "../../assets/images/profile.jfif";
import Link from "./Link";
import React, { useEffect, useRef, useState } from "react";
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
import {
  getRefs,
  setFocusNextItem,
  setToFocus,
  setToFocusPreviousItem,
} from "utils";
import useNoScroll from "hooks/useNoScroll";

type PropsNavBar = {
  items: string[];
};

//TODO: pensar se vale a pena refatorar esta sidebar, criar um componente so para mobile e outro so para desktop, usar match media componente para ver qual mostrar, refatorar o switch componente para algo mais bonito, e tentar usar grid layout no main

export default function NavBar({ items }: PropsNavBar) {
  return (
    <aside className="navbar">
      <div className="navbar__data-profile">
        <span className="navbar__name">Samuel Amaro</span>
        <div className="navbar__profile-img">
          <img src={profile} alt="Perfil Samuel Amaro" />
        </div>
      </div>
      <Switch />
      <MenuMobile optionsMenu={items} />
    </aside>
  );
}

export function Switch() {
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

  return (
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
        title="Controlador esquema de cores usado neste site"
        tabIndex={0}
      ></span>
    </div>
  );
}

type PropsMenuMobile = {
  optionsMenu: string[];
};

export function MenuMobile({ optionsMenu }: PropsMenuMobile) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [focusOnOptionOpenMenu, setFocusOnOptionOpenMenu] =
    useState<DataOptionsFocus>("first");
  const refBtnMenu = useRef<HTMLButtonElement | null>(null);

  function handleClickBtnMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  function handleKeydownBtnMenu(e: React.KeyboardEvent<HTMLButtonElement>) {
    e.preventDefault();
    switch (e.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
      case "Down":
        //focar primeiro item do menu
        setMenuIsOpen(true);
        //setToFocus(0, refsOptionsMenu);
        setFocusOnOptionOpenMenu("first");
        break;
      case "Up":
      case "ArrowUp":
        //focar ultimo item do menu
        setMenuIsOpen(true);
        //setToFocus(getRefs(refsOptionsMenu).length - 1, refsOptionsMenu);
        setFocusOnOptionOpenMenu("last");
        break;
      case "Esc":
      case "Escape":
        refBtnMenu.current?.focus();
        //focar primeiro item do menu
        setMenuIsOpen(false);
        break;
      default:
        break;
    }
  }

  function handleMenuIsOpen(isOppen: boolean) {
    refBtnMenu.current?.focus();
    setMenuIsOpen(isOppen);
  }

  return (
    <>
      <button
        id="menubutton"
        type="button"
        title={menuIsOpen ? "Ocultar menu navegação" : "Mostrar menu navegação"}
        className="navbar__button-menu"
        aria-expanded={menuIsOpen ? "true" : "false"}
        aria-haspopup="true"
        aria-controls="menu"
        aria-label={
          menuIsOpen ? "Fechar menu navegação" : "Mostrar menu navegação"
        }
        onPointerDown={handleClickBtnMenu}
        onKeyDown={handleKeydownBtnMenu}
        ref={refBtnMenu}
      >
        <FontAwesomeIcon icon={faBars} className="navbar__icon-button" />
      </button>
      {menuIsOpen && (
        <NavMobile
          optionsmenu={optionsMenu}
          handlemenuisopen={handleMenuIsOpen}
          focuswhenopeningmenuforoption={focusOnOptionOpenMenu}
          id="menu"
          aria-labelledby="menubutton"
        />
      )}
    </>
  );
}

type DataOptionsFocus = "first" | "last";

interface PropsMenu extends React.ComponentPropsWithoutRef<"ul"> {
  optionsmenu: string[];
  handlemenuisopen: (isOppen: boolean) => void;
  focuswhenopeningmenuforoption: DataOptionsFocus;
}

export function Menu(props: PropsMenu) {
  const {
    optionsmenu,
    handlemenuisopen,
    focuswhenopeningmenuforoption,
    ...rest
  } = props;
  const [menuItemActiveScroll, setMenuItemActiveScroll] = useState("about");
  const refsOptionsMenu = useRef<HTMLAnchorElement[] | null>(null);

  function handleKeyDownOptionMenu(e: React.KeyboardEvent<HTMLAnchorElement>) {
    if (e.ctrlKey || e.altKey || e.metaKey) {
      return;
    } else {
      switch (e.key) {
        case "Up":
        case "ArrowUp":
          setToFocusPreviousItem(e.currentTarget, refsOptionsMenu);
          break;
        case "ArrowDown":
        case "Down":
          setFocusNextItem(e.currentTarget, refsOptionsMenu);
          break;
        case "Home":
        case "PageUp":
          setToFocus(0, refsOptionsMenu);
          break;
        case "End":
        case "PageDown":
          setToFocus(getRefs(refsOptionsMenu).length - 1, refsOptionsMenu);
          break;
        case "Esc":
        case "Escape":
          //refBtnMenu.current?.focus();
          handlemenuisopen(false);
          break;
        default:
          break;
      }
    }
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

    //window.addEventListener("click", handleClickWindow);
    window.addEventListener("scroll", onActiveItemMenuScroll);

    return () => {
      //window.removeEventListener("click", handleClickWindow);
      window.removeEventListener("scroll", onActiveItemMenuScroll);
    };
  }, []);

  useEffect(() => {
    switch (focuswhenopeningmenuforoption) {
      case "first":
        setToFocus(0, refsOptionsMenu);
        break;
      case "last":
        setToFocus(getRefs(refsOptionsMenu).length - 1, refsOptionsMenu);
        break;
      default:
        break;
    }
  }, [focuswhenopeningmenuforoption]);

  return (
    <ul className="nav__links" {...rest}>
      {optionsmenu.map((item, index) => {
        return (
          <li className="nav__item" key={index}>
            <Link
              href={`#${item}`}
              aria-label={`Link de Menu para section ${item}`}
              menuitemactivescroll={menuItemActiveScroll}
              namesectionmenu={item}
              onKeyDown={handleKeyDownOptionMenu}
              ref={(optionMenu: HTMLAnchorElement) => {
                const refOptions = getRefs(refsOptionsMenu);
                if (optionMenu) {
                  refOptions[index] = optionMenu;
                } else {
                  refOptions.splice(index, 1);
                }
              }}
            >
              <FontAwesomeIcon icon={getIcon(item)} className="nav__icon" />{" "}
              {getWord(item)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function NavMobile(props: PropsMenu) {
  const refNav = useRef<HTMLElement | null>(null);

  /*function handleClickWindow(e: MouseEvent) {
    if (
      refNav.current?.contains(e.target as Node) &&
      (refNav.current as HTMLElement) !== e.target
    ) {
      console.log("clicou dentro do nav");
      return;
    }
    console.log("clicou fora do nav");
    props.handlemenuisopen(false);
  }*/

  useNoScroll();

  /*useEffect(() => {
    window.addEventListener("click", handleClickWindow);

    return () => {
      window.removeEventListener("click", handleClickWindow);
    };
  });
  */

  return (
    <nav
      /*className={btnIsPressed ? "nav nav--show" : "nav nav--hidden"}*/
      className="nav"
      ref={refNav}
    >
      <Menu {...props} />
    </nav>
  );
}
