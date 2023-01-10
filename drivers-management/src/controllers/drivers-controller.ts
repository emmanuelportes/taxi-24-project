import { IDriver } from "../models/driver";
import DriverService from "../services/driver-service";

export default class DriverController {

    private driverService: DriverService;

    constructor (driverService: DriverService) {
        this.driverService = driverService;
    }

    public async getAllDrivers(): Promise<Array<IDriver>> {
        return await this.driverService.getAllDrivers();
    }

}