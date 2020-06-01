/*  ********************************
 * @title Ejercicio api rick and morty
 * @version 0.0.1
 * @author Tomeu Barceló
 ******************************** */

/*
link: https://rickandmortyapi.com/api/

A través de esta API, escribir en pantalla del navegador la frase plantilla:
"Hola mi nombre es Rick Sanchez, mi especie es Human, soy originario de Earth (C-137)"

Que el usuario interesado a través de un 'prompt' pueda pedir diferentes id's.
 */

const API_URL = "https://rickandmortyapi.com/api/";
const PERSONAJES_URL = "character/:id";
const OPCIONES = { crossDomain: true };
var UNION_URL;
var eligeId;
var PERSONAJE;

function mostrarRickSanchez() { //funcion que muestra al personaje Rick Sanchez
    UNION_URL = `${API_URL}${PERSONAJES_URL.replace(":id",1)}`; //cambiamos el "id" por 1, donde se encuentra Rick
    PERSONAJE = function(personaje) { //funcion que escribe por pantalla caracteristicas de Rick
        document.write(`Hola mi nombre es ${personaje.name}, mi especie es ${personaje.species}, soy
        originario de ${personaje.origin.name} <br><hr>`);
    }
    $.get(UNION_URL, OPCIONES, PERSONAJE); //get que hace la llamada a la api
}

function charactersWithPrompt() { //funcion con prompt 
    let verMasPersonajes;
    verMasPersonajes = prompt("Desea ver mas personajes? yes/no");
    if (verMasPersonajes === "yes") {
        do {
            eligeId = prompt('Selecciona el id del personaje. Para salir escriba exit');
            UNION_URL = `${API_URL}${PERSONAJES_URL.replace(":id",eligeId)}`; //el id sera lo que introduzca el usuario
            PERSONAJE = function(personaje) {
                document.write(`Hola mi nombre es ${personaje.name}, mi especie es ${personaje.species}, soy
            originario de ${personaje.origin.name} <br>`);
            }
            $.get(UNION_URL, OPCIONES, PERSONAJE);
        } while (eligeId != "exit");
    }
}

mostrarRickSanchez();
setTimeout(() => charactersWithPrompt(), 3000);