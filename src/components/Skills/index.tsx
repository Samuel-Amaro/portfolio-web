import Workflow from "./Workflow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCss3Alt,
  faHtml5,
  faJs,
  faGitAlt,
  faReact,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { SiReactrouter, SiTypescript } from "react-icons/si";
import Heading from "../Headings/";
import "./skills.css";
import React from "react";

export default function Skills() {
  return (
    <div className="skills">
      <Heading level={2}>Skills</Heading>
      <Heading level={4}>Linguagens de programação & ferramentas</Heading>
      <ul
        className="tools"
        aria-label="Lista de Linguagens de programação e ferramentas"
      >
        <li
          className="tools__item"
          title="Ferramenta para hospedagem de código fonte - GitHub"
          aria-label="Ferramenta para hospedagem de código fonte - GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="tools__Icon-Tool" />
          <span className="tools__content">GitHub</span>
        </li>
        <li
          className="tools__item"
          title="Linguagem de marcação HTML5(Hiper Text Marckup Language)"
          aria-label="Linguagem de marcação HTML5(Hiper Text Marckup Language)"
        >
          <FontAwesomeIcon icon={faHtml5} className="tools__Icon-Tool" />
          <span className="tools__content">HTML5</span>
        </li>
        <li
          className="tools__item"
          title="CSS(Cascade Styles Sheets) Folha de estilos em cascata para estilização de páginas web"
          aria-label="CSS(Cascade Styles Sheets) Folha de estilos em cascata para estilização de páginas web"
        >
          <FontAwesomeIcon icon={faCss3Alt} className="tools__Icon-Tool" />
          <span className="tools__content">CSS3</span>
        </li>
        <li
          className="tools__item"
          title="Git Ferramenta de versionamento de código"
          aria-label="Git Ferramenta de versionamento de código"
        >
          <FontAwesomeIcon icon={faGitAlt} className="tools__Icon-Tool" />
          <span className="tools__content">Git</span>
        </li>
        <li
          className="tools__item"
          title="Linguagem de Programação JavaScript"
          aria-label="Linguagem de Programação JavaScript"
        >
          <FontAwesomeIcon icon={faJs} className="tools__Icon-Tool" />
          <span className="tools__content">JS-es6+</span>
        </li>
        <li
          className="tools__item"
          title="Biblioteca React.JS para construção de UI"
          aria-label="Biblioteca React.JS para construção de UI"
        >
          <FontAwesomeIcon icon={faReact} className="tools__Icon-Tool" />
          <span className="tools__content">React.JS</span>
        </li>
        <li
          className="tools__item"
          title="Gerenciados de pacotes - NPM"
          aria-label="Gerenciados de pacotes - NPM"
        >
          <FontAwesomeIcon icon={faNpm} className="tools__Icon-Tool" />
          <span className="tools__content">NPM</span>
        </li>
        <li
          className="tools__item"
          title="Metologia de organização de código CSS"
          aria-label="Metologia de organização de código CSS"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 101.7 84"
            className="tools__Icon-Tool tools__Icon-Tool_Mediun"
          >
            <path d="M0 13h23.8v7H0zM0 0h23.8v7H0zm42.7 25.9H0v7h41.1c4.5 0 15 .1 18.9 6.4v-3.9c-1.9-6.2-7.5-9.5-17.3-9.5zm.1 13H0v7h41.1c10 0 16.3.4 18.9 1.8v-3.1c-2-4.9-10.4-5.7-17.2-5.7zm-.1 33H0v-7h41.1c4.5 0 15-.1 18.9-6.4v3.9c-1.9 6.2-7.5 9.5-17.3 9.5zm.1-13H0v-7h41.1c10 0 16.3-.4 18.9-1.8v3.1c-2 4.9-10.4 5.7-17.2 5.7zM70.4 84h31.4v-4.3H71.3c-2.7 0-9.1-.1-11.4-3.8v2.4C61 82 64.4 84 70.4 84zm-.1-7.9h31.4v-4.3H71.3c-6.1 0-9.9-.2-11.4-1.1v1.9c1.2 3 6.3 3.5 10.4 3.5z"></path>
          </svg>
          <span className="tools__content">bem</span>
        </li>
        <li
          className="tools__item"
          title="Web Acessibility - Acessibilidade, Web para todos"
          aria-label="Web Acessibility - Acessibilidade, Web para todos"
        >
          <FontAwesomeIcon
            icon={faUniversalAccess}
            className="tools__Icon-Tool"
          />
          <span className="tools__content">Acessibility</span>
        </li>
        <li
          className="tools__item"
          title="Library React react-router-dom"
          aria-label="Library React react-router-dom"
        >
          <SiReactrouter className="tools__Icon-Tool" />
          <span className="tools__content">react-router-dom</span>
        </li>
        <li
          className="tools__item"
          title="Language TypeScript"
          aria-label="Language TypeScript"
        >
          <SiTypescript className="tools__Icon-Tool" />
          <span className="tools__content">TypeScript</span>
        </li>
      </ul>
      <Heading level={4}>Workflow</Heading>
      <ul
        className="workflow"
        aria-label="Lista de Padrões e Principios usados no fluxo de trabalho"
      >
        <li className="workflow__item">
          <Workflow>Mobile-First Design</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>RWD(Responsive Web Design)</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>OOP(object oriented programming)</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>Markup Semantic</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>BEM naming methodology Architecture CSS</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>Web Acessibility</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>react-router-dom Library</Workflow>
        </li>
      </ul>
    </div>
  );
}
