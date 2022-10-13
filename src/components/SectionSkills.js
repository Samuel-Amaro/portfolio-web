import Section from "./Section";
import Skill from "./Skill";
import iconBem from "../assets/images/icon-bem-black.png";
import Workflow from "./Workflow";
import "./SectionSkills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCss3Alt, faHtml5, faJs, faGitAlt, faReact, faNpm } from "@fortawesome/free-brands-svg-icons";
import {faUniversalAccess} from "@fortawesome/free-solid-svg-icons";

export default function SectionSkills() {
    return (
      <Section nameSection="skills">
        <h2 className="section__heading-2">Skills</h2>
        <h3 className="section__heading-4">
          Linguagens de programação & ferramentas
        </h3>
        <ul
          className="tools"
          aria-label="Lista de Linguagens de programação e ferramentas"
        >
          <li className="tools__item">
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li className="tools__item">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="tools__item">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="tools__item">
            <FontAwesomeIcon icon={faGitAlt} />
          </li>
          <li className="tools__item">
            <FontAwesomeIcon icon={faJs} />
          </li>
          <li className="tools__item">
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li className="tools__item">
            <FontAwesomeIcon icon={faNpm} />
          </li>
          <li className="tools__item">
            <Skill
              src={iconBem}
              alt="O ícone do logotipo para bem(block element modifier)"
              title="BEM(Block Element Modifier)"
              height="46"
              width="46"
            />
          </li>
          <li className="tools__item">
            <FontAwesomeIcon icon={faUniversalAccess} />
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
            <Workflow text="RWD" />
          </li>
          <li className="workflow__item">
            <Workflow text="OOP" />
          </li>
          <li className="workflow__item">
            <Workflow text="Markup Semantic" />
          </li>
          <li className="workflow__item">
            <Workflow text="BEM naming methodology" />
          </li>
          <li className="workflow__item">
            <Workflow text="Acessibility" />
          </li>
        </ul>
      </Section>
    );
}