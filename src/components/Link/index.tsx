import React from "react";

interface PropsLink extends React.ComponentPropsWithRef<"a"> {
  //href: string,
  //label: string,
  //menuitemactivescroll: string;
  //namesectionmenu: string;
  //children: React.ReactNode
}

type RefLink = HTMLAnchorElement;

const Link = React.forwardRef<RefLink, PropsLink>(function Link(
  /*{href, label, menuItemActiveScroll, nameSectionMenu, children}*/ props: PropsLink,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  const {/*menuitemactivescroll, namesectionmenu,*/className, ...rest} = props;
  return (
    <a
      className={
        /*menuitemactivescroll === namesectionmenu
          ? "nav__link nav__link_active"
          : "nav__link"
        */
        className ? className : undefined
      }
      ref={ref}
      {...rest}
    >
      {props.children}
    </a>
  );
});

export default Link;
