import { Schema, Document, model, models } from 'mongoose'

let emailRegex: RegExp = /\S+@\S+\.\S+/ //very loose but oke

export interface ICard extends Document {
    roomcode: string
    name: string
    date: Date
    bgcolors: [string]
    host_email: string
    passcode: string
}

export const CardSchema: Schema = new Schema({
    roomcode: {type: String, required: true},
    name: {type: String, required: true},
    date: {type: Date, required: true},
    bgcolors: {type:[String], maxlength: 3},
    host_email: {type: String, required: false, match: [emailRegex, 'must be a valid email']},
    passcode: {type: String, required: true, minlength: 8}
})

const CardConfig = models.CardConfig || model<ICard>('CardConfig', CardSchema)

export default CardConfig