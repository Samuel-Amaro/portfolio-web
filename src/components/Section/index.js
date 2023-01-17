import classNames from "classnames";
import "./section.css";

export default function Section(props) {
    const className = classNames("section", props.className);
    return (
      <section
        className={className} /*section__" + props.nameSection}*/
        id={props.nameSection}
        ref={props.refSection}
      >
        {props.children}
        {/*<div className="section__content">{props.children}</div>*/}
      </section>
    );
}