import mongoose from 'mongoose'
const connection = { isConnected: null }

export async function getConnection() {
    if (connection.isConnected) {
        return
    }
    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    connection.isConnected = db.connections[0].readyState
}
