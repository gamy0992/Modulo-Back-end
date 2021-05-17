//GET de lo que hay en un archivo koders.json

const express = require("express")
const server = express()
const fs = require("fs")
server.use(express.json())
const datos = JSON.parse(fs.readFileSync("koders.json"))

server.get("/koder",(request, response)=>{
    response.json(datos.koders)
})



server.listen(8080, ()=>{
    console.log("server escuchando en 8080")
})