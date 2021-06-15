import { getConnection } from '../dbConnnect';
import CardConfig from '../../../schemas/cardconfig'
import { hash } from 'bcrypt'
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
            //let hashed = hash(req.body.password, 10, (err, hash) => {})
            try{
                const card = new CardConfig({
                    roomcode: req.body.roomcode.toLowerCase(),
                    front_link: req.body.front,
                    imlink: req.body.link,
                    name: req.body.name,
                    date: req.body.date,
                    year_old: req.body.old,
                    bgcolors: req.body.bgcolors,
                    host_email: req.body.email,
                    passcode: req.body.passcode,
                    password: req.body.password
                })

                let validationError = card.validateSync()
                if(validationError){
                    throw validationError._message
                }

                const data = await card.save()
                res.status(200).json({success: true})
                console.log('card created successfully')
            } catch (error) {
                res.status(400).json({success: false, error: (error.code == 11000 && error.name == 'MongoError' ? 'roomcode taken!' : error)})
            }
            break
        default:
            res.status(405).json({success: false, error: "invalid operation"})
    }
}