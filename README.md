# Boleteria
Proyecto de sistema de boletería usando el flujo de trabajo de [Git Flow][lenguajes].

[lenguajes]: https://drive.google.com/file/d/11Jhjz58o6og81mtrva-E2YmJuwCn5OhJ/view?usp=sharing
- [Descripción](#descripción)
- [Diagrama de Clases](#diagrama-de-clases)
- [Tecnologías](#tecnologías)
## Descripción ##
En el presente trabajo se trata de simular e flujo de trabajo dado en una cooperativa de transporte interprovincial. Es por eso que se está considerando la existencia de buses, boletos, horarios, cooperativa y cliente.  
Cuando mencionamos un registro de cliente se trata de los clientes frecuentes que quieren ser registrados para acelerar el proceso de compra de boletos.
## Diagrama de Clases ##
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
También puedes simplemente identar tu código con cuatro espacios:

        function fancyAlert(arg) {
          if(arg) {
            $.facebox({div:'#foo'})
          }
        }
