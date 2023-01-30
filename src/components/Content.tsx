import { ISection } from "interface/ISections.interface";
import Section from "./Section";
import React from "react";
import Diviser from "./Diviser";

interface PropsContent extends ISection {
  className?: string;
  children: React.ReactNode;
}

export default function Content({
  className,
  children,
  nameSection,
}: PropsContent) {
  return (
    <>
      <Section className={className} nameSection={nameSection}>
        {children}
      </Section>
      <Diviser />
    </>
  );
}
