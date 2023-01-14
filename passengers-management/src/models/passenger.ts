import { Prop as Property, getModelForClass, index } from '@typegoose/typegoose';
import { location } from '../utils/types/types';
 
@index({location: '2dsphere'})
export default class Passenger {

    @Property({ type: String, unique: false, required: true })
    name: string

    @Property({ type: String, unique: false, required: true })
    lastname: string

    @Property({ type: Boolean, unique: false, required: true })
    gender: boolean

    @Property({ type: String, unique: false, required: true })
    email: string

    @Property({ type: String, unique: false,  required: true })
    phone: string

    @Property({ type: Object, required: true })
    location: location

}

const Passengers = getModelForClass(Passenger)

export {
    Passengers
}

