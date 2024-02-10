const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config();
const apiKey = process.env.GOOGLE_CLOUD_API_KEY;
const { Translate } = require('@google-cloud/translate').v2; // Import the Translate class correctly
const translate = new Translate({ key: apiKey });

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const plainTxt = req.body.newValue;
    console.log(plainTxt);
    

    try {
        let response = await translate.detect(plainTxt);
        console.log(response);
        return res.json(response);
    }
    catch (error) {
        return res.json({ error: error.message });
    }

    console.log("reached end of /");
});

app.get("/translate", async (req, res) => {
    const plainTxt = req.body.newValue;

    try {
        let [response] = await translate.translate(plainTxt, 'en');
        return res.json(response);
    }
    catch (error) {
        return res.json({ error: error.message });
    }
});

// googleTranslate.translate(plainTxt, 'hi', (err, translation) => {
//     if(err) {
//         console.log("something is off !");
//     } else {
//         console.log("translated text : ", translation.translatedText)
//     }
// })

const port = 5173;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});