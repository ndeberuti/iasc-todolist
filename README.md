# README
TODO


# Task

## Agregar
``` Javascript
POST /task
body: {"todoListId": "id", "value":""}
response: 200  {"todoList": "todoList"}
```
Devolvemos la lista por si en el medio tuvo actualizaciones. Con el response se actualiza la UI.
> Siempre se agrega al final de la lista

## Editar
``` Javascript
PUT /task
body: {"todoListId": "id", "taskId": "id", "value": "", "check": true}
response: 200 {"todoList": "todoList"}
```
Se actualiza la UI si tener que esperar la respuesta.


## Quitar
``` Javascript
DELETE /task
body: {"todoListId": "id", "taskId": "id"}
response: 200 {"todoList": "todoList"}
```
Devolvemos la lista por si en el medio tuvo actualizaciones. Con el response se actualiza la UI.
> Borramos sin importar la ubicación en la que esté la task.


## Mover tasks
``` Javascript
PUT /tasks
body: {"todoListId": "todoList", "taskToMove": "id", "before": "id", "after": "id"}
response: 200 {"todoList": "todoList"}
```
Se envía `before` o `after` no hace falta ambos.

Devolvemos la lista por si en el medio tuvo actualizaciones. Con el response se actualiza la UI.

> Diff:
> - nextTask Id y lastTask Id de la Task a mover -> Para sacarla del lugar en donde está
> - nextTask Id y lastTask Id de las Tasks anterior y anterior a la donde se desea mover

# TodoList

## Agregar
``` Javascript
POST /list
body: {"owner": "id"}
response: 200  {"todoListId": "id"}
```

## Eliminar
``` Javascript
DELETE /list
body: {"todoListId": "id"}
response: 200  {"todoListId": "id"}
```
> Desde el back no se valida que sea el owner

## Obtener listas
``` Javascript
GET /lists
body: {}
response: 200  {"todoLists": "[TodoLists]"}
```
> Debemos devolver todo, luego desde el cliente se muestran
> las listas que coicidan con el owner o sean públicas.


## Obtener lista
``` Javascript
GET /list
body: {"todoListId": "id"}
response: 200  {"todoList": "TodoList"}
```