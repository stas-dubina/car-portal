import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("cars");

    const cars = await db
      .collection('cars')
      .find({})
      .toArray();

    res.json(cars);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
}