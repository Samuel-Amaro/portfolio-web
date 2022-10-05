import Section from "./Section";
import Skill from "./Skill";
import iconBem from "../assets/images/icon-bem-black.png";
import iconAcessibility from "../assets/images/icon-universal-access-solid.svg";
import Workflow from "./Workflow";

export default function SectionSkills() {
    return (
      <Section nameSection="skills">
        <h2 className="section__heading-2">Skills</h2>
        <h3 className="section__heading-3">
          Linguagens de programação & ferramentas
        </h3>
        <ul className="tools">
          <li className="tools__item">
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt="O ícone do logotipo para GitHub"
              title="GitHub"
              height="60"
              width="60"
            />
          </li>
          <li className="tools__item">
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              alt="O ícone do logotipo para HTML5"
              title="HTML5"
              height="60"
              width="60"
            />
          </li>
          <li className="tools__item">
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              alt="O ícone do logotipo para CSS3"
              title="CSS3"
              height="60"
              width="60"
            />
          </li>
          <li className="tools__item">
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              alt="O ícone do logotipo para Git"
              title="GIT"
              height="60"
              width="60"
            />
          </li>
          <li className="tools__item">
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="O ícone do logotipo para JavaScript"
              title="JavaScript"
              height="60"
              width="60"
            />
          </li>
          <li className="tools__item">
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="O ícone do logotipo para React"
              title="React"
              height="60"
              width="60"
            />
          </li>
          <li className="tools__item">
            <Skill
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="O ícone do logotipo para NPM"
              title="NPM"
              height="60"
              width="60"
            />
          </li>
          <li className="tools__item">
            <Skill
              src={iconBem}
              alt="O ícone do logotipo para bem(block element modifier)"
              title="BEM(Block Element Modifier)"
              height="60"
              width="60"
            />
          </li>
          <li className="tools__item">
            <Skill
              src={iconAcessibility}
              alt="O ícone do logotipo para acessibilidade universal"
              title="Acessibility Universal"
              height="60"
              width="60"
            />
          </li>
        </ul>
        <h3 className="section__heading-3">Workflow</h3>
        <ul className="workflow">
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