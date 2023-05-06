import "./navbar.css";
import profile from "../../assets/images/profile.jfif";
import React, { useEffect, useState } from "react";
import Switch from "components/Switch";
import MenuMobile from "components/MenuMobile";
import NavDesktop from "./NavDesktop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import useMatchMedia from "hooks/useMatchMedia";

interface PropsNavBar {
  items: string[];
}

//TODO: pensar se vale a pena refatorar esta sidebar, criar um componente so para mobile e outro so para desktop, usar match media componente para ver qual mostrar, refatorar o switch componente para algo mais bonito, e tentar usar grid layout no main

export default function NavBar({ items }: PropsNavBar) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenuIsOpen(isOppen: boolean) {
    setMenuIsOpen(isOppen);
  }

  return useMatchMedia({
    mobileContent: (
      <NavBarMobile
        menuIsOppen={menuIsOpen}
        handleMenuIsOpen={handleMenuIsOpen}
        items={items}
      />
    ),
    desktopContent: (
      <NavBarDesktop
        menuIsOppen={menuIsOpen}
        handleMenuIsOpen={handleMenuIsOpen}
        items={items}
      />
    ),
    mediaQuery: "(min-width: 992px)",
  });
}

interface PropsCommonNavBar extends PropsNavBar {
  menuIsOppen: boolean;
  handleMenuIsOpen: (isOppen: boolean) => void;
}

function NavBarMobile({
  items,
  menuIsOppen,
  handleMenuIsOpen,
}: PropsCommonNavBar) {
  return (
    <aside className="navbar">
      <div className="navbar__data-profile">
        <span className="navbar__name">Samuel Amaro</span>
      </div>
      <Switch />
      <MenuMobile
        optionsMenu={items}
        menuIsOpen={menuIsOppen}
        handleMenuIsOpen={handleMenuIsOpen}
      />
    </aside>
  );
}

function NavBarDesktop({
  items,
  menuIsOppen,
  handleMenuIsOpen,
}: PropsCommonNavBar) {
  function handleClickBtnHiddenOrShowSidebar() {
    handleMenuIsOpen(!menuIsOppen);
  }

  function handleKeydownBtnHiddenOrShowSidebar(
    e: React.KeyboardEvent<HTMLButtonElement>
  ) {
    if (e.key === "Enter" || e.key === " ") {
      handleMenuIsOpen(!menuIsOppen);
    }
  }

  useEffect(() => {
    if (
      menuIsOppen &&
      document.querySelector(".main")?.classList.contains("main--pading")
    ) {
      document.querySelector(".main")?.classList.remove("main--pading");
      return;
    } else {
      document.querySelector(".main")?.classList.add("main--pading");
    }
  }, [menuIsOppen]);

  if (menuIsOppen) {
    return (
      <aside className="navbar">
        <div className="navbar__container">
          <div className="navbar__data-profile">
            <div className="navbar__profile-img">
              <img src={profile} alt="Perfil Samuel Amaro" />
            </div>
          </div>
          <Switch />
          <NavDesktop optionsmenu={items} handlemenuisopen={handleMenuIsOpen} />
        </div>
        <button
          type="button"
          title="Ocultar Sidebar"
          aria-label="Ocultar Sidebar"
          className="sidebar__btn-hide"
          onClick={handleClickBtnHiddenOrShowSidebar}
          onKeyDown={handleKeydownBtnHiddenOrShowSidebar}
        >
          <FontAwesomeIcon
            icon={faEyeSlash}
            className="sidebar__btn-hide-icon"
          />
          <span className="sidebar__btn-hide--text">Ocultar Sidebar</span>
        </button>
      </aside>
    );
  }

  return (
    <button
      type="button"
      className="btn-show-navbar"
      onClick={handleClickBtnHiddenOrShowSidebar}
      onKeyDown={handleKeydownBtnHiddenOrShowSidebar}
      title="Mostrar Sidebar"
      aria-label="Mostrar Sidebar"
    >
      <FontAwesomeIcon icon={faEye} className="btn-show-navbar__icon" />
    </button>
  );
}
