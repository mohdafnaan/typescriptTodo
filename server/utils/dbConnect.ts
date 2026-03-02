import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


async function dbConnect() {
    try {
      let uri:string = process.env.DBURI;
      await mongoose.connect(uri)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default dbConnect;