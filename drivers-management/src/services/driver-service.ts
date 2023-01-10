import Database from "../config/database";
import { IDriver, Driver } from "../models/driver";


export default class DriverService {

    constructor() {
        Database.getInstance(process.env.MONGO_URI || "");
    }

    public async getAllDrivers() : Promise<Array<IDriver>> {
        return await Driver.find({}).sort({ name : 1 });
    }

    public async getDriverById(id: string): Promise<IDriver | any> {
        const driver = await Driver.findById(id);
        return driver != null? driver : {};
    }

    public async getNearestDrivers(): Promise<Array<IDriver | {}>>{
        return  [{}];
    }



}

