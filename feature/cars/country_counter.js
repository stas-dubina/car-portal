export default function Counter(props) {
    return (
        <div className="d-flex flex-column align-items-center header-car-block-first">
            <img className="country-icon-header" src={`image/flags/${props.country}.png`} />
            <div>{props.number}</div>
        </div>
    );
}