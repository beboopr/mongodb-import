import { MongoClient } from "mongodb";

import { uri } from "./credentials.js";

const client = new MongoClient(uri);
const db = client.db("sample_training")
const routesCollection = db.collection("routes")

//adding a route on db
const NewRoute = {
    airline: "Bocacode Air",
    src_airport: "AZI",
    dst_airport: ["KBV"],
    stops: 5,
    approval: "Your mom",
};

const results = await routesCollection.insertOne(NewRoute)
console.log("Results of insert", results)

// To Update List Only
// const updateQuery = { _id: new ObjectId("6345ca7d4eab27f75270d5c6") };
// const update = { $set: {title: "the new bocacode story"}}
// const results = await moviesCollection.findOneAndUpdate(updateQuery,update);
// console.log(results)