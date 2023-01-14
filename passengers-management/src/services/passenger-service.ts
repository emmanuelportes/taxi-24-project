import Database from "../utils/config/database";
import Passenger, {Passengers} from "../models/passenger";

export default class PassengerService {

    constructor(){
        Database.getInstance(process.env.MONGO_URI || '')
    }

    public async getAllPassengers(): Promise<Array<Passenger>> {
        return await Passengers.find({}).sort({ name: 1 });
    }

    

}