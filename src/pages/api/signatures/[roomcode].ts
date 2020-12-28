
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
                res.status(200).json({success: true, data: signatures})
            } catch (error) {
                res.status(400).json({success: false, error: error})
            }
            break
        case 'POST':
            try{
                const card = await CardConfig.findOne({roomcode: roomcode})
                if(card.passcode == req.body.passcode || !card.passcode){ //very minimal security, ok in this context no token required
                    const signature = new Signature({
                        roomcode: roomcode,
                        first_name: req.body.first,
                        last_name: req.body.last,
                        message: req.body.message
                    })

                    let validationError = signature.validateSync()
                    //assert.equal(validationError.error)

                    const data = await signature.save()
                    res.status(200).json({success: true, data: data})
                } else {
                    res.status(401).json({success: false, error:"wrong passcode"})
                }
            } catch (error) {
                res.status(400).json({success: false, error: error})
            }
            break
        default:
            res.status(405).json({success: false, error: "invalid operation"})
        
    }
}