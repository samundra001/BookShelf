const { User } = require('../models/user');

//auth checks the cookies login in if logout cookies.auth is not same
let auth = (req,res,next) => {
    let token = req.cookies.auth; 
    //now check if token is correct in user.js userSchema.statics.findBytoken

    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({ //if user is trying to logout and there is no user
            error:true
        });

        req.token=token;
        req.user=user
        next();
    })
}

module.exports = { auth }