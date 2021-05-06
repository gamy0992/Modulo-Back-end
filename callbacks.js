//callbacks 
function irAcasa(avisar){
    console.log("yendo a casa...")
    console.log("llego a casa")
    avisar()
}

function llamarAmama(){
    console.log("hola, ya llegue")
}

irAcasa(llamarAmama)
irAcasa(() =>{
    console.log("callback con funcion anonima")
})

//factory functions
function a (b){
    console.log("a")

    return function(){
        console.log("b", b)
    }
}

a("hola")()

function generadorDeValidadoresDeRoles(roles){ //roles === ["admin"]
    return function(rol){ //rol === ("admin")
        if (roles.includes(rol)){
            console.log("permitido")
        }else{
            console.log("denegado")
        }
    }
}

const soloAdmin = generadorDeValidadoresDeRoles(["admin"])
const adminUser = generadorDeValidadoresDeRoles(["admin", "user"])

soloAdmin("admin")
soloAdmin("user")

console.log("---------")

adminUser("admin")
adminUser("user")

console.log("------")

function prueba(pru){
    console.log(pru)
    return function (eba){
        console.log(eba)
    }
}
const nose = prueba("resultado")//la const nose va a tener como valor la funcion principal, el parametro pru va a tener de valor "resultado"
prueba("resultado2")//el parametro resultado2 se va a colocar en la funcion que se encuentre dentro de la funcion principal, el parametro eba va a tener como valor "resultado2"



const ejemploMuro ={
    construido:false,
    aplanado:false,
    pintado:false
}
const tiempoDeEspera = 1000
function construir(muro, callback){//recibe un parametro "muro" y una funcion que se va a ejecutar en e futuro "callback"
    setTimeout(() => {
    muro.construido = true 
    callback(false, muro)//ejecuta la funcion "callback" y le pasa "muro" como parametro
    }, tiempoDeEspera); //cuando termine de construir "muro", ejecuta la funcion callback
    
}

function aplanar(muro, callback){
    setTimeout(() => {
        muro.aplanado = true
        callback(false, muro)
    }, tiempoDeEspera);
    
}

function pintar(muro, callback){
    setTimeout(() => {
        muro.pintado = true
        callback(false, muro)
    }, tiempoDeEspera);
    return muro
}
//definimos la funcion directamente donde la necesitamos
construir(ejemploMuro, (error, muroConstruido)=>{//se pasa la definicion de la funcion "(muroConstruido)" a "callback"
    if(error){
        console.error("Error al construir")
        return//salida temprana
    }

    console.log("muro construido: ", muroConstruido)

    aplanar(muroConstruido, (error, muroAplanado)=>{
    if(error){
        console.error("Error al construir")
        return//salida temprana
    }
    console.log("muro aplanado: ", muroAplanado)

    pintar(muroAplanado, (error, muroPintado)=>{
    if(error){
        console.error("Error al construir")
        return//salida temprana
    }
    console.log("muro pintado: ", muroPintado)
 })
 })

})


//primero definimos la funcion y la pasamos
function alConstruir(error, muroConstruido){
    console.log(muroConstruido)
}

//construir(ejemploMuro, alConstruir)