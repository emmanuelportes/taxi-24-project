import mongoose from "mongoose";

export default class Database {

    private static instance: Database;

    private constructor() { }

    public static getInstance(): Database {
        
        if(!this.instance) 
            this.instance = new Database();
        
        return this.instance
    }

    public getConnection( uri: string ): void {
        mongoose.connect(uri).catch( err => {
            console.log(err);
            throw new Error(err.message || "database refused to connect");
        });   
    }

}

