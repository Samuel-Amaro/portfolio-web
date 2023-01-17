import classNames from "classnames";

export default function Heading2(props) {
  const className = classNames("heading2", props.className);

  return <h2 className={className}>{props.children}</h2>;
}
