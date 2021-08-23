import {connectToDatabase} from "../../../lib/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();

    const athletics = await db
        .collection("Athletics")
        .find({})
        .sort({ metacritic: -1 })
        .limit(100)
        .toArray();

    res.status(200).json(athletics );
};