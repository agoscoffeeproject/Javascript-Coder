console.log("1: Galería estandar")
console.log("2: Arco Frontal")
console.log("3: Arco cruzado")
console.log("4: Galería Premium")

let precioGaleriaEstandar = 38150
let precioArcoFrontal = 40875
let precioArcoCruzado = 41000
let precioGaleriaPremium = 42238

let tipoDeGaleria = Number(prompt("Ingrese el tipo de galeria que desea"))

let metroCuadrado = Number(prompt("Ingrese el tamaño de galería deseado en m2"))



function precioGaleriaTotal(){
    if(tipoDeGaleria===1){
        alert("El precio total de su galeria es: " + "$" + precioGaleriaEstandar*metroCuadrado)
    } else if (tipoDeGaleria===2){
        alert("El precio total de su galeria es: " + "$" + precioArcoFrontal*metroCuadrado)
    } else if (tipoDeGaleria===3){
        alert("El precio total de su galeria es: " + "$" + precioArcoCruzado*metroCuadrado)
    } else if (tipoDeGaleria===4){
        alert("El precio total de su galeria es: " + "$" + precioGaleriaPremium*metroCuadrado)
    } else {
        alert("Debe seleccionar una opción correcta: 1, 2, 3 o 4")
    }

}

while(metroCuadrado>=10 && metroCuadrado<=200){
    precioGaleriaTotal(); break 
} 

if(metroCuadrado<=10){
    alert("No realizamos instalaciones de galerías menores a 10 m2")
} else if(metroCuadrado>=200){
    alert("No realizamos instalaciones de galerías mayores a 200 m2")
}



