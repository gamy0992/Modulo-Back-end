const fs = require("fs")

fs.appendFile("created.txt", "que onda raza", "utf8", (err)=>{
    if(err) throw err
    console.log("el dato se añadio")
})