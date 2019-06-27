# Boleteria
Proyecto de sistema de boletería usando el flujo de trabajo de [Git Flow][lenguajes].

[lenguajes]: https://drive.google.com/file/d/11Jhjz58o6og81mtrva-E2YmJuwCn5OhJ/view?usp=sharing
![Diagrama de clases](https://github.com/victand98/boleteria/blob/develop/public/img/classDiagram.jpeg)
## Tecnologías ##
Las tecnologías escogidas para el mismo, son:<br />  
**Backend:** [JavaScript][js] junto con el framework [Node js][node], por su facil funcionamiento y actual popularidad.  
**Frontend:** Framework para [Node js][node], [Express][express] junto a su arquitectura de motor de plantillas "ejs".<br />

[node]:  https://nodejs.org/es/docs/
[js]:  https://developer.mozilla.org/es/docs/Web/JavaScript
[express]: https://expressjs.com/es/
[sequelize]: http://docs.sequelizejs.com/
  
**Base de datos:** Se ha optado por un gestor de base de datos relacional (SQL) y en este caso se trata de MySQL. Para la conexión entre backend y SGBD se usará el framework [Sequelize][sequelize] por su facilidad de implementación y por ser el más utilizado.
