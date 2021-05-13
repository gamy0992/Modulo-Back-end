const http = require("http")

const server = http.createServer((request, response)=>{
    console.log("url", request.url)
    console.log("method: ", request.method)

    if(request.url == "/koders" ){
        if(request.method == "GET"){
            response.write("aqui estan los koders")
        }else if(request.method == "POST"){
            response.write("aqui puedes crear koders")
            }
    }else{
        response.write("error de errores")
    }

    response.end()
})

server.listen(8080,()=>{
    console.log("servidor escuchando en el puerto 8080")
})

//puerto 8080 para http
//puerto 443 para https
