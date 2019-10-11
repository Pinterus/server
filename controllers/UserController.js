const User = require('../models/user')
const {comparePassword} = require('../helpers/bcryptjs')
const {generateToken} = require('../helpers/jwt')

class UserController {
    static register (req,res,next) {
        let {username,password,email} = req.body
        console.log(req.body);
        
        User.create({username,password,email})
            .then(result => {
                let payload = {email:result.email, _id:result._id}
                let token = generateToken(payload)
                res.status(201).json({token,username})
            })
            .catch(next)
    }

    static login (req,res,next) {
        let {email,password} = req.body
        User.findOne({email})
            .then(user=>{
                if(user && comparePassword(password,user.password)) {
                    let payload = {email:user.email, _id:user._id}
                    let token = generateToken(payload)
                    res.status(200).json({token, username:user.username})
                } else {
                    throw {
                        msg: 'invalid email/password',
                        statusCode: 401
                    }
                }
            })
            .catch(next)
    }
}

module.exports = UserController