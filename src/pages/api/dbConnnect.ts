import mongoose from 'mongoose'
import { MONGO_URL } from '../../utils/env'
const connection = {isConnected: null}

export async function getConnection() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState
}
