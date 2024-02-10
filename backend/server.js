const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();


const { createUser } = require("./types");
const { user } = require("./db");

// create User
app.post("/createUser", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createUser.safeParse(createPayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "Wrong input",
        })
        return;
    }
    // create user in db
    await user.create({
        username : createPayload.username,
        email : createPayload.email,
        password : createPayload.password,
    });
    res.json({
        msg: "User created"
    })
});

app.get("/users", async (req, res) => {
    const users = await user.find({});
    res.json({
        users
    })
});

app.post("/translate", async (req, res) => {
    const text = req.body.text;
    const apiKey = process.env.GOOGLE_CLOUD_API_KEY;
    const endpoint = `https://translate.googleapis.com?key=${apiKey}`;
    
});



app.listen(3000);