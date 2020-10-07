import { getConnection } from '../dbConnnect'
import CardConfig from '../../../schemas/cardconfig'

getConnection()

export default async (req, res) => {
    const {
        query: { roomcode },
        method
    } = req
    switch (method) {
        case 'GET':
            try {
                const card = await CardConfig.findOne({roomcode: roomcode})
                if(!card){
                    return res.status(404).json( {success: false, error: 'invalid room code'},  )
                }
                res.status(200).json({success: true, data: card}) 
            } catch (error) {
                res.status(400).json({success: false, error: error })
            }
            break
        default:
            res.status(405).json({success: false, error: "ivalid operation"})
    }
}