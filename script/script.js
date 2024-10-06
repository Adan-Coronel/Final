
//DOM
let contenedorImg = document.getElementById("contenedor-img");
let botonIzq = document.getElementById("btn-izq");
let botonDer = document.getElementById("btn-der");

//mis imagenes
let imagenes1 = "../assets/pictures/Futsal/1.png"
let imagenes2= "../assets/pictures/Futsal/2.png"
let imagenes3= "../assets/pictures/Futsal/3.png"
let imagenes4= "../assets/pictures/Futsal/4.png"
let imagenes5= "../assets/pictures/Futsal/5.png"
let imagenes6= "../assets/pictures/Futsal/6.png"
let imagenes7= "../assets/pictures/Futsal/7.png"
let imagenes8= "../assets/pictures/Futsal/8.png"

let arrayImg = [imagenes1, imagenes2, imagenes3, imagenes4, imagenes5, imagenes6, imagenes7, imagenes8]




let imgElement = document.createElement("img");
imgElement.src = arrayImg[0];
contenedorImg.appendChild(imgElement);
imgElement.className="img-futsal"

let indiceActual =0;

function mostrarImagen(){
    imgElement.src=arrayImg[indiceActual];
}

//Eventos

botonDer.addEventListener('click',()=>{
    if(indiceActual===7)
        indiceActual=0;
    else
        indiceActual++;
    mostrarImagen();
});

botonIzq.addEventListener('click',()=>{
    if(indiceActual===0)
        indiceActual=7;
    else
        indiceActual--;
    mostrarImagen();
});