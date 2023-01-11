import { Router, Request, Response } from "express";
import DriverController from "../controllers/drivers-controller";
import DriverService from "../services/driver-service";
import geocoder from "../utils/geocoder";
import { coordinates } from "../utils/types/types";

const controller: DriverController = new DriverController(new DriverService());

const router:Router = Router();

router.get("/drivers", async (req:Request, res:Response)=>{

    const drivers = await controller.getAllDrivers();
    res.status(200).json({ drivers: drivers, count: drivers.length });

});


router.get("/drivers/:id", async( req: Request, res:Response )=>{
    res.status(200).json( await controller.getDriverById( req.params.id ));
});

router.get("/drivers/nearest-drivers/:location", async(req: Request, res: Response)=> {
    
    const location = req.params.location;
    const drivers = await controller.getNearestDrivers(location);
    res.status(200).json({drivers: drivers, count: drivers.length });

});

router.get("/drivers/controllers/", async(req: Request, res: Response) => {

})

export { 
    router
}

