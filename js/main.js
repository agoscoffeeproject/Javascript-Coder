function TipoDeCafe(nombre, tamaño){
    this.nombre= nombre;
    this.tamaño= tamaño;
}

let ristretto =  new TipoDeCafe("Ristretto", "15ml")
let cafeBombon = new TipoDeCafe("Cafe Bombon", "200ml")
let frappe = new TipoDeCafe("Frappe", "300ml")
let capuccino = new TipoDeCafe("Capuccino", "250ml")



let boton_Ristretto = document.getElementById("btnRistretto")
boton_Ristretto.onclick= () => {
    let newDiv = document.createElement("div");
    newDiv.style.cssText='border:8px solid #56aaf3;padding:12px;width:100%;margin:12px 0 12px 0;font-size:15px';
    let newP = document.createTextNode("Ristretto en italiano significa “limitado o restringido”, por lo que el café ristretto no es más que un espresso corto preparado con la misma cantidad de café pero extraído con la mitad de agua. Técnicamente hablando: se extraen 15 ml de café en 15 segundos.");
    
    newDiv.appendChild(newP);
    document.getElementById("opcion1").appendChild(newDiv);

    document.getElementById("btnCerrar").onclick=() => {
        document.getElementById("opcion1").removeChild(newDiv);
    }
}

let boton_bombon = document.getElementById("btnCafeBombon")
boton_bombon.onclick= () => {
    let newDiv = document.createElement("div");
    newDiv.style.cssText='border:8px solid #56aaf3;padding:12px;width:100%;margin:12px 0 12px 0;font-size:15px';
    let newP = document.createTextNode("Su base es un café espresso al que se le añade leche condensada. Obteniendo así un café muy dulce. Primero se vierte la leche condensada en el vaso, hasta que se distribuye uniformemente. Después se vierte el café solo expreso con mucho cuidado de no mezclar esa leche condensada y el café.");
    
    newDiv.appendChild(newP);
    document.getElementById("opcion2").appendChild(newDiv);

    document.getElementById("btnCerrar2").onclick=() => {
        document.getElementById("opcion2").removeChild(newDiv);
    }

}



let boton_frappe = document.getElementById("btnFrappe")
boton_frappe.onclick= () => {
    let newDiv = document.createElement("div");
    newDiv.style.cssText='border:8px solid #56aaf3;padding:12px;width:100%;margin:12px 0 12px 0;font-size:15px';
    let newP = document.createTextNode("El frappé es un café frío en forma de batido. Es una bebida enormemente refrescante, muy sabrosa y completa. Los frappé se realizan mezclando café con hielo picado, y suele ir acompañado de nata o crema de leche, azúcar. Puede incluir esencias helado de vainilla, cacao o chocolate y caramelo.");
    
    newDiv.appendChild(newP);
    document.getElementById("opcion3").appendChild(newDiv);

    document.getElementById("btnCerrar3").onclick=() => {
        document.getElementById("opcion3").removeChild(newDiv);
    }
}
                           
let boton_capuccino = document.getElementById("btnCapuccino")
boton_capuccino.onclick= () => {
    let newDiv = document.createElement("div");
    newDiv.style.cssText='border:8px solid #56aaf3;padding:12px;width:100%;margin:12px 0 12px 0;font-size:15px';
    let newP = document.createTextNode("El café capuchino, del italiano capuccino, es una bebida con café y leche nacida en Italia, preparada con café expreso y crema de leche conseguida con vapor para darle cremosidad.");
    
    newDiv.appendChild(newP);
    document.getElementById("opcion4").appendChild(newDiv);

    document.getElementById("btnCerrar4").onclick=() => {
        document.getElementById("opcion4").removeChild(newDiv);
    }
}



//LOCAL STORAGE


document.querySelector("#boton_submit").addEventListener('click', registrar)


function registrar(){
    //event.preventDefault()
    let nuevoCafe =  new TipoDeCafe(document.querySelector('#tipoDeCafe').value, document.querySelector('#tamaño').value)
    console.log(nuevoCafe)
    function menuJSON(){
        let enJSON= JSON.stringify(ristretto);
        localStorage.setItem("ristretto", enJSON);
        let enJSON1= JSON.stringify(cafeBombon);
        localStorage.setItem("cafeBombon", enJSON1);
        let enJSON2= JSON.stringify(frappe);
        localStorage.setItem("frappe", enJSON2);
        let enJSON3= JSON.stringify(capuccino);
        localStorage.setItem("capuccino", enJSON3);
        localStorage.setItem("nuevoCafe", JSON.stringify({nombre:document.querySelector('#tipoDeCafe').value, tamaño:document.querySelector('#tamaño').value}))

        let recupero= localStorage.getItem("nuevoCafe")
        let parsero= JSON.parse(recupero)

        console.log(parsero)

        
        document.getElementById("resultado_form").innerHTML+= `<p>Hemos registrado tu sugerencia: Cafe ${document.querySelector('#tipoDeCafe').value}, con un tamaño de ${document.querySelector('#tamaño').value} ml</p>`
       document.getElementById("resultado_form").style.cssText='border:8px solid #56aaf3;padding:12px;width:100%;margin:12px 0 12px 0;font-size:15px; color:white';

}

menuJSON()
}














/* let enJSON4= JSON.stringify(nuevoCafe);
        localStorage.setItem("nuevoCafe", enJSON4);

        let sugerencia = localStorage.getItem(enJSON4)
        console.log(typeof enJSON4)

        let resultado = JSON.parse(enJSON4)
        console.log(typeof resultado)

        console.log(resultado.nombre)
        console.log(resultado.tamaño)

        //let divResultado = document.createElement("div");


        
    menuJSON()

           
    document.getElementById("resultado_form").appendChild(pResultado);

    pResultado.style.cssText='border:8px solid #56aaf3;padding:12px;width:100%;margin:12px 0 12px 0;font-size:15px';
    let pResultado = document.createTextNode(" ----------------");
    //divResultado.appendChild(pResultado);



    
} */
