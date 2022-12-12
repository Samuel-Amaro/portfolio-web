import Section from "./Section";
import SocialMediaLink from "./SocialMediaLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import iconFrontMentor from "../assets/images/icon-logo-frontmentor-white.svg";
import curriculo from "../assets/files/curriculo-samuel-amaro-web.pdf";
import "./SectionAbout.css";

export default function SectionAbout(props) {
  return (
    <Section nameSection="about" refSection={props.refSectionAbout}>
      <h1 className="section__heading-main">
        Samuel <span className="title__name-emph">Amaro</span>
      </h1>
      <address className="section__data-addres">
        Formosa Goiás · Bosque II ·{" "}
        <a
          href="mailto:samuelamaro96746313@gmail.com"
          target="_self"
          rel="author"
          className="link-email"
          aria-label="Link para email de Samuel Amaro"
        >
          samuelamaro96746313@gmail.com
        </a>{" "}
        · Desenvolvedor Front-End
      </address>
      <p className="section__description-about">
        Olá! Meu nome e Samuel Amaro, sou formado em análise e desenvolvimento
        de Sistemas, pelo{" "}
        <a
          className="link-instituicao"
          href="https://www.ifg.edu.br/formosa"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para instituição Federal Goias"
        >
          <abbr title="instituto federal de Goiás">IFG</abbr>
        </a>
        , tenho 22 anos, atualmente estou desempregado buscando uma oportunidade
        profissional na areá de desenvolvimento web para atuar como
        desenvolvedor Front-End. Sobre min sou um desenvolvedor que gosta do que faz, sou
        dedicado nas minhas tarefas, sou detalhista e busco sempre extrair o
        melhor de min para entregar valor e contribuição, busco aprender
        constantemente, consistência e oque busco no meu aprendizado, tento ser  proativo, determinado, sou detalhista,
        gosto de aplicar gerenciamento de tempo nas minhas tarefas pessoais.
        Sinta-se a vontade para visualizar o meu currículo e minhas redes logo
        abaixo.
      </p>
      <ul
        className="social-medias"
        aria-label="Lista de Links para midias Sociais de Samuel Amaro"
      >
        <li className="social-medias__item">
          <SocialMediaLink
            href="https://www.linkedin.com/in/samuel-amaro/"
            text="Linkedin"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="social-medias__icon-link"
            />
          </SocialMediaLink>
        </li>
        <li className="social-medias__item">
          <SocialMediaLink href="https://github.com/Samuel-Amaro" text="GitHub">
            <FontAwesomeIcon
              icon={faGithub}
              className="social-medias__icon-link"
            />
          </SocialMediaLink>
        </li>
        <li className="social-medias__item">
          <SocialMediaLink
            href="https://www.frontendmentor.io/profile/Samuel-Amaro"
            text="Plataforma de desafio de codificação Front-End Mentor"
          >
            <img
              src={iconFrontMentor}
              height="22"
              width="22"
              alt=""
              aria-hidden="true"
            />
          </SocialMediaLink>
        </li>
      </ul>
      <a
        className="link-curriculo"
        href={curriculo}
        target="_blank"
        rel="noreferrer"
        download="curriculo"
        type="application/pdf"
        aria-label="Link para Curriculo de Samuel"
      >
        Currículo(PDF)
      </a>
    </Section>
  );
}
