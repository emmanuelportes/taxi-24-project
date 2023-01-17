import { IRide, Ride, Rides } from "../models/ride";
import Database from "../utils/config/database";

export default class RideService {

    constructor() {
        Database.getInstance(process.env.MONGO_URI || '')
    }

    public async createRide(data:Ride): Promise<Ride> {
        return await new Rides(data).save();
    }

    public async getAllActiveRides(): Promise<Array<Ride>> {
        return await Rides.find({ isActive: false }).sort({})
    }

    // public async completeRide(data: IRide): Promise<Ride> {
    //     return await Rides.updateOne({})
    // }



}