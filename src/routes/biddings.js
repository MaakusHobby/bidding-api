const { Router } = require("express");
const { mockBidItems } = require("../utils/constants");
const { checkSchema, validationResult } = require("express-validator");
const { biddingsValidationSchema } = require("../utils/validationSchema");

const router = Router();

router.get("/biddings", (req, res) => {
    res.status(200)
    .send(mockBidItems);
})

router.get("/biddings/:id", (req, res) => {
    const {id} = req.params;
    const item = mockBidItems.find((item) => { 
        return parseInt(id) === item.id 
    } );

    res.status(200)
    .send(item);
})

router.post("/biddings", 
checkSchema(biddingsValidationSchema),
(req, res) => {
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

    const result = {
        name,
        starting_bid,
        increment
    }

    res.status(200)
    .send(result);
})


exports.biddingsRouter = router;