import { Menu, PropsMenu } from "components/Menu";
import useNoScroll from "hooks/useNoScroll";
import React, { useRef } from "react";

export default function NavMobile(props: PropsMenu) {
  const refNav = useRef<HTMLElement | null>(null);

  useNoScroll();

  return (
    <nav
      className="nav"
      ref={refNav}
    >
      <Menu {...props} />
    </nav>
  );
}
