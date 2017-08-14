import mongoose from "mongoose";

let postSchema = new mongoose.Schema({title: String, body: String});

mongoose.model("Post", postSchema);

let db = mongoose.createConnection(process.env.DATABASE_URL, {useMongoClient: true});

module.exports = db;
