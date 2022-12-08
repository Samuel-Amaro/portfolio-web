import Section from "./Section";
import Skill from "./Skill";
import iconBem from "../assets/images/icon-bem-black.png";
import Workflow from "./Workflow";
import "./SectionSkills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCss3Alt, faHtml5, faJs, faGitAlt, faReact, faNpm } from "@fortawesome/free-brands-svg-icons";
import {faUniversalAccess} from "@fortawesome/free-solid-svg-icons";

export default function SectionSkills(props) {
    return (
      <Section nameSection="skills" refSection={props.refSectionSkills}>
        <h2 className="section__heading-2">Skills</h2>
        <h3 className="section__heading-4">
          Linguagens de programação & ferramentas
        </h3>
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
            <Skill
              src={iconBem}
              alt="O ícone do logotipo para bem(block element modifier)"
              title="BEM(Block Element Modifier)"
              height="46"
              width="46"
            />
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
        </ul>
        <h3 className="section__heading-4">Workflow</h3>
        <ul
          className="workflow"
          aria-label="Lista de Padrões e Principios usados no fluxo de trabalho"
        >
          <li className="workflow__item">
            <Workflow text="Mobile-First" />
          </li>
          <li className="workflow__item">
            <Workflow text="RWD(Responsive Web Design)" />
          </li>
          <li className="workflow__item">
            <Workflow text="OOP(object oriented programming)" />
          </li>
          <li className="workflow__item">
            <Workflow text="Markup Semantic" />
          </li>
          <li className="workflow__item">
            <Workflow text="BEM naming methodology" />
          </li>
          <li className="workflow__item">
            <Workflow text="Web Acessibility" />
          </li>
          <li className="workflow__item">
            <Workflow text="react-router-dom Library" />
          </li>
        </ul>
      </Section>
    );
}