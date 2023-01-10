import  express from "express";
import morgan from "morgan";
import * as dotenv from 'dotenv';
dotenv.config({path:'./configure.env'});

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get("/drivers/", async(req: Request, res:Response)=> {
//     try {
//         const drivers = await Driver.find({});
//         res.status(200).json({
//             success: true,
//             drivers: drivers
//         });
//     } catch(err:any) {
//         console.log(err);
//         res.status(500).json({
//             error: err.message
//         })
//     }
// });

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port: ${process.env.PORT}`)
});


