# README

# Frontend

## Correr el proyecto

``` Bash
npm run client
```

### Login

```
/login
```

### Inicio

```
/inicio
```

### Listas

```
/listas
```

### Lista
```
/lista
```


# Backend

## Correr el proyecto

### Clean start

``` Bash
npm run start
```

### Recovery start

``` Bash
npm run restart
```
> En este caso el servidor va a notificar a los clientes que se comuniquen que se cayó y necesita que se le proporcione un estado.
> Los clientes nuevos no deberían poder recuperar el estado del server

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
body: {"todoListId": "todoList", "taskId": "id", "before": "id", "after": "id"}
response: 200 {"todoList": "todoList"}
```
Se envía `before` o `after` no hace falta ambos.

Devolvemos la lista por si en el medio tuvo actualizaciones. Con el response se actualiza la UI.

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
response: 200  {"todoLists": "[TodoLists]"}
```
> Debemos devolver todo, luego desde el cliente se muestran
> las listas que coincidan con el owner o sean públicas.


## Obtener lista
``` Javascript
GET /list/:listId
response: 200  {"todoList": "TodoList"}
```

# Recuperar server
``` Javascript
POST /server/restore
body: { "serverState" : "[[\"1\",\"2\"],{\"id\":\"3\",\"owner\":\"4\",\"tasks\":\"5\",\"isPublic\":false},{\"id\":\"6\",\"owner\":\"7\",\"tasks\":\"8\",\"isPublic\":true},\"1\",\"User1\",[],\"2\",\"User2\",[]]" }
response: 200  {"message": "OK"}
```
> En el body hay que usar un estado stringifeado por [flatted](https://www.npmjs.com/package/flatted)
