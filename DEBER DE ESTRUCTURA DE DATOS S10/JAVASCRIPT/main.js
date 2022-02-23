const contenido = document.getElementById("contenido");

let nombre = "Enrique Garcia";
let edad = 20;


let edades = [23, 45, 2, 42, 89];

console.log(edades.length);

addContent(`<h2>${nombre}</h2><h3>${edad}</h3>`);

for(let i = 0; i < edades.length; i++){
    addContent(`<h3>La edad es de ${edades[i]} años<h3>`)
}

function addContent(newContent){
    contenido.innerHTML += newContent;
}