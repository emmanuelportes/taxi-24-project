import { Router, Response, Request } from "express";
import PassengerService from "../services/passenger-service";
import PassangerController from "../controllers/passenger-controller";

const router: Router = Router();
const controller: PassangerController = new PassangerController(new PassengerService());

router.get("/passengers", async(req: Request, res: Response)=> {

    const result = await controller.getAllPassengers();
    res.status(200).json({passengers: result, count: result.length });

});

router.get('/passengers/:id', async(req: Request, res: Response)=> {

    const id = req.params.id;
    const passenger = await controller.getPassengerById(id);
    res.status(200).json({success: true, passenger: passenger});

});

router.get('/request-ride/:location', async(req:Request, res:Response)=> {

    const location : string = req.params.location;
    const drivers = await controller.getNearestDrivers(location);
    res.status(200).json({success: true, drivers});

});

export {
    router
}