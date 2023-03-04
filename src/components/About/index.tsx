import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import iconFrontMentor from "../../assets/images/icon-logo-frontmentor-white.svg";
import curriculo from "../../assets/files/samuel-curriculo-front-web.pdf";
import React from "react";
import SocialMediaLink from "./SocialMediaLink";
import "./about.css";
import Heading from "components/Headings";

export default function About() {
  return (
    <div className="about">
      <Heading level={1} className="about__name">
        Samuel <span className="about__name-emph">Amaro</span>
      </Heading>
      <address className="about__datas">
        Formosa · Goiás ·{" "}
        <a
          href="mailto:samuelamaro96746313@gmail.com"
          target="_self"
          rel="author"
          className="about__link about__link--email"
          aria-label="Link para email de Samuel Amaro"
        >
          samuelamaro96746313@gmail.com
        </a>{" "}
        · Desenvolvedor Front-End
      </address>
      <p className="about__description">
        Ola! Sou o Samuel amaro, desenvolvedor front-end Web, focado em
        construir interfaces de usuário, totalmente acessíveis e responsivas que
        garantam um bom desempenho e ótima experiencia de usuário. Sou formado
        em análise e desenvolvimento de sistemas. Minha jornada no mundo do
        desenvolvimento de software começou em 2019, quando inicie meus estudos
        por meio da faculdade no{" "}
        <a
          className="about__link about__link--instituicao"
          href="https://www.ifg.edu.br/formosa"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para instituição Federal Goias"
        >
          <abbr title="instituto federal de Goiás">IFG</abbr>
        </a>
        , lá foi onde escrevi meus primeiros códigos e também onde eu descobri a
        minha paixão por esse mundo. Atualmente tenho experiencia em tecnologias
        como React, Typescript, JavaScript, HTML, CSS, GIT, e continuo a estudar
        constantemente, aprendendo as melhores praticas e ferramentas. Sinta-se
        a vontade para visualizar o meu currículo e minhas redes logo abaixo.
      </p>
      <ul
        className="social-medias"
        aria-label="Lista de Links para midias Sociais de Samuel Amaro"
      >
        <li className="social-medias__item">
          <SocialMediaLink
            href="https://www.linkedin.com/in/samuel-amaro/"
            titleAndLabel="Linkedin"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="social-medias__icon-link"
            />
          </SocialMediaLink>
        </li>
        <li className="social-medias__item">
          <SocialMediaLink
            href="https://github.com/Samuel-Amaro"
            titleAndLabel="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="social-medias__icon-link"
            />
          </SocialMediaLink>
        </li>
        <li className="social-medias__item">
          <SocialMediaLink
            href="https://www.frontendmentor.io/profile/Samuel-Amaro"
            titleAndLabel="Plataforma de desafio de codificação Front-End Mentor"
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
        className="about__btn-curriculo"
        href={curriculo}
        target="_blank"
        rel="noreferrer"
        download="curriculo"
        type="application/pdf"
        aria-label="Link para Curriculo de Samuel"
        title="Link para Curriculo de Samuel"
      >
        Currículo(PDF)
      </a>
    </div>
  );
}

/*
Olá! Meu nome e Samuel Amaro, sou
        formado em análise e desenvolvimento de Sistemas, pelo{" "}
        <a
          className="about__link about__link--instituicao"
          href="https://www.ifg.edu.br/formosa"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para instituição Federal Goias"
        >
          <abbr title="instituto federal de Goiás">IFG</abbr>
        </a>
        , tenho 22 anos, atualmente estou desempregado buscando uma oportunidade
        profissional na areá de desenvolvimento web para atuar como
        desenvolvedor Front-End. Sobre min sou um desenvolvedor que gosta do que
        faz, me dedicado nas minhas tarefas, sou detalhista e busco sempre
        extrair o melhor de min para entregar valor e contribuição, busco
        aprender constantemente, consistência e oque busco no meu aprendizado,
        tento ser proativo, sou determinado. Sinta-se a vontade para visualizar
        o meu currículo e minhas redes logo abaixo.
*/