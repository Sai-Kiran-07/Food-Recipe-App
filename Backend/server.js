const express = require("express")
const app = express();
const dotenv= require("dotenv").config()
const connectDb = require("./config/connectionDb")
const cors = require("cors")


const PORT = process.env.PORT || 3000
connectDb()

app.use(express.json());
app.use(cors())

app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err)=>{
    console.log(`App is listening on port ${PORT}`)
})

