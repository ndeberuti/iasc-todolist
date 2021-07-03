class Tarea {
    constructor(id, descripcion, estasTerminada) {
        this.id = id;
        this.descripcion = descripcion;
        this.estasTerminada = estasTerminada;
        this.idSiguienteTarea = null;
        this.idAnteriorTarea = null;
    }
    terminate() {
        this.estasTerminada = true;
    }
    pasaAPendiente() {
        this.estasTerminada = false;
    }
}

class ListaTareas {
    constructor(unId, unNombre) {
        this.id = unId;
        this.nombre = unNombre;
        this.tareas = [];
    }
    obtenerUltimaTareaDeLaLista() {
        return this.tareas.find(unaTarea => unaTarea.idSiguienteTarea == null);
    }

    obtenerPrimerTareaDeLaLista() {
        return this.tareas.find(unaTarea => unaTarea.idAnteriorTarea == null && unaTarea.idSiguienteTarea != null);
    }

    obteneTareasOrdenadas() {
        var tareasOrdenadas = [];
        var primerTarea = this.obtenerPrimerTareaDeLaLista();
        var unaTarea = primerTarea;
        while (unaTarea != null) {
            tareasOrdenadas.push(unaTarea);
            unaTarea = this.obtenerTareaSegunId(unaTarea.idSiguienteTarea);
        }
        return tareasOrdenadas;
    }

    agregaLogicamente(unaTarea, unaPosicion) {
        this.eliminaLogicamente(unaTarea);
        var tareasOrdenadas = this.obteneTareasOrdenadas();

        if (unaPosicion == 1) {
            unaTarea.idAnteriorTarea = null;
            unaTarea.idSiguienteTarea = tareasOrdenadas[unaPosicion - 1].id;
            tareasOrdenadas[unaPosicion - 1].idAnteriorTarea = unaTarea.id;
        }
        else if (unaPosicion == this.tareas.length) {
            unaTarea.idSiguienteTarea = null;
            unaTarea.idAnteriorTarea = tareasOrdenadas[unaPosicion - 2].id;
            tareasOrdenadas[unaPosicion - 2].idSiguienteTarea = unaTarea.id;
        }
        else {
            unaTarea.idAnteriorTarea = tareasOrdenadas[unaPosicion - 2].id;
            unaTarea.idSiguienteTarea = tareasOrdenadas[unaPosicion - 1].id;
            tareasOrdenadas[unaPosicion - 2].idSiguienteTarea = unaTarea.id;
            tareasOrdenadas[unaPosicion - 1].idAnteriorTarea = unaTarea.id;
        }
    }

    agrega(unaTarea) {
        var ultimaTareaDeLaLista = this.obtenerUltimaTareaDeLaLista();
        if (ultimaTareaDeLaLista != null) {
            ultimaTareaDeLaLista.idSiguienteTarea = unaTarea.id;
            unaTarea.idAnteriorTarea = ultimaTareaDeLaLista.id;
        }
        this.tareas.push(unaTarea);
    }

    eliminaLogicamente(unaTarea) {
        this.tareas
            .filter(unaTareaDeLaLista => unaTareaDeLaLista.idSiguienteTarea == unaTarea.id)
            .forEach(unaTareaDeLaLista => unaTareaDeLaLista.idSiguienteTarea = unaTarea.idSiguienteTarea);
        this.tareas
            .filter(unaTareaDeLaLista => unaTareaDeLaLista.idAnteriorTarea == unaTarea.id)
            .forEach(unaTareaDeLaLista => unaTareaDeLaLista.idAnteriorTarea = unaTarea.idAnteriorTarea);
        unaTarea.idAnteriorTarea = null;
        unaTarea.idSiguienteTarea = null;
    }

    moveA(unaTarea, unaPosicion) {
        this.eliminaLogicamente(unaTarea);
        this.agregaLogicamente(unaTarea, unaPosicion);
    }

    elimina(unaTarea) {
        this.eliminaLogicamente(unaTarea);
        this.tareas = $.grep(this.tareas, function (unaTareaDeLaLista) {
            return unaTareaDeLaLista != unaTarea;
        });
    }

    obteneTareaSegunPosicion(unaPosicion) {
        return this.obteneTareasOrdenadas()[unaPosicion - 1];
    }

    obtenerTareaSegunId(unId) {
        return this.tareas.find(function (unaTarea) {
            return unaTarea.id == unId;
        });
    }
}

function obtenerNombreLista() {
    return "Lista1";
}

function obtenerIdLista() {
    return 1;
}

function obtenerIdTareaNueva() {
    return listaTareas.tareas.length.toString();
}

function generarTareaHtml(unaTarea) {

    var liTarea = $("<li></li>");
    liTarea.attr("id", "item" + unaTarea.id);
    var divTarea = $("<div class='divTarea'></div>");

    var lblTarea = $("<label class='lblTarea'></label>");
    lblTarea.attr("id", "lblTarea" + unaTarea.id);
    lblTarea.text(unaTarea.descripcion);

    divTarea.on('click', function (e) {
        if (e.target === this) {
            lblTarea.toggleClass("checked");
            unaTarea.estasTerminada = !unaTarea.estasTerminada;
        }
    });

    var imgEliminar = $("<i class='fas fa-trash-alt'></i>").click(function () {
        listaTareas.elimina(unaTarea);
        var p = $(this).parent();
        p.fadeOut(function () {
            p.remove();
            liTarea.remove();
        });
    });

    var imgEditar = $("<i class='fas fa-pen' data-toggle='modal' data-target='#modalEditar'></i>").click(function () {
        $("#txtItem").val(unaTarea.descripcion);
        $("#lblIdTareaQueSeEstaEditando").text(unaTarea.id);
    });

    divTarea.append(imgEliminar, imgEditar, lblTarea);
    liTarea.append(divTarea)
    $("#lstTareas").append(liTarea);

    if (unaTarea.estasTerminada) {
        lblTarea.toggleClass("checked");
    }
}

function generarTareasHtml() {
    listaTareas.obteneTareasOrdenadas().forEach(unaTarea => generarTareaHtml(unaTarea));
}

function removerTareasHtml() {
    $("#lstTareas").empty();
}

function actualizarTareasHtml() {
    removerTareasHtml();
    generarTareasHtml();
}

var listaTareas;

$(document).ready(function () {
    listaTareas = new ListaTareas(obtenerIdLista(), obtenerNombreLista());
    $("#nombreLista").text(listaTareas.nombre);

    $("#btnGuardar").click(function () {
        var idTareaEditada = $("#lblIdTareaQueSeEstaEditando").text();
        var tareaEditada = listaTareas.obtenerTareaSegunId(idTareaEditada);
        tareaEditada.descripcion = $("#txtItem").val();
        $("#lblTarea" + idTareaEditada).text(tareaEditada.descripcion);
    });

    $("#lstTareas").sortable({

        start: function (e, ui) {
            // creates a temporary attribute on the element with the old index
            $(this).attr('data-previndex', ui.item.index());
        },

        update: function (event, ui) {
            var posicionADondeSeMueve = ui.item.index() + 1;
            var posicionVieja = parseInt($(this).attr('data-previndex')) + 1;
            var tareaQueSeMueve = listaTareas.obteneTareaSegunPosicion(posicionVieja);
            listaTareas.moveA(tareaQueSeMueve, posicionADondeSeMueve);
        }
    });
    $("#lstTareas").disableSelection();

    $("#txtNuevaTarea").on("keyup", function (e) {
        //13  means enter button
        if (e.keyCode == 13 && $("#txtNuevaTarea").val() != "") {
            var descripcionTarea = $("#txtNuevaTarea").val();
            var estaTerminada = false;
            var idTarea = obtenerIdTareaNueva();

            var tarea = new Tarea(idTarea, descripcionTarea, estaTerminada);
            listaTareas.agrega(tarea);

            generarTareaHtml(tarea);

            $("#txtNuevaTarea").val("");
        }
    });

    $("#iconAñadirItem").click(function () {
        if ($("#txtNuevaTarea").val() != "") {
            var descripcionTarea = $("#txtNuevaTarea").val();
            var estaTerminada = false;
            var idTarea = obtenerIdTareaNueva();

            var tarea = new Tarea(idTarea, descripcionTarea, estaTerminada);
            listaTareas.agrega(tarea);

            generarTareaHtml(tarea);

            $("#txtNuevaTarea").val("");
        }
    });
});