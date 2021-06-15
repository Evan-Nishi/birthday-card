import { Schema, Document, model, models } from 'mongoose'

let emailRegex: RegExp = /\S+@\S+\.\S+/ //very loose but oke

export interface ICard extends Document {
    roomcode: string
    front: string
    imlink: string
    name: string
    date: Date
    year_old: number
    bgcolors: [string]
    host_email: string
    passcode: string
    password: string
}

export const CardSchema: Schema = new Schema({
    roomcode: {type: String, required: true, unique: true},
    front: {type: String, required: false},
    imlink: {type: String, required: false},
    name: {type: String, required: true},
    date: {type: Date, required: true},
    year_old: {type: Number, required: true},
    bgcolors: {type:[String], maxlength: 8},
    host_email: {type: String, required: true},
    passcode: {type: String, required: false, minlength: [5, 'passcode too short']},
    password: {type: String, required: true, minlength: [8, 'password too short']}
})

//passcode used for signing card
//password used for editing card

const CardConfig = models.Config || model<ICard>('Config', CardSchema)

export default CardConfig