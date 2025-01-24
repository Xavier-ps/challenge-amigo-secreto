// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// VARIABLES

let amigos = [];
let btnAgregar = document.getElementById("btnAgregar");
let elementoNombre = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

// FUNCIONES ESPECIFICAS

function validarCampoVacío(nombre) {
  let valida = false;
  
  if(nombre == ""){
    valida = false;
  } else {
    valida = true;
  }

  return valida;
}

function crearListaAmigos(amigos, listaAmigos) {
  listaAmigos.innerHTML = "";
  resultado.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const nombre = amigos[i];
    listaAmigos.innerHTML += `<li>${nombre}</li>`;
  }
}

function validarListaAmigosVacia(amigos) {
  if (amigos.length > 0) {
    valida = true;
  } else {
    valida = false;
  }

  return valida;
}

function generarNumeroAleatorio(tamanio) {
  return Math.floor(Math.random()*tamanio);
}

function sortearNombre(amigos) {
  let numero = generarNumeroAleatorio(amigos.length);
  resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigos[numero]}</li>`;
}



// CODIGO PRINCIPAL

btnAgregar.addEventListener("click", function(){
  let nombre = document.getElementById("amigo").value;

  if(validarCampoVacío(nombre)){
    amigos.push(nombre);
    elementoNombre.value = "";
  }
  else{
    alert("Por favor, inserte un nombre");
  }

  crearListaAmigos(amigos, listaAmigos);
});

btnSortear.addEventListener("click", function () {
  if (validarListaAmigosVacia(amigos)) {
    sortearNombre(amigos);

    listaAmigos.innerHTML = "";
    amigos = [];
  } else {
    alert("Por favor, primero agregar los nombres a sortear");
  }
})
