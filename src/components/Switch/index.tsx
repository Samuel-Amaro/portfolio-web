import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useThemeContext } from "context/ThemeContext";
import React from "react";
import "./Switch.css";

export default function Switch() {
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
