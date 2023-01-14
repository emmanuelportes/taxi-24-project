import { Schema, model  } from "mongoose"
import { location } from "../utils/types/types"

interface IDriver {
    name: string,
    lastname: string,
    gender: string,
    phone: string,
    email: string,
    isAvailable: boolean,
    controller: object,
    location : location
}

const driverSchema = new Schema<IDriver>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
    gender: { type: String, required: true},
    phone: { type: String, required: true },
    email: { type: String, required: true },
    controller: { 
        type: Schema.Types.ObjectId,
        ref: 'Controller'
    },
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

