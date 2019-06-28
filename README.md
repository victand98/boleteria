# Flujo de trabajo Git
Para la creación y desarrollo de la presente práctica se ha usado [Git Flow][git flow].  
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
  
[git flow]: https://drive.google.com/file/d/11Jhjz58o6og81mtrva-E2YmJuwCn5OhJ/view?usp=sharing
[node]:  https://nodejs.org/es/docs/
[js]:  https://developer.mozilla.org/es/docs/Web/JavaScript
[express]: https://expressjs.com/es/
[sequelize]: http://docs.sequelizejs.com/
[orm]: https://programarfacil.com/blog/que-es-un-orm/
[gitkraken]: https://www.gitkraken.com/
