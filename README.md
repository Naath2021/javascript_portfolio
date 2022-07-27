Portafolio fotográfico personal.

Este proyecto es realizado con una base HTML y CSS/SCSS, 100% responsive, aplicando la metodología "mobile first", así como Bootstrap, Google Fonts, Box Icons, Figma y AOS animation. 

Se realiza un C.R.U.D. (acrónimo de CREATE. READ. UPDATE. DELETE.) de las imágenes, hecho en Vanilla JavaScript con el que se puede interactuar sólo desde el documento "portfolio.html", que a su vez interactúa con el LocalStorage.

CREATE:
En la sección se puede observar el botón "+" en la que se puede subir una imágen desde el ordenador directo al portafolio, cuando el botón "guardar" es cliqueado una vez (y será posicionada al final de la página), manteniendo el estilo de las otras y guardándolo en el array correspondiente.

READ:
Se crea un modal overlay donde se puede observar y navegar por las imágenes en tamaño grande.

UPDATE:
Dentro de dicho modal, el botón "editar" va a permitir cambiar el tamaño y nombre de la imágen seleccionada en caso de ser necesario, reemplazando sus valores originales (mostrado en un console.log).

DELETE:
Igualmente en el modal, el botón "eliminar" permitirá eliminar la imágen seleccionada del DOM.
