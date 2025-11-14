//Para utilizar variables u objetos de otro archivo se utiliza export e import
//En el archivo que se quiere exportar se utiliza export
//En el archivo que se quiere importar se utiliza import

import {msg, msg2} from './02-app.js';

const msgFinal = `${msg} \n${msg2}`;
alert(msgFinal);

//NOTA: Al utilizar modulos en JavaScript, es necesario que el archivo HTML que los carga tenga el atributo type="module" en la etiqueta <script>. Esto indica al navegador que el archivo JavaScript debe ser tratado como un módulo, permitiendo así el uso de las declaraciones import y export. Sin este atributo, el navegador no reconocerá las declaraciones de módulos y generará errores. Asegúrate de que tu etiqueta script se vea así:
//<script type="module" src="js/03-app.js"></script>