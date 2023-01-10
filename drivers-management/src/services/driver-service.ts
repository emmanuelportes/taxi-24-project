import Database from "../config/database";
import { IDriver, Driver } from "../models/driver";


export default class DriverService {

    private database: Database;

    constructor(database: Database) {
        this.database = Database.getInstance();
    }

    public async getAllDrivers() : Promise<Array<IDriver>> {
        return await Driver.find({}).sort({ name : 1 });
    }

    public async getDriverById(id: string): Promise<IDriver | any> {
        const driver = await Driver.findById(id);
        return driver != null? driver : {};
    }

    


}