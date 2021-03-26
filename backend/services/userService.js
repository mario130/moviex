
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User =require("../models/user");



module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    remove,
    getByUsername
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({ sub: user.id }, process.env.secret, { expiresIn: '1h' });
        return {
            ...user.toJSON(),
            token
        };
    }
}

async function getAll() {
    return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}

async function getByUsername(username) {
    return await User.findOne({username:username});
}


async function create(userParam) { // userParam => req.body
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }
    
    console.log("Create" + userParam.username);
    console.log("Create isAdmin " + userParam.username);
    const user = new User(userParam);
    console.log("Create" + user);
    
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    Object.assign(user, userParam);

    await user.save();
}

async function remove(id) {
    await User.findByIdAndRemove(id);
}