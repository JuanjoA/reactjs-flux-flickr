/*
 * Module dependencies
 */

// Esto nos devuelve el objeto que exportar por defecto 'reflux'
// siendo ahora accesible aquí como Reflux.
// OJO, porque el objeto exportado POR DEFECTO no tiene porque llamarse Reflux.
 import Reflux from 'reflux';

let ImageActions = Reflux.createActions([
    'fetchList'
]);

export default ImageActions;
