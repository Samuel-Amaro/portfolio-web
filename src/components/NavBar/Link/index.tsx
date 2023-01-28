import "./link.css";
import React from "react";

type PropsLink = {
  href: string,
  label: string,
  menuItemActiveScroll: string,
  nameSectionMenu: string,
  children: React.ReactNode
};

export default function Link({href, label, menuItemActiveScroll, nameSectionMenu, children}: PropsLink) {
    return (
      <a
        className={menuItemActiveScroll === nameSectionMenu ? "nav__link nav__link_active" : "nav__link"}
        href={href}
        target="_self"
        rel="next"
        aria-label={label}
        title={label}
      >
        {children}
      </a>
    );
}