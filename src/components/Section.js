import "./Section.css";

export default function Section(props) {
    return (
      <section
        className={"section section__" + props.nameSection}
        id={props.nameSection}
        ref={props.refSection}
      >
        <div className="section__content">{props.children}</div>
      </section>
    );
}