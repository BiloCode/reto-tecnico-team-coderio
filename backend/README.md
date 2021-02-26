# Timezone - API

Una API destinada a controlar todo el flujo de datos de las zonas horarias que usara la aplicacion del frontend.

## Comenzando 🚀

Clonar el repositorio desde https://github.com/BiloCode/reto-tecnico-team-coderio o ejecuntado el comando clone desde la terminal:

````ssh
$ git clone https://github.com/BiloCode/reto-tecnico-team-coderio
````

### Pre-requisitos 📋

* [Node JS](https://nodejs.org/en/) - Entorno de desarrollo
* [MongoDB](https://www.mongodb.com/es) - Base de datos
* [Yarn](https://yarnpkg.com) - Manejador de dependencias

### Instalación 🔧

Tras haber clonado el proyecto del repositorio, debera de situarse en la carpeta raiz del proyecto.

Una vez dentro debera de ejecutar el siguiente comando:
```ssh
$ yarn install
```

Luego debera de crear un archivo .env en la raiz del proyecto(backend) y colocarle las siguientes variables de entorno:

````
MONGO_DBNAME=timezone-app
MONGO_SERVER=localhost
MONGO_USER=
MONGO_PASS=
PRODUCTION=
````

Por ultimo debera de ejecutar el siguiente comando para arrancar la api:

````ssh
$ yarn run dev
````

## Ejecutando las pruebas ⚙️

Para poder ejecutar las pruebas escriba el siguiente comando en consola:

````ssh
$ yarn test
````

> Esto le permitira visualizar el estado de las pruebas realizadas a los diferentes endpoints


## Construido con 🛠️

* [Express](https://expressjs.com/es/) - El framework web usado
* [Mongoose](https://mongoosejs.com) - ORM para manejar mongoDB
* [Typescript](https://www.typescriptlang.org) - Lenguaje de programación usado
* [Timezone API](http://worldtimeapi.org) - API externa proveedora de zonas horarias

#

---
⌨️ con ❤️ por [BiloCode](https://github.com/BiloCode) 😊 