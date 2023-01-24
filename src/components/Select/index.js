import { useState, useRef } from "react";
import "./select.css";

export default function Index(props) {
  const refCombo = useRef(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [ignoreBlur, setIgnoreBlur] = useState(false);
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
    refCombo.current.focus();
    setIsSelectOpen(false);
  }

  // filtra um array de opções contra uma string de entrada
  // retorna um array de opções que começam com a string do filtro, independente de maiúsculas e minúsculas
  function filterOptions(filter) {
    return props.optionsSelect.filter((option) => {
      return option.toLowerCase().indexOf(filter.toLowerCase()) === 0;
    });
  }

  //verifica se o elemento está visível na porta de exibição do navegador
  function isElementInView(element) {
    let bouding = element.getBoundingClientRect();
    return (
      bouding.top >= 0 &&
      bouding.left >= 0 &&
      bouding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bouding.right <=
        (window.innerHeight || document.documentElement.clientWidth)
    );
  }

  // verifica se um elemento é atualmente rolável
  function isScrollable(element) {
    return element && element.clientHeight < element.scrollHeight;
  }

  ///garante que um determinado elemento filho esteja dentro da área de rolagem visível do pai
  // se o filho não estiver visível, role o pai
  function maintainScrollVisibility(activeElement, scrollParent) {
    const { offsetHeight, offsetTop } = activeElement;
    const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;

    const isAbove = offsetTop < scrollTop;
    const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;

    if (isAbove) {
      scrollParent.scrollTo(0, offsetTop);
    } else if (isBelow) {
      scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
    }
  }

  // retorna o índice de uma opção de uma matriz de opções, com base em uma string de pesquisa
  // se o filtro for várias iterações da mesma letra (por exemplo, "aaa"), então percorra as correspondências da primeira letra
  function getIndexByLetter(filter) {
    const firstMatch = filterOptions(filter)[0];
    if (firstMatch) {
      return props.optionsSelect.indexOf(firstMatch);
    }
  }

  function getByIndexOption() {
    return props.optionsSelect
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
        setOptionSelected({ option: props.optionsSelect[0], id: "0" });
        break;
      case selectActionsKey.last:
        setIsSelectOpen(true);
        setOptionSelected({
          option: props.optionsSelect[props.optionsSelect.length - 1],
          id: props.optionsSelect.length - 1,
        });
        break;
      case selectActionsKey.type:
        setIsSelectOpen(true);
        const searchIndex = getIndexByLetter(event.key);

        if (searchIndex >= 0) {
          setOptionSelected({
            option: props.optionsSelect[searchIndex],
            id: searchIndex,
          });
        }

        break;

      case selectActionsKey.closeSelect:
      case selectActionsKey.close:
        setIsSelectOpen(false);
        break;
      case selectActionsKey.next:
        if (getByIndexOption() < props.optionsSelect.length - 1) {
          setOptionSelected({
            option: props.optionsSelect[getByIndexOption() + 1],
            id: getByIndexOption() + 1,
          });
        }
        break;
      case selectActionsKey.previous:
        if (getByIndexOption() > 0) {
          setOptionSelected({
            option: props.optionsSelect[getByIndexOption() - 1],
            id: getByIndexOption() - 1,
          });
        }

        if (getByIndexOption() === -1) {
          setOptionSelected({
            option: props.optionsSelect[props.optionsSelect.length - 1],
            id: props.optionsSelect.length - 1,
          });
        }
        break;
      default:
        break;
    }

    if (document.querySelector(".select__combo-option--selected")) {
        if (isScrollable(document.querySelector(`[role="listbox"]`))) {
          //certifique-se de que a nova opção está à vista
          maintainScrollVisibility(
            document.querySelector(".select__combo-option--selected"),
            document.querySelector(`[role="listbox"]`)
          );
        }

        // garante que a nova opção esteja visível na tela
        // garante que a nova opção está em vista
        if (
          !isElementInView(
            document.querySelector(".select__combo-option--selected")
          )
        ) {
          document
            .querySelector(".select__combo-option--selected")
            .scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }
  }

  return (
    <>
      <label id="label-select" className="label">
        Filtrar por Tecnologias
      </label>
      <div
        className={
          isSelectOpen ? "select__combo select__combo--open" : "select__combo"
        }
      >
        <div
          className="select__combo-input"
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
          onBlur={(event) => {
            if(ignoreBlur) {
                setIgnoreBlur(false);
                return;
            }

            if(isSelectOpen) {
                setIsSelectOpen(false);
            }
          }}
          ref={refCombo}
        >
          {optionSelected.option}
        </div>
        <div
          className="select__combo-menu"
          role="listbox"
          id="listbox1"
          aria-labelledby="label-select"
          tabIndex="-1"
        >
          {props.optionsSelect.map((o, index) => {
            return (
              <div
                key={index}
                role="option"
                id={`combo1-${index}`}
                className={
                  o.toLowerCase() === optionSelected.option.toLowerCase()
                    ? "select__combo-option select__combo-option--selected"
                    : "select__combo-option"
                }
                aria-selected={
                  o.toLowerCase() === optionSelected.option.toLowerCase()
                    ? "true"
                    : "false"
                }
                onPointerDown={(event) => {
                  handleOptionSelected(event);
                }}
                onMouseDown={(event) => {
                  // Clicar em uma opção causará um evento de desfoque,
                  // mas não queremos executar a ação padrão de desfoque do teclado
                  setIgnoreBlur(true);
                }}
                data-value={o.toLowerCase()}
              >
                {o}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
