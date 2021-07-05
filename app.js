const express = require('express');

require("../src/db/conn")
const router = require('./routers/men');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());    


// all router
app.use(router);


app.listen(port,()=>{
    console.log(`port no . ${port}`)
})