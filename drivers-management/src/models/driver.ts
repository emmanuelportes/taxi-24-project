import { Schema, model } from "mongoose"
import { location } from "../utils/types/types"

interface IDriver {
    id: object,
    name: string,
    lastname: string,
    gender: string,
    isAvailable: boolean,
    location : location
}

const driverSchema = new Schema<IDriver>({
    id: { type: Object, required: true, unique: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
    gender: { type: String, required: true},
    location: { 
        type: {
            type: String,
            enum:['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number]
        }
    }
});

driverSchema.index({location: '2dsphere'});

const Driver = model('Driver', driverSchema)

export { 
    Driver,
    IDriver
} 

