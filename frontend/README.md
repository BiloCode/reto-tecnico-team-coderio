# Timezone - Frontend

Aplicación web que permite agregar, actualizar, eliminar y ver zonas horarias de todo el mundo.

![](/public/preview.png)

> Preview del proyecto

## Comenzando 🚀

Clonar el repositorio desde https://github.com/BiloCode/reto-tecnico-team-coderio o ejecuntado el comando clone desde la terminal:

````ssh
$ git clone https://github.com/BiloCode/reto-tecnico-team-coderio
````

### Pre-requisitos 📋

* [Node JS](https://nodejs.org/en/) - Entorno de desarrollo
* [Yarn](https://yarnpkg.com) - Manejador de dependencias

### Instalación 🔧

Tras haber clonado el proyecto del repositorio, debera de situarse en la carpeta raiz del proyecto (frontend).

Una vez dentro debera de ejecutar el siguiente comando:
```ssh
$ yarn install
```

Luego modificar el archivo de configuracion de axios en la siguiente ruta:

````
/src/config/axios_config.ts 
````

Dentro del archivo modificar la url base de la API:
````javascript
import axios from 'axios';

export const Api = axios.create({
  baseURL : "http://localhost:4000" //API URL
});
````

> La baseURL debe coincidir con la URL de tu [Api](https://github.com/BiloCode/reto-tecnico-team-coderio/tree/master/backend).

Por ultimo para ejecutar el proyecto debera ejecutar el siguiente comando en consola
````ssh
$ yarn start
````

> Nota : La API se debera de estar ejecutando de lo contrario la aplicación no funcionara correctamente

## Despliegue 📦

Para correr la aplicacion en un entorno de produccion debera de primero generar el bundle de la aplicacion de React.

Debera de ejecutar el siguiente comando en la terminal

````ssh
$ yarn build
````

## Construido con 🛠️

* [React](https://es.reactjs.org) - El framework web usado
* [Axios](https://github.com/axios/axios) - Manejador de peticiones
* [Typescript](https://www.typescriptlang.org) - Lenguaje de programación usado
* [Redux](https://es.redux.js.org) - Manejador de Estado
* [React Icons](https://react-icons.github.io/react-icons/) - Proveedor de Iconos

#

---
⌨️ con ❤️ por [BiloCode](https://github.com/BiloCode) 😊 
