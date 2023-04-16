const URL_BASE = 'https://digimon-api.vercel.app/api/digimon';
let contenido;
let hoja;
let listaImagenes;


function carta(data) {
    hoja.innerHTML = "";

    for (let temp of data) {
        hoja.innerHTML += ` 
          <div id="tarjSola" class="card mb-3 container" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${temp.img}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">"NOMBRE: ${temp.name}"</h5>
          <p class="card-text">ESPECIE: "${temp.level}"</p>
         </div>
      </div>
    </div>
  </div>
     `
    }
}

function mostrarImagenes() {
    let img = document.getElementById("galeria");
    document.getElementById("tabla_principal").style.display = "none";
    document.getElementById("hoja").style.display = "none";
    document.getElementById("galeria").style.display = "block";

    img.innerHTML = "";
    for (let temp of dataImagenes) {
        img.innerHTML += ` 
         <div id="card" class="card">
        <img src="${temp.img}" class="card-img-top" alt=" imagen ${temp.name}">
        <div class="card-body">
          <h6 class="card-title">${temp.name}</h6>
          <p class="card-text">${temp.level}</p>
        </div>
      </div>
          
  `
    }
}


function traerdigimon(digimon) {
    fetch("https://digimon-api.vercel.app/api/digimon")
       .then((respuesta) => respuesta.json())
       .then((data) => console.log(data));
        crearPokemon(data);
    };


function crearDigimon(digimon) {
    const img 
}

function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {
        contenido.innerHTML += `<tr>
            <th scope="row">${temp.name}</ th> 
            <td><img width="50px" height="75px" src="${temp.img}"></td> 
            <td>${temp.level}</td>
        </tr> `;
    }
}
$(document).ready(function () {
    contenido = document.getElementById("contenido");
    fetch(URL_BASE)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            tabla(datos);
            dataImagenes = datos;
        });
});