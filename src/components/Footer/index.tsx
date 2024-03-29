import "./footer.css";
import React from "react";

export default function Footer() {
    return (
      <footer className="footer">
        <p className="description">
          © 2023 - Layout original{" "}
          <a
            href="https://startbootstrap.com/theme/resume"
            target="_blank"
            rel="noreferrer"
            className="link-footer"
          >
            Resume
          </a>{" "}
          modificado por{" "}
          <a
            href="https://www.linkedin.com/in/samuel-amaro/"
            target="_blank"
            rel="noreferrer"
            className="link-footer"
          >
            Samuel Amaro
          </a>
        </p>
      </footer>
    );
}