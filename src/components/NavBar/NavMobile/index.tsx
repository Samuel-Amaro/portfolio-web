import { Menu, PropsMenu } from "components/Menu";
import useNoScroll from "hooks/useNoScroll";
import React, { useRef } from "react";

export default function NavMobile(props: PropsMenu) {
  const refNav = useRef<HTMLElement | null>(null);

  /*function handleClickWindow(e: MouseEvent) {
    if (!refNav.current || refNav.current.contains(e.target as Node)
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
