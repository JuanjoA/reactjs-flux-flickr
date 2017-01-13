/*
* module dependencies
*/

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ImageActions';

let ImageStore = Reflux.createStore({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',   
    listenables: [ImageActions],
    imagelist: [],
    // Función para que se ejecute al inicio
    init: function() {
        this.fetchList();
    },
    fetchList: function() {
        let tags = ['animals', 'nature', 'travel', 'food', 'sport', 'nude'];
        let randomTag = tags[Math.floor(Math.random()*tags.length)];
        // request AJAX a la api
        // jsonFlickrFeed viene de la api de flickr
        $.ajax({
            url: this.url + `&tag=${randomTag}`,
            dataType: 'jsonp',
            jsonpCallback: 'jsonFlickrFeed',
            cache: false,
            context: this,
            success: function(data) {
                console.log('fetch inicial ok');
                // según lo que decuelve la api:
                this.imagelist = data.items;
                // trigger del ImageStore que hace que se dispare la actualización de las vistas
                this.trigger(this.imagelist);
            }
        })
    }
});

export default ImageStore;