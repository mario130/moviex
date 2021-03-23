const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
},{
collection: 'User'
}
)
userSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) { // remove id and hash from api
        delete ret._id;
        delete ret.hash;
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User