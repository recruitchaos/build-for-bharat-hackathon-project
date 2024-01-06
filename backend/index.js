const express = require("express");
const app = express();

const { createUser } = require("./types");

// create User
app.post("/createUser", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createUser.safeParse(createPayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "Wrong input",
        })
        return;
    }
})