import axios, {AxiosResponse} from "axios";
import Database from "../utils/config/database";
import Passenger, {Passengers} from "../models/passenger";

export default class PassengerService {

    constructor(){
        Database.getInstance(process.env.MONGO_URI || '')
    }

    public async getAllPassengers(): Promise<Array<Passenger>> {
        return await Passengers.find({}).sort({ name: 1 });
    }

    public async getPassengerById(id:string): Promise<Passenger | {}> {
        const passenger = await Passengers.findById({_id:id});
        return passenger ? passenger  : {};
    }

    public async getNearestDrivers( location: string ): Promise<AxiosResponse | any> {
        return await axios.get(`${process.env.DRIVER_SERVICE_URI}/${location}`)
    }

}