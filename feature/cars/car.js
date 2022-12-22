export default function Car(props) {
    const car = props.car;
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={`image/cars/${car.img}`} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title"><img className="country-icon" src={`image/flags/${car.country}.png`} /><span
                    className="align-middle">{car.title} {car.year}</span></h5>
                <ul className="list-unstyled">
                    <li className="card-text-item-list">
                        <i className="fa-solid fa-charging-station"></i><span className="card-text-item-text">{car.fuel}</span>
                    </li>
                    <li className="card-text-item-list">
                        <i className="fa-brands fa-superpowers"></i><span className="card-text-item-text">{car.hp} hp</span>
                    </li>
                </ul>
                <a href="car.html?id=${car.id}" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}