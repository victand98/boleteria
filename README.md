# Flujo de trabajo Git
Para la creación y desarrollo de la presente práctica se ha usado [Git Flow][git flow].  
La [Descripción](#descripción) del proyecto se encuentra mas abajo.  
Primeramente se debe crear un repositorio remoto en cualquier alojador de proyecto Git.  
- [Empezando proyecto](#empezando-proyecto)
- [Feature](#feature)
- [Release](#release)
- [Hotfix](#hotfix)
- [Flujo de trabajo GitFlow](#flujo-de-trabajo-gitflow)
- [Diferencias entre merge y rebase](#diferencias-entre-merge-y-rebase)
## Empezando proyecto ##
Los comandos de Git Flow que se usaron, son los siguientes:  
Para iniciar el el repositorio git se usa el siguiente comando:  
`git init`  
![git init](https://i.ibb.co/9r4Dh8y/Captura-de-pantalla-de-2019-06-27-12-13-11.png)  
Para la utilización del flujo de trabajo Git Flow se usa el siguiente comando:   
    `git flow init`   
Agregar *-d* para que cree todas las ramas por defecto, sin necesidad de aceptar línea a línea.  
![git flow init](https://i.ibb.co/QYY5ppk/Captura-de-pantalla-de-2019-06-27-12-14-19.png)  
Se realiza un *commit* de la configuración inicial del proyecto.  
![commit inical](https://i.ibb.co/Wk8qWdf/Commitinicial.png)  
Realizar conexión entre repositorio local y repositorio remoto, para que los cambios puedan ser accedidos por todos los colaboradores.  
![remoto](https://i.ibb.co/dJ1VMgq/Captura-de-pantalla-de-2019-06-27-17-02-00.png)  
Se envía el *commit* de la configuración inical al repositorio remoto, ejecutando:  
`git push orogin develop`  
![push](https://i.ibb.co/259zXNn/push-inicial-a-develop.png)   
## Feature ##
Ahora ya puede comenzar a crear y usar las ramas *feature*.<br> `git flow feature start nombre` para crear la rama.  <br> Terminados los cambios, se realiza una publicación de los cambios usando `git push` y en caso de no ejecutarse correctamente se debe usar `git flow feature publish nombre` que, básicamente, sirve para publicar en repositorio remoto.  <br> Para finalizar la rama basta con ejecutar `git flow feature finish nombre`, con este comando lo que internamente realiza para git son las siguientes instrucciones:  `git checkout develop`  
`git merge --no-ff feature/nombre`  
`git checkout -d feature/nombre`  
Esto consiste en enviar los cambios a *develop* y desechar la rama, dado que su vida útil ha terminado.
![feature](https://i.ibb.co/MPZCykV/featuremodelticket.png)  
## Release ##
Rama para empaquetar *develop* y enviarla a *master*  
Una vez se haya completado una versión estable, se subirá una copia a *master* 
Para crear una rama *release* se debe ejecutar `git flow release start numeroVersion`  
![release](https://i.ibb.co/RYMPyhb/crear-feature.png)  
En este punto se revisa si se necesita realizar ajustes antes de ser enviado a fase de producción. Seguido, se puede finalizar usando `got flow release finish numeroVersion`, automáticamente apareceran 3 ventanas que se deben completar (si se desea saber mas visitar [Git Flow][git flow]).  
En la primer ventana, se agrega el mensaje del merge a la rama *master*  
![r1](https://i.ibb.co/sWB4YrN/1.png)  La siguiente ventana es para agregar el mensaje para la etiqueta.  ![r2](https://i.ibb.co/YZ2kd4R/2.png)  La última ventana, es para el mensaje del merge que realiza con *develop*  ![r3](https://i.ibb.co/tDLPSz6/3.png)  Completado el proceso, nos arroja un resultado como el que se ve a continuación:  ![rf](https://i.ibb.co/rm1bmbX/finalizar-realese.png)<br>En lugar de esta línea, si no usaramos git flow, deberiamoms ejecutar:<br>`git checkout master` <br>Subir todos los cambios a *master* `git merge --no-ff release/numeroVersion`<br> Crear etiqueta `git tag -a numeroVersion` <br> `git checkout develop` <br> Realizar merge en *develop* `git merge --no-ff release/numeroVersion`<br> Con esto ya se debe eliminar la rama `git branch -d release/numeroVersion`.<br><br>Para concluir el proceso de *release*.  
Subir estos cambios al repositorio remoto:  <br>`git pull origin develop` <br>Ubicarse en *master* `git checkout master` y realizar un `git pull --alow-unrelated-histories`  ![git pull](https://i.ibb.co/5WVFJCg/pull-master.png)  
Las etiquetas deben ser publicadas usando `git push origin --tags`  ![tags](https://i.ibb.co/94rB4J3/tags.png)<br>En el repositorio remoto, aparecen las versiones estables que se hayan agregado, listas para ser descargadas. Estan identificadas con sus respectivos *tags*  ![releases](https://i.ibb.co/FwyJmWp/tags-remote.png)
## Hotfix ##
Esta rama se utiliza cuando se presentan *bugs* en la fase de producción y deben ser corregidos.
<br> Para inicializarla, basta con ejecutar: `git flow hotfix start numeroSubversion` (numeroSubversion será como etiquete a la nueva versión corregida del proyecto).<br>
![start hotfix](https://i.ibb.co/x78JpWd/hotfix-start.png)<br>
Una vez terminada la corrección se termina la rama insertando la siguiente instrucción: `git flow hotfix finish numeroSubversion` con esto aparece una ventana donde se agrega un mensaje para referenciar etiqueta.<br> ![finish](https://i.ibb.co/j4sS1Qk/message-tag-hotfix.png)<br> La siguiente ventana que aparece, realiza un merge a *develop*. <br>![merge](https://i.ibb.co/0nM5ZtL/merge-develop.png)<br>El resultado terminado esto, deberá verse similar a los que se presenta a continuación. <br>![finish](https://i.ibb.co/K0JPT4x/finish-hotfix.png)<br>Para publicarlas a repositorio remoto se repite el proceso aplicada a la rama *release* ejecutando: <br>`git push origin develop`<br>`git push origin master`<br>`git push origin --tags`<br>![tags](https://i.ibb.co/QP0mTWw/push-tags-hotfix.png)<br>
En el repositorio remoto se verá de la siguiente manera.<br>![rep](https://i.ibb.co/R9K5ZJp/new-tags-gitub.png)
## Flujo de trabajo GitFlow ##
Desde la consola se optione un árbol de trabajo a partir de `git log` que nos muestra todos los cambios realizados sobre el repositorio, pero para que aparezca un poco más ordenado se ejecuta `git log --all --decorate --oneline --graph`<br>
![git log](https://i.ibb.co/zxS8Wbq/git-log.png)<br>
Usando un software administrador de git, en este caso, [GitKraken][gitkraken], es así como se puede visualizar el flujo de trabajo <br>
![flujo git](https://i.ibb.co/4MNrLg3/git1.png)<br>![flujo git](https://i.ibb.co/4MhCxBr/git2.png)<br>![flujo git](https://i.ibb.co/txwwfmy/git3.png)<br>
## Diferencias entre merge y rebase ##
Estas instrucciones sirven para traer los commits de una rama a otra.  

| Merge | Rebase |
 | --- | --- |
|  Deja el árbol de cambios con sus respectivas ramas | Unifica las ramas que se van a combinar dejando un árbol de cambios lineal | 
| Cuando queremos unificar los cambios, es necesario realizar un commit más, el cual puede llegar a ser hasta innecesario | No tiene la necesidad de hacer un nuevo commit | 
| No pierde el historial de los commits | Si pierde el historial de los commit, lo cual puede llegar a ser una desventaja | 
| Mantiene los commits por separado | Monta los commits encima de la otra rama, sin importar la cronología | 
# Boleteria
Sistema de boletería usando el flujo de trabajo de [Git Flow][git flow].
  
[git flow]: https://drive.google.com/file/d/11Jhjz58o6og81mtrva-E2YmJuwCn5OhJ/view?usp=sharing
- [Descripción](#descripción)
- [Diagrama de Clases](#diagrama-de-clases)
- [Tecnologías](#tecnologías)
- [Conexión a la base de datos](#conexión-a-la-base-de-datos)
## Descripción ##
En el presente trabajo se trata de simular el flujo de trabajo dado en una cooperativa de transporte interprovincial. Es por eso que se está considerando la existencia de buses, boletos, horarios, cooperativa y cliente.  
Cuando mencionamos un registro de cliente se trata de los clientes frecuentes que quieren ser registrados para acelerar el proceso de compra de boletos.
## Diagrama de Clases ##
A continuación se presenta el diagrama de clases, sobre el cual está basado el proyecto.
![Diagrama de clases](https://i.ibb.co/zs73JDV/Boleter-a.png)
## Tecnologías ##
Las tecnologías escogidas para el mismo, son:<br />  
**Backend:** [JavaScript][js] junto con el framework [Node js][node], por su fácil funcionamiento y actual popularidad.  
**Frontend:** Framework para [Node js][node], [Express][express] junto a su arquitectura de motor de plantillas "ejs".<br />

[node]:  https://nodejs.org/es/docs/
[js]:  https://developer.mozilla.org/es/docs/Web/JavaScript
[express]: https://expressjs.com/es/
[sequelize]: http://docs.sequelizejs.com/
[orm]: https://programarfacil.com/blog/que-es-un-orm/
[gitkraken]: https://www.gitkraken.com/
  
**Base de datos:** Se ha optado por un gestor de base de datos relacional (SQL) y en este caso se trata de MySQL. Para la conexión entre backend y SGBD se usará el [orm][orm] [Sequelize][sequelize] por su facilidad de implementación y por ser el más utilizado.
## Conexión a la base de datos ##
Para eso, en la raíz del proyecto, crear una carpeta llamada *config*, o de cualquier nombre distintivo, donde se debe agregar un archivo de tipo *json* que contendrá la configuración para la conexión a la base de datos.  
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
        
En la parte que dice *host* se puede agregar una **ip** donde esta alojada la base de datos o simplemente **localhost** que indica que la base de datos esta alojada en el mismo ordenador.  
Algo importante de mencionar es que, tu **base de datos a usar debe estar previamente creada** para que sobre esá *Sequielize* comience a crear las tablas.  
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
