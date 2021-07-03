//Por ahora hardcodeo listas, pero las deberia objener del server
function obtenerListasTareas(){
    return [new ListaTareas(1, "Lista1"), new ListaTareas(2, "Lista2")];
  }
  class ListaTareas{
    constructor(unId, unNombre){
      this.id = unId;
      this.nombre = unNombre;
      this.tareas = [];
    }
  }
  

  function generarHtmlListas(unaListaDeListasTareas){

    unaListaDeListasTareas.forEach(unaListaTareas => {

      var linkLista = $("<a></a>");
      linkLista.attr("href", "/lista/"+unaListaTareas.id);
      var divCardLista = $("<div class='card bg-light mb-3'></div>");
      var divBodyCard = $("<div class='card-body'></div>");
      var contenidoCardLista = $("<h5 class='card-title'></h5>");
      contenidoCardLista.text(unaListaTareas.nombre);

      divBodyCard.append(contenidoCardLista);
      divCardLista.append(divBodyCard);
      linkLista.append(divCardLista);
      $("#containerListas").append(linkLista);

    });

  }

  var listasTareas;

$( document ).ready(function() {
    listasTareas = [];
    listasTareas = obtenerListasTareas();
    generarHtmlListas(listasTareas);
});