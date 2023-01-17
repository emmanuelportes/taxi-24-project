import { Ride, IRide, Rides } from "../models/ride";
import RideService from "../services/rides-service";
import axios from 'axios';

export default class RidesController {

    private rideService: RideService;

    constructor(rideService: RideService) {
        this.rideService = rideService;
    }

    public async createRide( data: IRide ): Promise<Ride> {

        const driver = await axios.get(`${process.env.DRIVER_SERVICE}/${data.origin}`);

        const ride = new Rides({ isActive: data.isActive as boolean, startDate: data.startDate as Date,
            endDate: data.endDate as Date,
            origin: data.origin,
            destiny: data.destiny,
            driver: driver.data.drivers[0]._id,
            passenger: data.passenger
        });

        return await this.rideService.createRide(ride)

    }

    public async getAllActiveRides(): Promise<Array<Ride>> {
        return await this.rideService.getAllActiveRides()
    }

}