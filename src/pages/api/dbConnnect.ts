import { Connection, createConnection } from 'mongoose'
import { MONGO_URL } from '../../utils/env'

let conn: Connection = null

export const getConnection = async (): Promise<Connection> => {
    console.log('starting connection')
    if(conn == null){
        try{
            conn = await createConnection(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
            console.log('connection successfully created')
        } catch (err){
            console.log(err)
        }
        
    }
    console.log('connected to mongodb')
    return conn
}