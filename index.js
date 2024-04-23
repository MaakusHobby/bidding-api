const {biddingsRouter} = require('./src/routes/biddings.js')

const process = require('process')
require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000;

const logMiddelware = (req, res, next) => { 
    console.log(`Request Method ${req.method} - Date : ${new Date().toLocaleString('en-GB', { hour12: true,})}`)
    next();
}

app.use(logMiddelware);

app.use(biddingsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
})

app.get("/", (req, res) => {
    res.status(200)
    .send({ msg:"Mark  Pogi Talaga!" });
});

