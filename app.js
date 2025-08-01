// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    //Valicacion para no agregar nombres vacios
    if (nombreAmigo.trim() != "") { 
        listaNombres.push(nombreAmigo)
        console.log("Lista de amigos: ", listaNombres);
        //Limpiamos el input despues de agregar al amigo
        document.getElementById('amigo').value = "";
    }else {
        alert("Por favor, escriba un nombre, no deje en blanco.");
    }
    
}

function actualizarListaAmigos() {
    
}

function sortearAmigo() {
    //Verificar si hay nombres en la lista
    if(listaNombres.length === 0){
        alert('Primero necesita agregar amigos a la lista!');
        return; //Salir de la funcion si no hay amigos
    }else{
        //Generar un indice aleatorio con la cantidad de elementos de la listaNombres
        let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
        
        //Obtenemos el nombre de acuerdo al indice aleatorio
        let amigoSorteado = listaNombres[indiceAleatorio];
        let lblAmigoSorteado = document.getElementById('lblAmigoSorteado');
        lblAmigoSorteado.style.display = "block"
        
        console.log(amigoSorteado);
        document.getElementById('lblAmigoSorteado').textContent = "El amigo sorteado es: " + amigoSorteado + "!";
    }
}