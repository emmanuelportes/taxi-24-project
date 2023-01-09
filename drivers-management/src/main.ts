import  express, {Request, Response} from "express";
import { getConnection } from "./config/database";
import Driver from "./models/driver";
import * as dotenv from 'dotenv';
dotenv.config({path:'./configure.env'});

getConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/drivers/", async(req: Request, res:Response)=> {
    try {
        const drivers = await Driver.find({});
        res.status(200).json({
            success: true,
            drivers: drivers
        });
        console.log(drivers)
    } catch(err:any) {
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
});

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port: ${process.env.PORT}`)
});


