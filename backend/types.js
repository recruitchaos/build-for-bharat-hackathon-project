const zod = require("zod");

const createUser = zod.object({
    username : zod.string(),
    email : zod.string().email(),
    password : zod.string(), 
});

module.exports = {
    createUser: createUser,
};