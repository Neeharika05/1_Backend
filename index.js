require('dotenv').config()
const express = require('express')
const app = express();
const port = 4000
app.get('/',(req,res)=>{
res.send("server is running")
})

app.listen(process.env.PORT,()=>{
console.log(`Example port is running on port ${port}`)
})