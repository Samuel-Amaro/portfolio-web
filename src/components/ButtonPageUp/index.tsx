import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./buttonpageup.css";
import React, { useEffect, useState } from "react";

export default function ButtonPageUp() {
  const [btnUpIsVisible, setBtnUpIsVisible] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 600) {
      setBtnUpIsVisible(true);
    }else{
      setBtnUpIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={btnUpIsVisible ? "button-up" : "button-up--hidden"}
      type="button"
      aria-label="Botão Para retornar ao topo da página"
      title="Botão para retornar ao topo da página"
      onPointerDown={() => {
        window.scrollTo(0, 0);
      }}
      onKeyDown={(event) => {
        if(event.key === "Enter" || event.key === " ") {
          window.scrollTo(0, 0);
        }
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
