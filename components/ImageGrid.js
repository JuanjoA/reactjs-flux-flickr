/*
* Module dependencies
*/

import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/ImageStore';

/*
Mixin necesario para que el componente reaccione a los cambios del store Reflux.

Respecto al index empleado en el map, es necesario según esto:

https://facebook.github.io/react/docs/lists-and-keys.html#keys
https://facebook.github.io/react/docs/reconciliation.html#recursing-on-children

Así no sale el warning en el navegador.
*/

// creando component según ES5, no ES6-ES2015
let ImageGrid = React.createClass({
    mixins: [Reflux.connect(ImageStore, 'imagestore')],
    render: function() {
        if (this.state.imagestore) {
            return <div>
                {
                    this.state.imagestore.map( (image, index) => {
                        return <div key={index} className="image">
                            <a target="_blank" href={image.link}><img src={image.media.m} /></a>
                        </div>
                    })
                }
                </div>
        } else {
            return <p>Sin imágenes</p>
        }
    }
});

export default ImageGrid;
