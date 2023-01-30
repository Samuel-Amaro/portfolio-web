import Heading2 from "../Headings/";
import "./interesses.css";
import React from "react";

export default function Interesses() {
  return (
    <div className="interesses">
      <Heading2 level={2}>Interesses</Heading2>
      <p className="interesses__description">
        Além de gostar de desenvolvimento web, gosto de praticar esporte ao ar
        livre, como ciclismo utilizando minha mountain bike. E participo de
        cultos evangélicos, sou cristão.
      </p>
      <p className="interesses__description">
        No meu tempo livre gosto de assistir futebol e acompanhar as notícias
        sobre o time. Além de dedicar um pouco aos estudos da música. E
        acompanhar noticias sobre o mundo da tecnologia.
      </p>
    </div>
  );
}
