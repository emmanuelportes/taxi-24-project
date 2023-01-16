import * as dotenv from 'dotenv';
dotenv.config({path: './configure.env'});
import  express from "express";
import morgan from "morgan";
import { router } from "./routes/drivers-routes";

const app = express();

console.log(process.cwd());

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/drivers-management", router)

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port: ${process.env.PORT}`)
});


