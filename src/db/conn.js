const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/apiproject").then(()=>{
    console.log("Database Connected Successfully!!!")
}).catch(()=>{
    console.log("Database Connection Failed!!!")
})