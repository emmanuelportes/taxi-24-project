import  { prop as property, getModelForClass, Ref } from '@typegoose/typegoose';
import { Schema } from 'mongoose';

interface IRide {
    isActive?: boolean,
    startDate?: Date,
    endDate?: Date,
    origin?: string,
    destiny?: string,
    driver?: object,
    passenger?: object
}

class Ride implements IRide {
    
    @property({ type: Boolean, required: true })
    public isActive: boolean ;

    @property({ type: Date, required: true })
    public startDate: Date;

    @property({ type: Date, required: false})
    public endDate: Date;

    @property({ type: String, required: true })
    public origin: string;

    @property({ type: String, required: true})
    public destiny: string;

    @property({ ref: 'Driver' })
    public driver: Schema.Types.ObjectId

    @property({ ref: 'Passenger' })
    public passenger: Schema.Types.ObjectId

}

const Rides = getModelForClass(Ride)

export {
    Ride,
    Rides,
    IRide
}

