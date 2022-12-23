import { useState } from 'react';
import Counter from './country_counter';
import { COUNTRY_GERMANY, COUNTRY_ITALY, COUNTRY_USA } from '../../lib/countries'

export default function Header() {

    const [stats, setStats] = useState({})
    const fetchStats = async () => {
        const response = await fetch("/api/cars/stats");
        const data = await response.json();
        setStats(data);
    };

    useEffect(() => {
        fetchStats();
    }, [])

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
                    <Counter country={COUNTRY_GERMANY} number={stats[COUNTRY_GERMANY]}></Counter>
                    <Counter country={COUNTRY_ITALY} number={stats[COUNTRY_ITALY]}></Counter>
                    <Counter country={COUNTRY_USA} number={stats[COUNTRY_USA]}></Counter>
                </div>
            </div>
        </div>
    );
}