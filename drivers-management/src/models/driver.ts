import { Schema, model } from "mongoose"

type location = {
    type: string,
    coordinates: [number]
}

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

const Driver = model<IDriver>('Driver', driverSchema);

export default Driver; 

