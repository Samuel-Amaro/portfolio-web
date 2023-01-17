import classNames from "classnames";

export default function Heading4(props) {
  const className = classNames("heading4", props.className);

  return <h4 className={className}>{props.children}</h4>;
}
