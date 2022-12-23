import clientPromise from "../../../lib/mongodb";
const { ObjectId } = require("mongodb");

export default async (req, res) => {
  const carId = new ObjectId(req.query.pid)
  try {
    const client = await clientPromise;
    const db = client.db("cars");

    const car = await db
      .collection('cars')
      .findOne({_id: carId})

    res.json(car);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
}