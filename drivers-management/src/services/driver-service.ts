import Database from "../utils/config/database";
import { IDriver, Driver } from "../models/driver";
import { coordinates } from "../utils/types/types";

export default class DriverService {

    constructor() {
        Database.getInstance(process.env.MONGO_URI || '');
    }

    public async getAllDrivers() : Promise<Array<IDriver>> {
        return await Driver.find({}).sort({ name : 1 });
    }

    public async getDriverById(id: string): Promise<IDriver | any> {
        const driver = await Driver.findById(id);
        return driver != null? driver : {};
    }

    public async getNearestDrivers(coordinates: coordinates): Promise<Array<IDriver>> {
        return await Driver.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: coordinates
                    },
                    $maxDistance: 3000,
                    $minDistance: 0
                }
            }
        });
    }
}

