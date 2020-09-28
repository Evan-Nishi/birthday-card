import { MONGO_URL } from '../../utils/env'
import { Connection, createConnection } from 'mongoose'

let conn: Connection = null

const connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

export const getConnection = async (): Promise<Connection> => {
    console.log('starting connection')
    if(conn == null){
        try{
            conn = createConnection(MONGO_URL, connectionConfig)
        } catch (err){
            console.log(err)
        }
        
    }
    console.log('connected to mongodb')
    return conn
}