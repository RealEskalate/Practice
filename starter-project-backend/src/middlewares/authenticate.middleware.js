const jwt = require('jsonwebtoken')
const secret = 'pass@besp'

const isAuthenticated = async(req, res, next) => {
    const token = req.cookies.jwt;
    
    if (token){
        jwt.verify(token, `${secret}`, (err,decode) => {
            if (err){
                res.redirect('/api/v1/user/login')
            }else{
                req.userId = decode._id
                next()
            }
        })
    }else{
        res.redirect('/api/v1/user/login')
    }   
}

module.exports = isAuthenticated