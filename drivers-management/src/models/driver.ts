import { Schema, model } from "mongoose"
import { location } from "../misc/types"

interface IDriver {
    id: string,
    name: string,
    lastname: string,
    isAvailable: boolean,
    location : location,
}

const driverSchema = new Schema<IDriver>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
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

driverSchema.pre("save", async (next) =>{
    
} )

const Driver = model('Driver', driverSchema)

export { 
    Driver,
    IDriver
} 

