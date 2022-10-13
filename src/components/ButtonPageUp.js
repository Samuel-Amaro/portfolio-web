import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./ButtonPageUp.css";
import React, { useState } from "react";

export default function ButtonPageUp() {
  const [btnUpIsVisible, setBtnUpIsVisible] = useState(false);

  window.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 600) {
      setBtnUpIsVisible(true);
    }else{
        setBtnUpIsVisible(false);
    }
  });

  function handleBtnUp(event) {
    window.scrollTo(0, 0);
  }

  return (
    <button
      className={btnUpIsVisible ? "button-page-up" : "button-page-up-hidden"}
      type="button"
      aria-label="Botão Para retornar ao topo da página"
      title="Botão para retornar ao topo da página"
      onPointerDown={(event) => handleBtnUp(event)}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
