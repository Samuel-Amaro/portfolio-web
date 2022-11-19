import "./SocialMediaLink.css";

export default function SocialMediaLink(props) {
    return (
      <a
        className="social-medias__link"
        href={props.href}
        target="_blank"
        rel="noreferrer"
        title={"Link Para Media Social " + props.text}
        aria-label={"Link Para media Social " + props.text}
      >
        {props.children}
      </a>
    );
}