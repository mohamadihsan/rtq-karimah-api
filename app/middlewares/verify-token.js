const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {

    try {   
        
        // get token dari request header
        const bearer = req.header('Authorization');
        if (!bearer) {
            res.status(200).json({code: 1, message: `Token is required`, data: null})
        }
        
        // hapus text Bearer dalam token
        const token = bearer.replace('Bearer ', '');
        
        // verify token
        const decoded = await jwt.verify(token, process.env.JWT_KEY);
        // bind decode ke dalam req   
        req.decoded = decoded;
        next();
        
    } catch (err) {
        // error message jika token kadaluarsa atau invalid
        res.status(200).json({code: 1, message: `${err.message}`, data: null })
    }
}

module.exports = verifyToken