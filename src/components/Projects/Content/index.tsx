import classNames from "classnames";
import "./projectcontent.css";
import React from "react";

type PropsTecnology = {
  className?: string,
  title: string,
  tecnologys: string[]
};

export default function ProjectContent({className, title, tecnologys}: PropsTecnology) {
    const classNameMaped = classNames("project-pontent", className);
    return (
      <div className={classNameMaped}>
        <h3 className="project-content__title">{title}</h3>
        <ul className="project-content__list-tecnologys">
            {tecnologys.map((tecnology, index) => {
                return <li className="project-content__item-tecnology" key={index}>
                    {tecnology}
                </li>
            })}
        </ul>
      </div>
    );
}