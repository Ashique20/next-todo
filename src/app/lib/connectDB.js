import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        const uri = 'mongodb+srv://art-user:xDrjpxAuJ38roGZJ@cluster0.0b46zlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        })
        db = client.db('todo')
        return db
    }
    catch (error) {
        console.log(error)
    }
}