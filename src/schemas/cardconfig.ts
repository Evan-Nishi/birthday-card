import { Schema, Document, model, models } from 'mongoose'
import { IInstance }  from './instance'

export interface ICard extends Document {
    parent_instance: IInstance['roomcode']
    name: string
    date: Date
    bgcolors: [string]
}

export const CardSchema: Schema = new Schema({
    parent_instance: {type: String, required: true},
    name: {type: String, required: true},
    date: {type: Date, required: true},
    bgcolors: {type:[String], maxlength: 3},
})

const CardConfig = models.CardConfig || model<ICard>('CardConfig', CardSchema)

export default CardConfig