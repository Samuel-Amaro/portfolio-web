import Heading2 from "../Headings/Heading2";
import Section from "../Section";
import "./interesses.css";

export default function Interesses(props) {
  return (
    <Section nameSection="interesses" refSection={props.refSectionInteresses}>
      <div className="interesses">
        {/*<h2 className="section__heading-2">Interesses</h2>*/}
        <Heading2>Interesses</Heading2>
        <p className="interesses__description">
          Além de gostar de desenvolvimento web, gosto de praticar esporte ao ar
          livre, como ciclismo utilizando minha mountain bike. E participo de
          cultos evangélicos, sou cristão.
        </p>
        <p className="interesses__description">
          No meu tempo livre gosto de assistir futebol e acompanhar as notícias
          sobre o time. Além de dedicar um pouco aos estudos da música. E
          acompanhar noticias sobre o mundo da tecnologia.
        </p>
      </div>
    </Section>
  );
}
