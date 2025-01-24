// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// VARIABLES

let amigos = [];
let nombre = "";
let btnAgregar = document.getElementById("btnAgregar");
let elementoNombre = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");

// FUNCIONES ESPECIFICAS

function validarCampoVacío(nombre) {
  let valida = false;
  
  if(nombre == ""){
    valida = false;
  }
  else {
    valida = true;
  }

  return valida;
}

function crearListaAmigos(amigos, listaAmigos) {
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const nombre = amigos[i];
    listaAmigos.innerHTML += `<li>${nombre}</li>`;
  }
}

// CODIGO PRINCIPAL

btnAgregar.addEventListener("click", function(){
  nombre = document.getElementById("amigo").value;

  if(validarCampoVacío(nombre)){
    amigos.push(nombre);
    elementoNombre.value = "";
  }
  else{
    alert("Por favor, inserte un nombre");
  }

  crearListaAmigos(amigos, listaAmigos);
});

