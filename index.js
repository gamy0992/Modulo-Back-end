const express = require("express")
const server = express()


//middleware configutar server para que reciba jsons
server.use(express.json())


server.get("/hola",(request, response)=>{
    response.write("aqui te van los koders")
    response.end()
})
server.post("/hola",(request, response)=>{
    
    //metodo para cambiar el status (200,400)
    response.status(400)
    //metodo para responder con un json con express
    response.json({message: "Hola mundo"})
})


server.post("/koders",(request, response)=>{
    //se muestra en consola lo que venga del body de postman
    console.log("body: ", request.body)

    //se muestra en consola algo especifico del objeto body, en este caso name
    console.log("body.name: ", request.body.name)

    response.json({mesaje: "ok"})
})
server.listen(8080, ()=>{
    console.log("server escuchando en 8080")
})

//endpoint es un metodo y una ruta (GET a /koders/id)

