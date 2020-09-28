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
                const card = await CardConfig.find({parent_instance: roomcode})
                console.log(card)
                if(!card){
                    return res.status(400).json( {success: false, error: 'invalid room code'},  )
                }
                res.status(200).json({success: true, data: card}) 
            } catch (error) {
                res.status(400).json({success: false, error: error })
            }
            break
        case 'PUT':
            try {
                const card = new CardConfig({
                    parent_instance: roomcode,
                    name: req.body.name,
                    date: req.body.date,
                    bgcolors: req.body.colors
                })
                
            } catch (error) {
                res.status(400).json({success: false, error: error})
            }
            break
    }
}

/*        case 'DELETE':
            //add some auth n stuff later
            try{
                const deleted = CardConfig.findOneAndDelete({parent_instance: req.body.roomcode})
                if(!deleted){
                    return res.status(400).json( {success: false} )
                }
                res.status(200).json({success: true})
            } catch (error) {
                res.status(400).json({success: false})
            }
        case 'POST':
            //add auth later, just for testing purposes
            try{

            } catch (error) {

            }
*/