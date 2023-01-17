import mongoose, { ConnectOptions } from "mongoose";

export default class Database {

    private static instance: Database;

    private constructor(uri:string) {
        mongoose.connect(uri, { maxPoolSize: process.env.MAX_POOL_SIZE, minPoolSize: process.env.MIN_POOL_SIZE } as ConnectOptions ).catch(err => {
            throw new Error(err.message || "database refused to connect");
        })
    }

    public static getInstance(uri: string): Database {
        if(!this.instance) 
            this.instance = new Database(uri);
        
        return this.instance
    }

}


