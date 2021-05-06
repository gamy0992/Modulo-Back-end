//pasar por valor o por referencia
//declaracion de la funcion
function hoola(nombre){
    return`Hola ${nombre}, Saludos`
}


//llamada a funcion
const x = hoola("yair")

console.log(x)

//asignarle el valor de funcion a otra variable
const segundoHola = hoola //hoola es la funcion, se le asigna como valor a segundoHola
const res = segundoHola("manuel")//la variable segundoHola ahora se vuelve una funcion y se le asigna como valor a otra variable para que se pueda disparar 
console.log(res)//aqui se dispara la variable que tiene como valor a la funcion

()=>{
    
}