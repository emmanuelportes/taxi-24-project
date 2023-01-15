import * as dotenv from 'dotenv';
dotenv.config({path:'./configure.env'});
import express from 'express';
import morgan from 'morgan';
import { router } from './routes/passenger-routes';

const app = express();

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/passengers-management/', router)

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port: ${process.env.PORT}`)
});

