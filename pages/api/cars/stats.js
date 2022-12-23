import clientPromise from "../../../lib/mongodb";
import { COUNTRIES } from "../../../lib/countries";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("cars");

        const statByCountry = {}
        for (let country of COUNTRIES) {
            const count = await db
                .collection('cars')
                .count({ country: country });

            statByCountry[country] = count;
        }

        const total = await db
            .collection('cars')
            .count({});

        res.json({
            total: total,
            countries: statByCountry
        });
    } catch (e) {
        console.error(e);
        res.status(500);
    }
}