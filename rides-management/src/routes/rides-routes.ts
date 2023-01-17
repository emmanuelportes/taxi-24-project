import RideService from "../services/rides-service";
import RidesController from "../controller/rides-controller";
import { Router, Request, Response } from "express";

const router: Router = Router();
const controller: RidesController = new RidesController(new RideService())

router.post('/rides', async(req: Request, res: Response)=>{
    const data = req.body;
    const result = await controller.createRide(data);
    res.status(200).json(result);
})

router.get('/rides/active', async(req: Request, res:Response) =>{
    res.status(200).json(await controller.getAllActiveRides())
});



export {
    router
}
