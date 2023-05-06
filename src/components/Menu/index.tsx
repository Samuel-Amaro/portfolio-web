import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFile,
  faUserGraduate,
  faClipboardList,
  faList,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  getRefs,
  setFocusNextItem,
  setToFocus,
  setToFocusPreviousItem,
} from "utils";
import { DataOptionsFocus } from "components/MenuMobile";
import { useEffect, useRef, useState } from "react";
import Link from "components/Link";
import React from "react";
import "./Menu.css";


export interface PropsMenu extends React.ComponentPropsWithoutRef<"ul"> {
  optionsmenu: string[];
  handlemenuisopen: (isOppen: boolean) => void;
  focuswhenopeningmenuforoption?: DataOptionsFocus;
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
