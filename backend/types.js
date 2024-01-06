const zod = require("zod");

const createUser = zod.object({
    _id : zod.string(),
    username : zod.string(),
    email : zod.string().email(),
    password : zod.string(), 
});

module.exports = {
    createUser: createUser,
};