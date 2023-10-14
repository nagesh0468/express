const userModel = require('../database/models/user.module');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const sign = require('../utils/sign');

const signUp = async (req, res) => {
    try{
        const { email, name, password } = req.body;
        const hashedPassword = await bcrypt.hash(password,12);
        const new_user = await userModel.create({
            name,
            email,
            password : hashedPassword,
        });

        const token = sign({...new_user._doc}, undefined,undefined, res );
         
        res.json({
            status : 'success',
            data : token,
            message : 'welcome to the club!'
        })
       
    }catch(err){
        res.json({
            status : 'error',
            data : err,
            message : 'sorry we could not created your account',
        })

    }
}

const signIn = async (req, res) => {
    try{
     const {email, password} = req.body;
     const user = await userModel.findOne({
        email,
     }).select('+password');

     if(!user){
        return res.json({
            status : 'error',
            data : null,
            message : 'please register first!',
        })
     }

     const isPasswordCorrect = await bcrypt.compare(password, user.password);
          if(!isPasswordCorrect){
            return res.json({
                status : 'error',
                data : null,
                message : 'password is incorrect!',
            })
          }  
          
          const token = sign({...user._doc}, undefined, undefined, res);
          res.json({
            status : 'success',
            data : token,
            message : 'your logged in',
          })
    }catch(err){
             res.json({
                status : 'error',
                data : err,
                message : 'sorry we could not login you!'
             })
    }

}    

const verify = async(req,res,next) => {
    let {authorization} = req.headers || req.cookies;

    if(!authorization){
        return res.json({
            status : 'error',
            data : null,
            message : 'your are not logged in'
        })
    }

    try{
        const decoded = jwt.verify(authorization, 'ITS_VERY_IMP');
        req.currentUser = decoded;
    }catch(err){
        return res.json({
            status : 'error',
            data : null,
            message : 'Token in inValid',
        })
    }
    next();
}

module.exports = {
    signUp,
    signIn,
    verify,
}