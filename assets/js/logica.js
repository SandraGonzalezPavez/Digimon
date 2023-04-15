const URL_BASE = 'https://digimon-api.vercel.app/api/digimon';

let contenido;

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