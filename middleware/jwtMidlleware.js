const jwt = require('jsonwebtoken')

// this middleware is used to verify jsonwebtoken

const jwtMidlleware = (req,res,next) => {
    // logic
    console.log('inside jwt middleware');

    // access token
    const token = req.headers["authorization"].split(' ')[1]
   /* console.log(token); */
    
    //verify
    try {
        const jwtResponse = jwt.verify(token,'secretkey')
        console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next()

    } catch (error) {
        res.status(401).json(`authorization failed ... please login`,error)
    }

    
}

module.exports = jwtMidlleware