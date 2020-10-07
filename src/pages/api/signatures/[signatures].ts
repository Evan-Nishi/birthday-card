
import { getConnection } from '../dbConnnect'
import Signature from '../../../schemas/signature'

getConnection()

export default async (req, res) => {
    const {
        query: { roomcode },
        method
    } = req

    switch (method){
        case 'GET':
            try{
                const signatures = await Signature.find({roomcode: roomcode})
                if(!signatures){
                    res.status(404).json({success: false, error: "invalid roomcode"})
                }
            } catch (error) {
                res.status(400).json({sucess: false, error: error})
            }

    }
}