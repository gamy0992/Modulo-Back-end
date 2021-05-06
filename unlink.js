const fs = require("fs")

fs.unlink("prueba.txt", (err)=>{
    if(err) throw err
    console.log("el contenido se ha eliminado")
})