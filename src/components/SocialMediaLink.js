
export default function SocialMediaLink(props) {
    return (
      <a
        class="social-medias__link"
        href={props.href}
        target="_blank"
        rel="noreferrer"
        title="link social media profile"
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