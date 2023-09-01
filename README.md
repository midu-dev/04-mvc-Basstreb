# Ejercicios 4 - Node.js

Versión de Node.js requerida: 18.17.0 LTS

**¿Necesitas repasar?**

- [Repositorio con código de ejemplo](https://github.com/midudev/curso-node-js)
- [Curso de Node.js](https://midu.link/node)

## Ejercicios

¡Vamos a practicar el patrón de arquitectura `MVC`!

Para ello, tenemos una aplicación que nos permite leer, escribir y borrar tareas.

Como ves, ya tienes la estructura preparada. Sólo tienes que:

- Ir al archivo `/models/task.js` y crear la implementación basada en los comentarios que existen. Recuerda que el modelo es el encargado de gestionar los datos de la aplicación. ¡Tienes que exportar este módulo!

Por ahora vamos a hacer que los datos se guarden en memoria, por lo que puedes actualizar el array que hemos creado para añadir, borrar y leer tareas.

- Usar el modelo en el archivo `/controllers/task.js` para que se encargue de gestionar las peticiones que llegan a la aplicación.

