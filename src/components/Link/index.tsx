import "./link.css";
import React from "react";

interface PropsLink extends React.ComponentPropsWithRef<"a"> {
  //href: string,
  //label: string,
  menuitemactivescroll: string;
  namesectionmenu: string;
  //children: React.ReactNode
}

type RefLink = HTMLAnchorElement;

const Link = React.forwardRef<RefLink, PropsLink>(function Link(
  /*{href, label, menuItemActiveScroll, nameSectionMenu, children}*/ props: PropsLink,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <a
      className={
        props.menuitemactivescroll === props.namesectionmenu
          ? "nav__link nav__link_active"
          : "nav__link"
      }
      ref={ref}
      {...props}
    >
      {props.children}
    </a>
  );
});

export default Link;
