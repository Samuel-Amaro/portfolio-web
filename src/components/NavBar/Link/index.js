import "./link.css";

export default function Link(props) {
    return (
      <a
        className={props.menuItemActiveScroll === props.nameSectionMenu ? "nav__link nav__link_active" : "nav__link"}
        href={props.href}
        target="_self"
        rel="next"
        aria-label={props.label}
        title={props.label}
      >
        {props.children}
      </a>
    );
}