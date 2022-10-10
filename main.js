function TipoDeCafe(nombre, tamaño, leche, canela, chocolate){
    this.nombre= nombre;
    this.tamaño= tamaño;
    this.leche= leche;
    this.canela= canela;
    this.chocolate= chocolate;
}

let espresso =  new TipoDeCafe("Espresso", "30ml", false, false, false)
let capuccino = new TipoDeCafe("Capuccino", "250ml", true, true, false)
let mocha = new TipoDeCafe("Mocha", "250ml", true, false, true)

let cafeteria = [espresso, capuccino, mocha];



function hacerEspresso(){
    document.write('<img src="img/espresso.jpg">')
    console.log(espresso)

}

function hacerCapuccino(){
    document.write('<img src="img/capuccino2.webp">')
    console.log(capuccino)

}

function hacerMocha(){
    document.write('<img src="img/cafemocha.webp">')
    console.log(mocha)
}

alert ("Seleccione el cafe de su agrado")
let seleccion= prompt("1: Espresso, 2: Capuccino, 3: Mocha")
alert("En la consola podrá observar los ingredientes necesarios")

if(seleccion==1|2|3){
console.log("--------------------------------------------------------")
console.log("-----------El café que ha seleccionado es:--------------")
console.log("--------------------------------------------------------")
}




if(seleccion==1){
    hacerEspresso()
} else if(seleccion==2){
    hacerCapuccino()
} else if (seleccion==3){
    hacerMocha()
} else {
    alert("Debe seleccionar unas de las opciones (1, 2 o 3)")
}

let jugos = ["naranja", "limonada", "pomelo"]

let carta = cafeteria.concat(jugos)

console.log("--------------------------------------------------------")
console.log("---------Nuestras opciones de la carta incluyen---------")
console.log("--------------------------------------------------------")


carta.forEach(function(elemento) {
    console.log(elemento);
})








