const http = require("http")

const server = http.createServer((request, response)=>{
    //response.setHeader("Content-Type", "text/plain")
    response.writeHead(200, {"Content-Type": "application/json"})

    const jsonResponse = {message: "hola mundo"}
    const jsonString = JSON.stringify(jsonResponse)

    response.write(jsonString)
    response.end()
})
 
server.listen(8080, ()=>{
    console.log("el server esta listo")
})