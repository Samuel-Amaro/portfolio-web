import classNames from "classnames";

export default function Heading3(props) {
  const className = classNames("heading3", props.className);

  return <h3 className={className}>{props.children}</h3>;
}
