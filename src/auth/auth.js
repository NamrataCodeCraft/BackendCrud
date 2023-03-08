const jwt   = require('jsonwebtoken')

const authantication = async (req,res,next) =>{
    try {
        const token = req.headers['x-auth-token']

        if(!token) return res.status(401).send({msg:"token required"});

        jwt.verify(token , "namratais",(data,err) => {
            if(err) return res.status(403).send({msg:err.message})
            else{
                next()
            }
        })
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports = authantication