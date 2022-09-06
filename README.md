# USUERS API
## Como levantar la api
Bien, primero lo que vamos a hacer es, teniendo docker instalado, parados en la carpeta raiz del proyecto, vamos a correr el comando, este comando nos va a levantar un contenedor de docker con mysql para la bd y les va a crear el volumen.
```
docker-compose up -d
```

Luego de esto ejecutamos el comando siguiente. Con esto vamos a poder instalar todos los paquetes para que funcione el proyecto.
```
npm install
```

Luego de esto ejecutamos el comando siguiente para levantar la API.
```
npm start
```
# DOC

Si entran en http://localhost:3000/ vas a ver una pagina en blanco que dice HOME. significa que la api fue levantada con exito.

## ROUTES

La siguente ruta nos traera un listado con todos los usuarios.

```
TYPE GET
http://localhost:3000/api/user
```

La siguente ruta nos traera un usuario en especifico.

```
TYPE GET
http://localhost:3000/ID/user

Donde en "ID" parasemos el id del usuario.
```

La siguente ruta nos creara un usuario.

```
TYPE POST
http://localhost:3000/api/user

Requiere un obj. json con los siguientes datos:

{
  "username": "string",
  "name": "string",
  "lastname": "string"
}
```

La siguente ruta nos actualizara los campos "name" y "lastname" de un usuario o creara un usuario en caso que no existira el "username".

```
TYPE PUT
http://localhost:3000/api/user

Requiere un obj. json con los siguientes datos:

{
  "username": "string",
  "name": "string",
  "lastname": "string"
}
```

La siguente ruta nos eliminará un usuario.

```
TYPE DELETE
http://localhost:3000/api/user

Requiere el "username" del usuario, la cual se la pasaremos mediante el body.

Ej.:
{
  "username": "string"
}

```

La siguente ruta nos actualizara los campos "name" y "lastname" de un usuario.

```
TYPE PATCH
http://localhost:3000/api/user

Requiere un obj. json con los siguientes datos:

{
  "username": "string",
  "name": "string",
  "lastname": "string"
}
```
