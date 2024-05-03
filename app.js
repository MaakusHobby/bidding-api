const express = require('express');
const biddingsRouter = require('./src/routes/biddings.js')

const KnexModel = require('./db');
const config = require('./config/index');

async function build(){
    const db = new KnexModel(config.db); // need to pass this in order for routes to use

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

    // pingDB(db);

    return app;
}

async function pingDB(db) {
    try {
      console.log('Ping start.');
      const pong = await db.ping();
      if (pong && pong.rows) {
        console.log({ pong: pong.rows }, 'DB Ping success.')
      }
    } catch (error) {
        console.log({ err: error }, 'DB Ping Error.');
    }
  }

module.exports = build;