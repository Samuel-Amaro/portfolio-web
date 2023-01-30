import classNames from "classnames";
import "./section.css";
import React from "react";
import { ISection } from "interface/ISections.interface";

interface PropsSection extends ISection {
  className?: string;
  children: React.ReactNode;
}

export default function Section({className, nameSection, children}: PropsSection) {
    const classNamesMaped = classNames("section", className);
    return (
      <section
        className={classNamesMaped}
        id={nameSection}
      >
        {children}
      </section>
    );
}