



console.log("Actividad 1");
console.log("");


let primo = 3; //Math.floor(Math.random() * (min - max)); (no se como establecer el max y el min)
let es_un_numero_Primo = true;

for (let i= 2; i< primo / 2; i++) {
    if (primo % i === 0 ) {
        es_un_numero_Primo = false
    }
}

if (es_un_numero_Primo == true) {

    console.log("El numero ",primo," es un numero primo")
}

else {
    console.log("El numero ",primo, " no es un numero primo")
}



console.log("")
console.log("Actividad 2");
console.log("");

let input1 = [2,7,71,70];
let input2 = [8,16,70,130];
let resultado = 0;
let resultadoSuma =0;
let resultadoResta =0;
let resultadoMultiplicacion =0;
let resultadoDivicion =0;





for (let i= 0; i<input1.length; i++) {
  
  if (i===0) {
    resultadoSuma = input1[0] + input2[0]
  console.log(`El resultado de la suma es: ${resultadoSuma}`)
  }
  else if (i===1){
    resultadoResta = input1[1] - input2[1]
    console.log(`El resultado de la resta es: ${resultadoResta}`)
  }
  else if (i===2){
    resultadoMultiplicacion= input1[2] * input2[2]
    console.log(`El resultado de la multiplicacion es: ${resultadoMultiplicacion}`)
  }
  else if (i===3){
    resultadoDivicion= input1[3] / input2[3]
    console.log(`El resultado de la divicion es: ${resultadoDivicion}`)
  }
}



console.log("");
console.log("Actividad 3");
console.log("");


let array = [1,2,3,4,5];
let array2 = [2,3,4,5,6];




function suma (a,b){
    return a + b
}

   
console.log(suma(array[0],array2[0]));
console.log(suma(array[1],array2[1]));
console.log(suma(array[2],array2[2]));
console.log(suma(array[3],array2[3]));
console.log(suma(array[4],array2[4]));



                      


console.log("")
console.log("Actividad 4")
console.log("")

let Texto = "Hola, como estas?";
var A = 0;
var E = 0;
var I = 0;
var O = 0;
var U = 0;
var a = 0;
var e = 0;
var i = 0;
var o = 0;
var u = 0;

for (i=0; i<Texto.length; i++)
{
   console.log(Texto[i])

//    if=(Texto[i]=A){
//     A = A + 1
//     console.log(A);
//    }
};

console.log(A);

//pense en hacer un for que cuente las letras mientras recorre la cadena pero no se como

console.log("")
console.log("Actividad 5")
console.log("")

 let nombres = ["Maria Luz", "Diego", "Zeus", "Jupiter", "Zeus", "Diego"]
 let rest = nombres.filter((item,index) => {
 return nombres.indexOf(item) === index;
})

console.log(rest)


console.log("");
console.log("Actividad 6");
console.log("");

// no se como hacerlo sin reverse


//Ejercicios de DOM 


console.log("")
console.log("Actividad 1, parte DOM")
console.log("")

let botonLeft = document.getElementById("fl")
let botonRight = document.getElementById("fr")
let imagen1 = document.getElementById("im")
let imagen2 = document.getElementById("im2")
let imagen3 = document.getElementById("im3")

imagen1.classList.remove("noVisible")
imagen1.classList.add("visible")
imagen2.classList.add("noVisible")
imagen2.classList.remove("visible")
imagen3.classList.add("noVisible")
imagen3.classList.remove("visible")



function cambioImagen (){

    
    if (imagen1.classList.contains("visible")){
    imagen1.classList.add("noVisible")
    imagen1.classList.remove("visible")
    imagen2.classList.remove("noVisible")
    imagen2.classList.add("visible")
    // imagen3.classList.toggle("noVisible")
    // imagen3.classList.toggle("visible")
    }

    else if (imagen2.classList.contains("visible")){
        // imagen1.classList.add("noVisible")
        // imagen1.classList.remove("visible")
        imagen2.classList.add("noVisible")
        imagen2.classList.remove("visible")
        imagen3.classList.toggle("noVisible")
         imagen3.classList.toggle("visible")

        
    }

    else {
        imagen1.classList.remove("noVisible")
        imagen1.classList.add("visible")
        imagen2.classList.add("noVisible")
        imagen2.classList.remove("visible")
        imagen3.classList.add("noVisible")
        imagen3.classList.remove("visible")

    }
    

    

}
function cambioImagen2 (){

    if (imagen1.classList.contains("visible")){
        imagen1.classList.add("noVisible")
        imagen1.classList.remove("visible")
        // imagen2.classList.remove("noVisible")
        // imagen2.classList.add("visible")
        imagen3.classList.toggle("noVisible")
        imagen3.classList.toggle("visible")

        }
    
        else if (imagen3.classList.contains("visible")){
            // imagen1.classList.add("noVisible")
            // imagen1.classList.remove("visible")
            imagen2.classList.remove("noVisible")
            imagen2.classList.add("visible")
            imagen3.classList.toggle("noVisible")
             imagen3.classList.toggle("visible")
    
            
        }
    
        else {
            imagen1.classList.remove("noVisible")
            imagen1.classList.add("visible")
            imagen2.classList.add("noVisible")
            imagen2.classList.remove("visible")
            imagen3.classList.add("noVisible")
            imagen3.classList.remove("visible")
    
        }
        
   

}


botonLeft.addEventListener("click", cambioImagen2)
botonRight.addEventListener("click",  cambioImagen)


console.log("")
console.log("Actividad 2, Parte DOM")
console.log("")

let boton =document.getElementById("boton")
let parrafo =document.getElementById("par")

function agrandar (){
    parrafo.classList.toggle("parrafoAgrandado")
    if(parrafo.classList.contains("parrafoAgrandado")){
    boton.innerText ="Achicar Parrafo"
    } else {
        boton.innerText = "Agrandar Parrafo"
    }
};

boton.addEventListener("click", agrandar)

console.log("")
console.log("Actividad 3, parte DOM")
console.log("")

let boton2 = document.getElementById("boton2")
let box = document.getElementById("box")
let imagen = document.getElementById("imagen")
let promo = document.getElementById("prom")

function verMas() {
    box.classList.toggle("cajaAgrandada")
    boton2.classList.toggle("btn2CajaAgrandada")
    imagen.classList.toggle("img")
    imagen.classList.toggle("imgCajaAgrandada")
    promo.classList.toggle("promo")
    promo.classList.toggle("promoCajaAgrandada")    

    if(box.classList.contains("cajaAgrandada")) {
        boton2.innerText = "CERRAR"
    }
    else {
        boton2.innerText = "CLICK PARA VER"
    }
}

boton2.addEventListener("click", verMas)