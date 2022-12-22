import { cars } from './cars'
import Car from './car'


export default function Cars() {
    return (<>
        {
            cars.map(car => <Car key={car.id} car={car} />)
        }
    </>
    );

}