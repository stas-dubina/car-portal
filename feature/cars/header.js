import { cars, COUNTRY_GERMANY, COUNTRY_ITALY, COUNTRY_USA} from './cars'
import Counter from './country_counter';

function countByCountry(country) {
    let counter = 0
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i]
        if (car.country === country) {
            counter += 1
        }
    }
    return counter
}


export default function Header() {
    return (
        <div className="d-flex flex-row">
            <div>
                <img className="round" src="image/avatar-bb.jpg" />
            </div>
            <div className="d-flex flex-column pl-2 justify-content-center">
                <div><i className="fa-solid fa-car"></i><span className="pl-1">{cars.length}</span></div>
                <div><i className="fa-solid fa-location-pin"></i><span className="pl-1">2442 Rice Ave, West Sacramento, CA 95691,
                    USA</span></div>
                <div className="d-flex flex-row">
                    <Counter country={COUNTRY_GERMANY} number={countByCountry(COUNTRY_GERMANY)}></Counter>
                    <Counter country={COUNTRY_ITALY} number={countByCountry(COUNTRY_ITALY)}></Counter>
                    <Counter country={COUNTRY_USA} number={countByCountry(COUNTRY_USA)}></Counter>
                </div>
            </div>
        </div>
    );
}