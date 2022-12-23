import { useEffect, useState } from "react";
import Car from './car'

export default function Cars() {
    const [cars, setCars] = useState([]);

    const fetchCars = async () => {
        const response = await fetch("/api/cars");
        const data = await response.json();
        setCars(data);
    };

    useEffect(() => {
        fetchCars();
    }, [])

    return (<div className="d-flex row-content">
        {
            cars.map(car => <Car key={car._id} car={car} />)
        }
    </div>
    );

}