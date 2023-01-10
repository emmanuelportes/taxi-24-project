import { Router, Request, Response } from "express";
import DriverController from "../controllers/drivers-controller";
import DriverService from "../services/driver-service";

const controller: DriverController = new DriverController(new DriverService());

const router:Router = Router();

router.get("/drivers/", async (req:Request, res:Response)=>{
    res.status(200).json (
        {
            drivers: await controller.getAllDrivers()
        }
    )

});


router.get("/drivers/:id", async( req: Request, res:Response )=>{

})

router.get("/drivers/nearest-drivers/:location", async(req: Request, res: Response)=>{

});

router.get("/drivers/controllers/", async(req: Request, res: Response) => {

})

export { 
    router
}

