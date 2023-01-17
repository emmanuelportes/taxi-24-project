import * as dotenv from 'dotenv';
dotenv.config({path:'./configure.env'})
import express, { Express } from 'express';
import { router } from './routes/rides-routes';
import morgan from 'morgan';

const app:Express = express();

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/rides-management/', router)

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port: ${process.env.PORT}`)
})

