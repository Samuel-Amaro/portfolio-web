import "./SocialMediaLink.css";

export default function SocialMediaLink(props) {
    return (
      <a
        class="social-medias__link"
        href={props.href}
        target="_blank"
        rel="noreferrer"
        title={"Link Para Media Social " + props.text}
        aria-label={"Link Para media Social " + props.text}
      >
        <img
          src={props.src}
          alt=""
          width="22"
          height="22"
        />
      </a>
    );
}