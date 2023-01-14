import { Schema, model } from "mongoose";
import { schedule } from "../utils/types/types";

interface IController {
    name: string,
    phone: string,
    schedule: schedule,
    address: string,
    opens24h: boolean,
    isAvailable: boolean
}


const controllerSchema = new Schema<IController>({
    name: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    schedule: { 
        open: { type: Number, required: true },
        close: { type: Number, required: true }
    },
    address: { type: String, required: true },
    opens24h: { type: Boolean, required: true },
    isAvailable: { type: Boolean, required: true }
});

const Controller = model('Controller', controllerSchema)

export {
    IController,
    Controller
}