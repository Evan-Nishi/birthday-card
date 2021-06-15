import { Schema, Document, model, models } from 'mongoose'
import { ICard } from './cardconfig';

export interface ISignature extends Document {
    roomcode: ICard['roomcode']
    first_name: string
    last_name: string
    message: string
}

export const SignatureSchema: Schema = new Schema({
    roomcode: {type: String, required: true, unique: [true, "card already signed!"]},
    first_name: {type: String, required: [true, "first name required"], maxlength: 20},
    last_name: {type: String, required: [true, "last name requried"], maxlength: 20},
    message: {type: String, required: false, maxlength: [600, "message too long"]}
})

const Signature = models.Signature || model<ISignature>('Signature', SignatureSchema)
export default Signature