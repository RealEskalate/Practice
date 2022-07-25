const Comment = require("../models/comment");

const isAuthorized = async(req, res, next) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.id }).lean().populate('userId').exec();

        if (!comment) {
            // Or we could just call next() and let the getOne method handle it
          return res.status(400).end();
        }else{
            
            cmnt_usrId = comment.userId._id.toString();
            cur_userId = req.userId;

            if(cmnt_usrId === cur_userId){
                next();
            }else{
                res.status(401).send("Error: User not Authorized").end();
            }
        }
      } catch (e) {
        console.error(e);
        res.status(400).end();
      }
}

module.exports = {isAuthorized}