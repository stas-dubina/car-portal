import { useState, useEffect } from 'react';
import Counter from './country_counter';
import { COUNTRY_GERMANY, COUNTRY_ITALY, COUNTRY_USA } from '../../lib/countries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faCar } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    const [stats, setStats] = useState({ total: 0, countries: {} })
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
                <div>
                    <FontAwesomeIcon icon={faCar} />
                    <span className="pl-1">{stats.total}</span></div>
                <div>
                    <FontAwesomeIcon icon={faLocationPin} />
                    <span className="pl-1">2442 Rice Ave, West Sacramento, CA 95691, USA</span>
                </div>
                <div className="d-flex flex-row">
                    <Counter country={COUNTRY_GERMANY} number={stats.countries[COUNTRY_GERMANY]}></Counter>
                    <Counter country={COUNTRY_ITALY} number={stats.countries[COUNTRY_ITALY]}></Counter>
                    <Counter country={COUNTRY_USA} number={stats.countries[COUNTRY_USA]}></Counter>
                </div>
            </div>
        </div>
    );
}