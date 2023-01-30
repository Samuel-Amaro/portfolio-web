import Heading2 from "../Headings/";
import "./interesses.css";
import React from "react";

export default function Interesses() {
  return (
    <div className="interesses">
      <Heading2 level={2}>Interesses</Heading2>
      <p className="interesses__description">
        Além de gostar de desenvolvimento web, gosto de praticar esporte ao ar
        livre é participo de cultos evangélicos.
      </p>
      <p className="interesses__description">
        No meu tempo livre gosto de assistir futebol. Além de dedicar um pouco
        aos estudos da música. E acompanhar noticias sobre o mundo da
        tecnologia.
      </p>
      <ul className="interesses__list">
        <li className="interesses__item">Sou cristão ⛪</li>
        <li className="interesses__item">Gosto de Futebol ⚽</li>
        <li className="interesses__item">
          Pratico esporte ao ar livre como Ciclismo 🚵🏽‍♂️ é Corrida 🏃‍♂️
        </li>
        <li className="interesses__item">
          Gosto de tocar instrumento 🎻 e estudar música 🎶
        </li>
      </ul>
    </div>
  );
}
