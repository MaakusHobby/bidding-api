const { Router } = require("express");
const  {mockBidItems}  = require("../utils/constants");
const { checkSchema, validationResult } = require("express-validator");
const  {biddingsValidationSchema}  = require("../utils/validationSchema");

const router = Router();

const config = require('../../config/index');

/* FOR EXPERIMENT USE ONLY will use Knex and Objection later*/
const pg = require('pg')
const { Client } = pg;

const tableName = 'biddings'


function getClient()
{
    const client = new Client({
        host: config.db.host,
        port: config.db.port,
        database: config.db.database,
        user: config.db.user,
        password: config.db.password
    })

    return client;
}
/* FOR EXPERIMENT USE ONLY will use Knex and Objection later*/


router.get("/biddings", async (req, res) => {
    let result;

    try{
        const client = getClient();
        await client.connect();
        result = await client.query(`SELECT * FROM ${tableName} `);
    }catch(e)
    {
        console.log(e);
        return res.status(500)
    }

    res.status(200)
    .send(result.rows);
})

router.get("/biddings/:id", async (req, res) => {
    const {id} = req.params;

    try{
        const client = getClient();
        await client.connect();
        const result = await client.query(`SELECT * FROM ${tableName} `);

        let item;

        item = result.rows.find((item) => { 
            return parseInt(id) === item.id 
        } );

        if(item)
        {
            res.status(200)
            .send(item);
        }else{
            res.status(404)
            .send({message: "Not Found"});
        }
    
      
    }catch(e)
    {
        console.log(e);
        return res.status(500)
    }

})

router.post("/biddings", 
checkSchema(biddingsValidationSchema),
async (req, res) => {
    const errorResult = validationResult(req);
    console.log(errorResult.errors);

    if(!errorResult.isEmpty())
    {
        let fieldErrors = errorResult.array().map( (item) => {
            let temp = { 
                field : item.path, 
                error : item.msg };
            return temp;
        } );

        return res.status(400).send(fieldErrors);
    }

    const {name, starting_bid, increment} = req.body;

    try{
        const client = getClient();

        await client.connect();
        await client.query(`INSERT INTO  ${tableName}(name,starting_bid,increment) VALUES ('${name}',${starting_bid},${increment})`);

         const result = {
            name,
            starting_bid,
            increment
        }
    
        res.status(200)
        .send(result);

    }catch(e)
    {
        console.log(e);
        return res.status(500)
    }

 
})


module.exports = router;