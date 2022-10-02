
export default function ContentRow(props) {
    return (
        <div className="section__row">
            <div className="section__data">
                <h3 className="section__heading-3">{props.heading3}</h3>
                <h4 className="section__heading-4">{props.heading4}</h4>
                <p className="section__description">{props.description}</p>
            </div>
            <div className="section__date">
                <p className="section__date-beetwen">{props.dateStart} - {props.dateEnd}</p>
            </div>
        </div>
    );
}