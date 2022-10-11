import Section from "./Section";
import SocialMediaLink from "./SocialMediaLink";
import iconLinkedin from "../assets/images/icon-linkedin-white.svg";
import iconGitHub from "../assets/images/icon-github-white.svg";
import iconFrontMentor from "../assets/images/icon-logo-frontmentor-white.svg";
import curriculo from "../assets/files/curriculo-portefolio-samuel-amaro.pdf";
import "./SectionAbout.css";

export default function SectionAbout() {
  return (
    <Section nameSection="about">
      <h1 className="section__heading-main">
        Samuel <span class="title__name-emph">Amaro</span>
      </h1>
      <address className="section__data-addres">
        Formosa Goiás · Bosque II ·{" "}
        <a
          href="mailto:samuel.dev.front@gmail.com"
          target="_self"
          rel="author"
          className="link-email"
          aria-label="Link para email de Samuel Amaro"
        >
          samuel.dev.front@gmail.com
        </a>{" "}
        · Desenvolvedor Front-End Júnior
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
        profissional na areá de desenvolvimento web para atuar como estagiário
        ou desenvolvedor júnior Front-End. Sou proativo, determinado, focado,
        gosto de resolver problemas usando as minhas habilidades, lido bem com
        ambientes sob pressão, aplico gerenciamento de tempo nas minhas tarefas
        pessoais. Sinta-se a vontade para visualizar o meu currículo e minhas
        redes logo abaixo.
      </p>
      <ul className="social-medias" aria-label="Lista de Links para midias Sociais de Samuel Amaro">
        <li className="social-medias__item">
          <SocialMediaLink
            href="https://www.linkedin.com/in/samuel-amaro/"
            src={iconLinkedin}
            text="Linkedin"
          />
        </li>
        <li class="social-medias__item">
          <SocialMediaLink
            href="https://github.com/Samuel-Amaro"
            src={iconGitHub}
            text="GitHub"
          />
        </li>
        <li class="social-medias__item">
          <SocialMediaLink
            href="https://www.frontendmentor.io/profile/Samuel-Amaro"
            src={iconFrontMentor}
            text="Plataforma de desafio de codificação Front-End Mentor"
          />
        </li>
      </ul>
      <a
        class="link-curriculo"
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
