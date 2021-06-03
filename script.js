const numero = document.getElementById("input-numero");
const btnVer = document.getElementById("btn-ver");
const img = document.getElementById("imagen");
const nombre = document.getElementById("nombre");
const episodios = document.getElementById("episodios");
const estado = document.getElementById("estado");
const especie = document.getElementById("especie");
const genero = document.getElementById("genero");
const origen = document.getElementById("origen");
const lugar = document.getElementById("lugar");

btnVer.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    const respuesta = JSON.parse(xhr.responseText);

    for (i = 0; i < respuesta.results.length; i++) {
      if (respuesta.results[i].id == numero.value) {
        img.src = respuesta.results[i].image;
        nombre.textContent = respuesta.results[i].name;
        episodios.textContent =
          "Episodios: " + respuesta.results[i].episode.length;
        estado.textContent = "Estado: " + respuesta.results[i].status;
        especie.textContent = "Especie: " + respuesta.results[i].species;
        genero.textContent = "Genero: " + respuesta.results[i].gender;
        origen.textContent = "Origen: " + respuesta.results[i].origin.name;
        lugar.textContent = "Lugar: " + respuesta.results[i].location.name;
      }
    }
  });
  xhr.open("GET", `https://rickandmortyapi.com/api/character/`);
  xhr.send();
});
