import clientPromise from "../../../lib/mongodb";
import { COUNTRIES } from "../../../lib/countries";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("cars");

        var statByCountry = {}
        for (let country of COUNTRIES) {
            var count = await db
                .collection('cars')
                .count({ country: country });
                
            statByCountry[country] = count;
        }

        res.json(statByCountry);
    } catch (e) {
        console.error(e);
        res.status(500);
    }
}