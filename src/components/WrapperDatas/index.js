import Heading3 from "../Headings/Heading3";
import Heading4 from "../Headings/Heading4";
import "./wrapperdatas.css";

export default function WrapperDatas(props) {
    return (
      <div className="wrapper-datas">
        <div className="wrapper-datas__datas">
          <Heading3>{props.heading3}</Heading3>
          <Heading4>{props.heading4}</Heading4>
          <p className="wrapper-datas__description">{props.description}</p>
        </div>
        <div className="wrapper-datas__date">
          <p className="wrapper-datas__date-beetwen">
            {props.dateStart} - {props.dateEnd}
          </p>
        </div>
      </div>
    );
}