
import { getConnection } from '../dbConnnect'
import Signature from '../../../schemas/signature'
import CardConfig from '../../../schemas/cardconfig'

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
                res.status(400).json({success: false, error: error})
            }
        case 'POST':
            try{
                const config = await CardConfig.findOne({roomcode: roomcode})
                if(config.passcode = req.passcode){ //very minimal security, ok in this context
                    const signature = new Signature({
                        
                    })
                }
            } catch (error) {
                res.status(400).json({success: false, error: error})
            }
        
    }
}