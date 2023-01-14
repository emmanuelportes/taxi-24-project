import { Router, Response, Request } from "express";
import PassangerController from "../controllers/passenger-controller";
import PassengerService from "../services/passenger-service";

const router: Router = Router();
const controller: PassangerController = new PassangerController(new PassengerService());

router.get("/passengers", async(req: Request, res: Response)=> {
    const result = await controller.getAllPassengers();
    res.status(200).json({
        passengers: result,
        count: result.length
    });
})

export {
    router
}