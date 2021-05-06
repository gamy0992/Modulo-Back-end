const fs = require("fs")

fs.writeFile("created.txt", "hola desde node", "utf8", (error)=>{
   if(error){
       console.error("no se pudo crear el archivo: " error)
       return
   }
    console.log("se escribio el archivo")
})


//por cada funcion deberiamos tener un script ejeutable
//readFile => read.js
//appendFile => append.js
//unlink => unlink.js
//copyFile => copyfile.js