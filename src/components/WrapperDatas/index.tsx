import Heading from "../Headings/";
import "./wrapperdatas.css";
import React from "react";

type PropsWrapperDatas = {
  title: string,
  subtitle: string,
  description: string,
  dateStart?: string,
  dateEnd?: string
};

export default function WrapperDatas({title, subtitle, description, dateStart, dateEnd}: PropsWrapperDatas) {
    return (
      <div className="wrapper-datas">
        <div className="wrapper-datas__datas">
          <Heading level={3}>{title}</Heading>
          <Heading level={4}>{subtitle}</Heading>
          <p className="wrapper-datas__description">{description}</p>
        </div>
        <div className="wrapper-datas__date">
          <p className="wrapper-datas__date-beetwen">
            {dateStart} - {dateEnd}
          </p>
        </div>
      </div>
    );
}