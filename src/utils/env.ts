import { resolve } from 'path'
import { config } from 'dotenv'

//config({ path: resolve(__dirname, '../../.env') })
config()
let path

switch(process.env.NODE_ENV){
    case 'test':
        path = `${__dirname}/../../.env.test`
        break
    case 'production':
        path = `${__dirname}/../../.env.prod`
        break
    case 'development':
        path = `${__dirname}/../../.env.dev`
        break
}

export const URL = process.env.URL
export const MONGO_URL = process.env.MONGO_URL