import { getConnection } from '../dbConnnect';
import CardConfig, {ICard} from '../../../schemas/cardconfig'

getConnection()

export default async (req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            try {
                const configs = await CardConfig.find({})
                res.status(200).json({success: true, data: configs})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            try{
                const card: ICard = new CardConfig({
                    roomcode: req.body.roomcode,
                    name: req.body.name,
                    date: req.body.date,
                    bgcolors: req.body.colors,
                    host_email: req.body.email,
                    passcode: req.body.passcode,
                })

                const data = await card.save()

                res.status(200).json({success: true, data: data})
            } catch (error) {
                res.status(400).json({success: true, error: (error.code == 11000 && error.name == 'MongoError' ? 'roomcode taken!' : error)})
            }
            break
    }
}