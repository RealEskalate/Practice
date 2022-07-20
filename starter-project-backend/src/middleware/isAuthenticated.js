const jwt = require('jsonwebtoken')

const isAuthenticated = async(req, res, next) => {
    console.log("token", req.cookies)
    const token = req.cookies.jwt;
    
    if (token){
        jwt.verify(token, 'jwt token', (err,decode) => {
            if (err){
                res.redirect('/login')
            }else{
                console.log(decode)
                next()
            }
        })
    }else{
        res.redirect('/login')
    }   
}

module.exports = {isAuthenticated}