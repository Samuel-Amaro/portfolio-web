import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DataProjects from "../../data/projects.json";
import CardProject from "../../components/Projects/Card";
import ProjectContent from "../../components/Projects/Content";
import ProjectLinks from "../../components/Projects/Links";
import { useState } from "react";
import Heading2 from "../../components/Headings/Heading2";
import "./index.css";

export default function Index() {
  const optionsSelect = [
    "React",
    "HTML-CSS-JS Vanilla",
    "PHP",
    "JAVA",
    "JavaScript",
    "CSS",
    "Typescript",
  ];
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState({
    option: "Filtre Por Tecnologias",
    id: "",
  });
  const selectActionsKey = {
    close: 0,
    closeSelect: 1,
    first: 2,
    last: 3,
    next: 4,
    open: 5,
    pageDown: 6,
    pageUp: 7,
    previous: 8,
    select: 9,
    type: 10,
    focusFirst: 11,
  };

  function handleSelectIsOpen(event) {
    setIsSelectOpen(!isSelectOpen);
  }

  function handleOptionSelected(event) {
    setOptionSelected({
      option: event.target.dataset.value,
      id: event.target.id,
    });
  }

  // filtra um array de opções contra uma string de entrada
  // retorna um array de opções que começam com a string do filtro, independente de maiúsculas e minúsculas
  function filterOptions(filter) {
    return optionsSelect.filter((option) => {
      return option.toLowerCase().indexOf(filter.toLowerCase()) === 0;
    });
  }

  // retorna o índice de uma opção de uma matriz de opções, com base em uma string de pesquisa
  // se o filtro for várias iterações da mesma letra (por exemplo, "aaa"), então percorra as correspondências da primeira letra
  function getIndexByLetter(filter) {
    const firstMatch = filterOptions(filter)[0];
    if (firstMatch) {
      return optionsSelect.indexOf(firstMatch);
    }
  }

  function getByIndexOption() {
    return optionsSelect
      .map((option) => {
        return option.toLowerCase();
      })
      .indexOf(optionSelected.option.toLowerCase());
  }

  // mapeia um pressionamento de tecla para uma ação
  function getActionFromKey(event) {
    const { key, altKey, ctrlKey, metaKey } = event;
    // todas as teclas que farão a ação padrão de abertura
    const openKeys = ["ArrowDown", "ArrowUp", "Enter", " "];

    // manipula a abertura quando fechado
    if (!isSelectOpen && openKeys.includes(key)) {
      if (key === "ArrowUp") {
        return selectActionsKey.first;
      }
      return selectActionsKey.open;
    }

    // home e end movem a opção selecionada quando aberta ou fechada
    if (key === "Home") {
      //escolhe a primeira option do select
      return selectActionsKey.first;
    }
    if (key === "End") {
      //escolhe a ultima option do select
      return selectActionsKey.last;
    }

    // lida com a digitação de caracteres quando aberto ou fechado
    if (
      key === "Backspace" ||
      key === "Clear" ||
      (key.length === 1 && key !== " " && !altKey && !ctrlKey && !metaKey)
    ) {
      return selectActionsKey.type;
    }

    //lidar com as chaves quando aberto
    if (isSelectOpen) {
      if (key === "ArrowUp" && altKey) {
        return selectActionsKey.closeSelect;
      } else if (key === "ArrowDown" && !altKey) {
        return selectActionsKey.next;
      } else if (key === "ArrowUp") {
        return selectActionsKey.previous;
      } else if (key === "PageUp") {
        return selectActionsKey.pageUp;
      } else if (key === "PageDown") {
        return selectActionsKey.pageDown;
      } else if (key === "Escape") {
        return selectActionsKey.close;
      } else if (key === "Enter" || key === " ") {
        return selectActionsKey.closeSelect;
      }
    }
  }

  function handleKeyDown(event) {
    const action = getActionFromKey(event);
    event.preventDefault();

    switch (action) {
      case selectActionsKey.open:
        setIsSelectOpen(true);
        break;
      case selectActionsKey.first:
        setIsSelectOpen(true);
        setOptionSelected({ option: optionsSelect[0], index: "0" });
        break;
      case selectActionsKey.last:
        setIsSelectOpen(true);
        setOptionSelected({
          option: optionsSelect[optionsSelect.length - 1],
          index: optionsSelect.length - 1,
        });
        break;
      case selectActionsKey.type:
        setIsSelectOpen(true);
        const searchIndex = getIndexByLetter(event.key);

        if (searchIndex >= 0) {
          setOptionSelected({
            option: optionsSelect[searchIndex],
            id: searchIndex,
          });
        }

        break;

      case selectActionsKey.closeSelect:
      case selectActionsKey.close:
        setIsSelectOpen(false);
        break;
      case selectActionsKey.next:
        if (getByIndexOption() < optionsSelect.length - 1) {
          setOptionSelected({
            option: optionsSelect[getByIndexOption() + 1],
            id: getByIndexOption() + 1,
          });
        }
        break;
      case selectActionsKey.previous:
        if (getByIndexOption() > 0) {
          setOptionSelected({
            option: optionsSelect[getByIndexOption() - 1],
            id: getByIndexOption() - 1,
          });
        }

        if (getByIndexOption() === -1) {
          setOptionSelected({
            option: optionsSelect[optionsSelect.length - 1],
            id: optionsSelect.length - 1,
          });
        }
        break;
      default:
        break;
    }
  }

  return (
    <>
      <header className="header">
        <Link
          to="/"
          target="_self"
          rel="next"
          title="Retornar Página Home"
          aria-label="Retornar Página Home"
          className="header__link-home"
        >
          <FontAwesomeIcon icon={faHouse} className="header__icon" />
        </Link>
        <Heading2 className="header__title">
          <FontAwesomeIcon icon={faCode} /> Projetos
        </Heading2>
      </header>
      <form
        className="formsearch"
        aria-label="Formulário para pesquisa e filtragem de projetos"
      >
        <div className="formsearch__group">
          <div className="formsearch__wrapper-search">
            <label className="formsearch__label" htmlFor="search">
              Pesquisar por projetos...
            </label>
            <div className="formsearch__wrapper-input">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon__input"
              />
              <input
                type="search"
                name="search"
                title="Entre com o nome de um projeto para pesquisa"
                className="formsearch__input"
                placeholder="Pesquise um projeto..."
                id="search"
              />
            </div>
          </div>
          <div className="formsearch__wrapper-select">
            <label id="label-select" className="formsearch__label">
              Filtrar por Tecnologias
            </label>
            <div
              className={
                isSelectOpen
                  ? "formsearch__combo formsearch__combo--open"
                  : "formsearch__combo"
              }
            >
              <div
                className="formsearch__combo-input"
                id="combo1"
                aria-expanded={isSelectOpen}
                tabIndex="0"
                aria-controls="listbox1"
                role="combobox"
                aria-haspopup="listbox"
                aria-labelledby="label-select"
                aria-activedescendant={
                  isSelectOpen ? `combo1-${optionSelected.id}` : ""
                }
                onPointerDown={(event) => {
                  handleSelectIsOpen(event);
                }}
                onKeyDown={(event) => {
                  handleKeyDown(event);
                }}
              >
                {optionSelected.option}
              </div>
              <div
                className="formsearch__combo-menu"
                role="listbox"
                id="listbox1"
                aria-labelledby="label-select"
                tabIndex="-1"
              >
                {optionsSelect.map((o, index) => {
                  return (
                    <div
                      key={index}
                      role="option"
                      id={`combo1-${index}`}
                      className={
                        o.toLowerCase() === optionSelected.option.toLowerCase()
                          ? "formsearch__combo-option formsearch__combo-option--selected"
                          : "formsearch__combo-option"
                      }
                      aria-selected={
                        o.toLowerCase() === optionSelected.option.toLowerCase()
                          ? "true"
                          : "false"
                      }
                      onPointerDown={(event) => {
                        handleOptionSelected(event);
                      }}
                      data-value={o.toLowerCase()}
                    >
                      {o}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </form>
      <ul className="listprojects" aria-label="Lista de projetos">
        {DataProjects.projects
          .sort((a, b) => b.id - a.id)
          .map((project) => {
            //item project
            return (
              <li
                className="projects__item"
                key={project.id}
                tabIndex="0"
                aria-label={
                  "Projeto " +
                  project.name +
                  " Implementado com as tecnologias " +
                  project.tecnologys.join(",")
                }
              >
                {
                  <>
                    <CardProject
                      sourceImage={`${process.env.PUBLIC_URL}/images/${project.image}`}
                      name={project.name}
                      repository={project.repository}
                      url={project.url}
                      description={project.description}
                    />
                    <ProjectContent
                      title={project.name}
                      tecnologys={project.tecnologys}
                    />
                    <p className="listprojects__description">
                      {project.description}
                    </p>
                    <ProjectLinks
                      url={project.url}
                      repository={project.repository}
                    />
                  </>
                }
              </li>
            );
          })}
      </ul>
    </>
  );
}
