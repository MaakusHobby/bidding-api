const  build = require('./app');
const process = require('process');
require('dotenv').config();

const PORT = process.env.PORT || 3000;


const start = async () => {
    try{
        const app = await build();


        await app.listen({ port : PORT });
        console.log(`Listening on port : ${PORT}`);

    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

start();



