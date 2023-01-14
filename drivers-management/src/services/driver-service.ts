import Database from "../utils/config/database";
import { IController, Controller } from "../models/controller";
import { IDriver, Driver } from "../models/driver";
import { coordinates } from "../utils/types/types";
import path from "path";

export default class DriverService {

    constructor() {
        Database.getInstance(process.env.MONGO_URI || '');
    }

    public async getAllDrivers() : Promise<Array<IDriver>> {
        return await Driver.find({}).sort({ name : 1 });
    }

    public async getDriverById(id: string): Promise<IDriver | any> {
        const driver = await Driver.findOne({ _id: id });
        return driver != null? driver.populate({path:'controller'}) : {};
    }

    public async getControllers(): Promise<Array<IController>>{
        const result = await Controller.find({}).sort({ name : 1 });
        console.log("GOOOOOOT HEREEEEEEEE");
        console.log(result)
        return result ;
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

