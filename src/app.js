const express = require("express");
const router = require("./routers/routers");
const app = express();
require("./db/conn")


const port = process.env.PORT || 3000

app.use(express.json());
app.use(router)




app.listen(port, () =>{
    console.log(`Connection at ${port}`)
})