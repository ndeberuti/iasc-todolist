# README

# Frontend

## Correr el proyecto

``` Bash
npm run client
```

## Direccionamiento

- Login -> `/login`
- Inicio ->  `/inicio`
- Listas -> `/listas`
- Lista -> `/lista`


# Backend

## Correr el proyecto


### LoadBalancer start
``` Bash
npm run load-balancer
```

### Public Lists Shard clean start

``` Bash
npm run start-public
```

### Public Lists Shard recovery start

``` Bash
npm run restart-public
```

### Private Lists Shard clean start

``` Bash
npm run start-private
```

### Private Lists Shard recovery start

``` Bash
npm run restart-private
```

### Recovery start

``` Bash
npm run start-private
npm run restart-private
```
> En este caso el servidor va a notificar a los clientes que se comuniquen que se cayó y necesita que se le proporcione un estado.
> Los clientes nuevos no deberían poder recuperar el estado del server

## Agregar
``` Javascript
POST /task
body: {"todoListId": "id", "value":""}
response: 200  {"todoList": todoList}
response: 409 {"message": "Fue imposible agregar la task", "todoList": todolist}
```
Devolvemos la lista por si en el medio tuvo actualizaciones. Con el response se actualiza la UI.

Siempre se agrega al final de la lista

Frente al **`409`** mostramos el contenido del campo `message` y si `todoList: null` además debemos redirgir a **`/listas`** porque la lista ha sido borrada. 


## Editar
``` Javascript
PUT /task
body: {"todoListId": "id", "taskId": "id", "value": "", "check": true}
response: 200 {"todoList": todoList}
response: 409 {"message": "Fue imposible editar la task", "todoList": todoList}
```
Se actualiza la UI si tener que esperar la respuesta.

Frente al **`409`** mostramos el contenido del campo `message` y si `todoList: null` además debemos redirgir a **`/listas`** porque la lista ha sido borrada.


## Quitar
``` Javascript
DELETE /task
body: {"todoListId": "id", "taskId": "id"}
response: 200 {"todoList": "todoList"}
response: 409 {"message": "La lista ya no existe"} 
```
Devolvemos la lista por si en el medio tuvo actualizaciones. Con el response se actualiza la UI.

Borramos sin importar la ubicación en la que esté la task.

Si falla es porque no existe la lista y frente al **`409`** mostramos el contenido del campo `message` y además debemos redirgir a **`/listas`**


## Mover tasks
``` Javascript
PUT /tasks
body: {"todoListId": "todoList", "taskId": "id", "before": "id", "after": "id"}
response: 200 {"todoList": "todoList"}
response: 409 {"message": "Fue imposible mover la task", "todoList": todoList}
```
Se envía `before` o `after`, no hacen falta ambos.

Devolvemos la lista por si en el medio tuvo actualizaciones. Con el response se actualiza la UI.

Frente al **`409`** mostramos el contenido del campo `message` y si `todoList: null` además debemos redirgir a **`/listas`** porque la lista ha sido borrada.

# TodoList

## Agregar
``` Javascript
POST /list
body: {"owner": "id", "name": "Super"}
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
response: 200  {"todoLists": [TodoLists], "store": todoListJSON }
```
> Debemos devolver todo, luego desde el cliente se muestran
> las listas que coincidan con el owner o sean públicas.
> El campo store es el backup que se queda el cliente para poder reiniciar el server.


## Obtener lista
``` Javascript
GET /list/:listId
response: 200  {"todoList": "TodoList"}
response: 409 {"message": "Fue imposible obtener la lista"}
```
Frente al **`409`** mostramos el contenido del campo `message`


# Recuperar server
``` Javascript
POST /server/restore
body: { "serverState" : "[[\"1\",\"2\"],{\"id\":\"3\",\"owner\":\"4\",\"tasks\":\"5\",\"isPublic\":false},{\"id\":\"6\",\"owner\":\"7\",\"tasks\":\"8\",\"isPublic\":true},\"1\",\"User1\",[],\"2\",\"User2\",[]]" }
response: 200  {"message": "OK"}
```
En el body hay que usar un estado stringifeado por [flatted](https://www.npmjs.com/package/flatted)
