import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import NavMobile from "components/NavBar/NavMobile";
import "./MenuMobile.css";

export type DataOptionsFocus = "first" | "last";

type PropsMenuMobile = {
  optionsMenu: string[];
  menuIsOpen: boolean;
  handleMenuIsOpen: (isOppen: boolean) => void;
};

export default function MenuMobile({
  optionsMenu,
  menuIsOpen,
  handleMenuIsOpen,
}: PropsMenuMobile) {
  //const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [focusOnOptionOpenMenu, setFocusOnOptionOpenMenu] =
    useState<DataOptionsFocus>("first");
  const refBtnMenu = useRef<HTMLButtonElement | null>(null);

  function handleClickBtnMenu() {
    //setMenuIsOpen(!menuIsOpen);
    handleMenuIsOpen(!menuIsOpen);
  }

  function handleKeydownBtnMenu(e: React.KeyboardEvent<HTMLButtonElement>) {
    e.preventDefault();
    switch (e.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
      case "Down":
        //focar primeiro item do menu
        //setMenuIsOpen(true);
        handleMenuIsOpen(true);
        //setToFocus(0, refsOptionsMenu);
        setFocusOnOptionOpenMenu("first");
        break;
      case "Up":
      case "ArrowUp":
        //focar ultimo item do menu
        //setMenuIsOpen(true);
        handleMenuIsOpen(true);
        //setToFocus(getRefs(refsOptionsMenu).length - 1, refsOptionsMenu);
        setFocusOnOptionOpenMenu("last");
        break;
      case "Esc":
      case "Escape":
        refBtnMenu.current?.focus();
        //focar primeiro item do menu
        //setMenuIsOpen(false);
        handleMenuIsOpen(false);
        break;
      default:
        break;
    }
  }

  function handleMenuIsOpenNav(isOppen: boolean) {
    refBtnMenu.current?.focus();
    //setMenuIsOpen(isOppen);
    handleMenuIsOpen(isOppen);
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
          handlemenuisopen={handleMenuIsOpenNav}
          focuswhenopeningmenuforoption={focusOnOptionOpenMenu}
          id="menu"
          aria-labelledby="menubutton"
        />
      )}
    </>
  );
}
