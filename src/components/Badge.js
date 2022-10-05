
export default function Badge(props) {
    return (
      <div className={"badge badge__" + props.badgeClass.toLowerCase()}>
        <img
          src={props.src}
          alt=""
          width="14"
          height="14"
          className="badge__ilustration"
        />
        <span className={"badge__text badge__text_" + props.badgeClass.toLowerCase()}>{props.text.toUpperCase()}</span>
      </div>
    );
}