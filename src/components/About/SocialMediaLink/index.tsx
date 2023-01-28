import React from "react";
import "./socialmedialink.css";

type PropsSocialMediaLink = {
  href: string,
  titleAndLabel: string,
  children: React.ReactNode
};

export default function SocialMediaLink({href, titleAndLabel, children}: PropsSocialMediaLink) {
    return (
      <a
        className="social-medias__link"
        href={href}
        target="_blank"
        rel="noreferrer"
        title={"Link Para Media Social " + titleAndLabel}
        aria-label={"Link Para media Social " + titleAndLabel}
      >
        {children}
      </a>
    );
}