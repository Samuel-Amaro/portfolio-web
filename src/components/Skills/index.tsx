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
  faFigma
} from "@fortawesome/free-brands-svg-icons";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { SiReactrouter, SiTypescript, SiVite, SiNextdotjs} from "react-icons/si";
import Heading from "../Headings/";
import "./skills.css";
import React from "react";
import IconBemCSS from "components/Icons/BemCSS";
import IconSWR from "components/Icons/SWR";
import IconCSSModules from "components/Icons/CSSModules";
import ReactHookForm from "components/Icons/ReactHookForm";

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
          <IconBemCSS className={"tools__Icon-Tool tools__Icon-Tool_Mediun"}/>
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
        <li
          className="tools__item"
          title="Frontend Tooling"
          aria-label="Frontend Tooling"
        >
          <SiVite className="tools__Icon-Tool" />
          <span className="tools__content">Vite</span>
        </li>
        <li
          className="tools__item"
          title="Ferramenta de design"
          aria-label="Ferramenta de design"
        >
          <FontAwesomeIcon
            icon={faFigma}
            className="tools__Icon-Tool"
          />
          <span className="tools__content">Figma</span>
        </li>
        <li
          className="tools__item"
          title="Next.JS Framework React"
          aria-label="Next.JS Framework React"
        >
          <SiNextdotjs
            className="tools__Icon-Tool"
          />
          <span className="tools__content">Next.JS</span>
        </li>
        <li className="tools__item" title="Integração com APIS usando SWR" aria-label="Integração com APIS usando SWR">
          <IconSWR className="tools__Icon-Tool tools__Icon-Tool_Mediun"/>
          <span className="tools__content">SWR</span>
        </li>
        <li className="tools__item" title="CSS Moderno com CSS Modules" aria-label="CSS Moderno com CSS Modules">
          <IconCSSModules className="tools__Icon-Tool tools__Icon-Tool_Mediun"/>
          <span className="tools__content">CSS Modules</span>
        </li>
        <li className="tools__item" title="React Hook Form" aria-label="React Hook Form">
          <ReactHookForm className="tools__Icon-Tool tools__Icon-Tool_Mediun"/>
          <span className="tools__content">React Hook Form</span>
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
          <Workflow>Agile Development & Scrum</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>Noções de componentização</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>Familiaridade com ferramenta Figma</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>Server Side Rendering com Next.JS</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>Client e Server Components</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>Integração com APIS rest usando Fetch é SWR</Workflow>
        </li>
        <li className="workflow__item">
          <Workflow>React Hook Form</Workflow>
        </li>
      </ul>
    </div>
  );
}
