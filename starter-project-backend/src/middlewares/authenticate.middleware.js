<<<<<<< HEAD:starter-project-backend/src/middlewares/authenticate.middleware.js
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
=======
const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  console.log("token", req.cookies);
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "jwt token", (err, decode) => {
      if (err) {
        res.redirect("/login");
      } else {
        console.log(decode);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

module.exports = { isAuthenticated };
>>>>>>> main:starter-project-backend/src/middleware/isAuthenticated.js
