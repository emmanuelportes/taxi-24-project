import { IDriver } from "../models/driver";
import DriverService from "../services/driver-service";
import { coordinates } from "../utils/types/types";
import geocoder from "../utils/geocoder";

export default class DriverController {

    private driverService: DriverService;

    constructor (driverService: DriverService) {
        this.driverService = driverService;
    }

    public async getAllDrivers(): Promise<Array<IDriver>> {
        return await this.driverService.getAllDrivers();
    }

    public async getDriverById( id: string ): Promise<IDriver> {
        return await this.driverService.getDriverById(id);
    }

    public async getNearestDrivers( location: string ): Promise<Array<IDriver>> {
        const result = await geocoder.geocode(location);
        const formattedcoordinates:coordinates = [result[0].longitude || 0, result[0].latitude || 1 ];
        console.log(formattedcoordinates)
        return await this.driverService.getNearestDrivers(formattedcoordinates);
    }
}