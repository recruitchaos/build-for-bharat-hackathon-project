const mongoose  = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin123@cluster0.bs6zzcn.mongodb.net/users");

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
})

const user = mongoose.model('users', userSchema);

module.exports = {
    user
};