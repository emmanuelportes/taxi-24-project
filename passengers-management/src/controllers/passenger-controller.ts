import PassengerService from "../services/passenger-service";
import Passenger from "../models/passenger";


export default class PassangerController {

    private passengerService : PassengerService;

    constructor(passengerService: PassengerService) {
        this.passengerService = new PassengerService();
    }

    public async getAllPassengers(): Promise<Array<Passenger>> {
        return await this.passengerService.getAllPassengers();
    }

}