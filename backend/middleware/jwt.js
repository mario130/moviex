const expressJwt = require('express-jwt');
const userService = require('../services/userService');

module.exports = jwt;

function jwt() {
    const secret = process.env.secret;
    console.log(secret);
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // routes dont share in auth ( such home page )
            '/api/products',
            '/api/products/:id',
            '/api/users/authenticate',
            '/api/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};