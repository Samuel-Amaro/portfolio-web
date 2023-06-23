import { Menu, PropsMenu } from "components/Menu";
import React from "react";

export default function NavDesktop(props: PropsMenu) {
  return (
    <nav
      className="nav"
    >
      <Menu {...props} />
    </nav>
  );
}
