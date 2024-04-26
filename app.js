const express = require('express');
const biddingsRouter = require('./src/routes/biddings.js')

async function build(){
    const app = express();

    const logMiddelware = (req, res, next) => { 
        console.log(`Request Method ${req.method} - Date : ${new Date().toLocaleString('en-GB', { hour12: true,})}`)
        next();
    }

    app.use(express.json())
    app.use(logMiddelware);

    app.use(biddingsRouter);

    app.get("/", (req, res) => {
        res.status(200)
        .send({ msg:"Mark  Pogi Talaga!" });
    });

    return app;
}

module.exports = build;