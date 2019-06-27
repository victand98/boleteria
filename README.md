# Flujo de trabajo Git
Para la creación y desarrollo de la presente práctica se ha usado [Git Flow][git flow].  
La [Descripción](#descripción) del proyecto se encuentra mas abajo.  
Los comandos de Git Flow que se usaron, son los siguientes:
![prueba](https://i.pinimg.com/564x/64/a8/05/64a8053f90aba3de788ae2a3929441c2.jpg =100x20)
# Boleteria
Proyecto de sistema de boletería usando el flujo de trabajo de [Git Flow][git flow].
  
[git flow]: https://drive.google.com/file/d/11Jhjz58o6og81mtrva-E2YmJuwCn5OhJ/view?usp=sharing
- [Descripción](#descripción)
- [Diagrama de Clases](#diagrama-de-clases)
- [Tecnologías](#tecnologías)
- [Conexión a la base de datos](#conexión-a-la-base-de-datos)
## Descripción ##
En el presente trabajo se trata de simular e flujo de trabajo dado en una cooperativa de transporte interprovincial. Es por eso que se está considerando la existencia de buses, boletos, horarios, cooperativa y cliente.  
Cuando mencionamos un registro de cliente se trata de los clientes frecuentes que quieren ser registrados para acelerar el proceso de compra de boletos.
## Diagrama de Clases ##
A continuación se presenta el diagrama de clases, sobre el cual está basado el proyecto.
![Diagrama de clases](https://github.com/victand98/boleteria/blob/develop/public/img/classDiagram.jpeg)
## Tecnologías ##
Las tecnologías escogidas para el mismo, son:<br />  
**Backend:** [JavaScript][js] junto con el framework [Node js][node], por su facil funcionamiento y actual popularidad.  
**Frontend:** Framework para [Node js][node], [Express][express] junto a su arquitectura de motor de plantillas "ejs".<br />

[node]:  https://nodejs.org/es/docs/
[js]:  https://developer.mozilla.org/es/docs/Web/JavaScript
[express]: https://expressjs.com/es/
[sequelize]: http://docs.sequelizejs.com/
[orm]: https://programarfacil.com/blog/que-es-un-orm/
  
**Base de datos:** Se ha optado por un gestor de base de datos relacional (SQL) y en este caso se trata de MySQL. Para la conexión entre backend y SGBD se usará el [orm][orm] [Sequelize][sequelize] por su facilidad de implementación y por ser el más utilizado.
## Conexión a la base de datos ##
Para eso, en la raíz del proyecto crear una carpeta llamada *config*, o de cualquier nombre distintivo, donde se debe agregar un archivo de tipo *json* que contendrá la configuración para la conexión a la base de datos.  
**Nota:** esta configuración sirve cuando se use Sequelize como orm de conexión a base de datos.
        
        {
          "development": {
            "username": "aqui va el nombre de usuario de tu base de datos",
            "password": "aqui va la contraseña de tu MySQL",
            "database": "aqui va el nombre de la base de datos",
            "host": "localhost",
            "dialect": "mysql",
            "timezone": "-05:00"
          },
          "staging": {
            "username": "root", //nombre de usuario de base de datos
            "password": "aqui va la contraseña de tu MySQL",
            "database": "aqui va el nombre de la base de datos",
            "host": "localhost",
            "dialect": "mysql",
            "timezone": "-05:00"
           }
        }
        
En la parte que dice *host* se puede agregar una **ip** donde esta alojada la base de datos  simplemente **localhost** que indica que la base de datos esta alojada en el mismo ordenador.  
Algo importante de mencionar es que tu **base de datos a usar debe estar previamente creada** para que sobre esá *Sequielize* comience a crear las tablas.  
Una vez concluida esta parte debes agregar la siguiente configuración en el index de tu proyecto, para este caso, es el archivo *app.js*

    var models = require('./app/models');
      models.sequelize.sync().then(() => {
        console.log("Se ha conectado a la base de Datos.");
      }).catch(err => {
        console.log(err, "Ocurrió un error");
    });

En la caprpeta de modelos de proyecto se debe agregar un archivo *js* para las demas configuraciones que te permitirán comunicar tu aplicación con la bases de datos.

    'use strict';
    require('dotenv').config();

    var fs = require('fs');
    var path = require('path');
    var Sequelize = require('sequelize');
    var env = process.env.NODE_ENV || 'development';
    var config = require(path.join(__dirname, '..', '..', 'config', 'config.json'))[env];
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
    var db = {};

    fs
        .readdirSync(__dirname)
        .filter(function (file) {
            return (file.indexOf('.') !== 0) && (file !== 'index.js');
        })
          .forEach(function (file) {
              var model = sequelize.import(path.join(__dirname, file));
              db[model.name] = model;
          });

        Object.keys(db).forEach(function (modelName) {
          if ('associate' in db[modelName])
            db[modelName].associate(db);
          });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    module.exports = db;
