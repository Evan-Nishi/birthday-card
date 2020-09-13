import { Schema, Document, model } from 'mongoose'
import { IInstance }  from './instance'

export interface ICard extends Document {
    parent_instance: IInstance['_id']
    name: string
    date: Date
    bgcolors: [string]
}

export const CardSchema: Schema = new Schema({
    parent_instance: {type: Schema.Types.ObjectId, required: true, unique: true},
    name: {type: String, required: true},
    date: {type: Date, required: true},
    bgcolors: {type:[String], maxlength: 3},
})

export const CardConfig = model('cardconfig', CardSchema)