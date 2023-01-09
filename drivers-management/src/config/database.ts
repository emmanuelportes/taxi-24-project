import mongoose, { Connection } from "mongoose";

export async function getConnection():Promise<void> {
    try {
       const connect = await mongoose.connect(process.env.MONGO_URI || "");
       console.log(connect.connection.host);
    } catch(err) {
        console.log(err);
        process.exit(1)
    }
}
