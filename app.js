// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let NombresAmigos = [];

function agregarAmigo() {
    let Nombre = document.getElementById('amigo').value.trim(); // .trim() sirve para eliminar espapios en blanco al inicio y al final del texto ingresado
    let listaAmigos = document.getElementById('listaAmigos');

    if (Nombre === "") {
        alert('Por favor, ingrese un nombre en el campo indicado.');
    } else {
        NombresAmigos.push(Nombre); // Agrega el nombre a la lista anteriormente creada
        console.log(NombresAmigos); // Mostrara como va quedando estructurada la lista a medida que se agreguen nombres

        // Crea un nuevo elemento <li> y lo agrega a la lista
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = Nombre;
        listaAmigos.appendChild(nuevoAmigo);

        LimpiarCaja(); // Limpia el campo de texto, cada que se ingrese un nombre
    }
}

function CambiarTextoElemento(elemento, texto) {
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function LimpiarCaja() {
    document.querySelector('#amigo').value = ''; //Función LimpiarCaja aprendida del curso
}

function sortearAmigo() {
    if (NombresAmigos.length === 0) {
        alert('No hay nombres para sortear.');
        return;
    }

    // Selecciona un nombre aleatorio de la lista
    let indiceAleatorio = Math.floor(Math.random() * NombresAmigos.length);
    let amigoSecreto = NombresAmigos[indiceAleatorio];

    // Muestra el resultado en el elemento con id 'resultado'
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}