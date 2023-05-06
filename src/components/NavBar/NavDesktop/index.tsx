import { Menu, PropsMenu } from "components/Menu";
import React from "react";

export default function NavDesktop(props: PropsMenu) {
  return (
    <nav
      /*className={btnIsPressed ? "nav nav--show" : "nav nav--hidden"}*/
      className="nav"
    >
      <Menu {...props} />
    </nav>
  );
}
