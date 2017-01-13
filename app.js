/*
 *   Module dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ImageGrid from './components/ImageGrid';
import ImageActions from './actions/ImageActions';

setInterval( () => {
    ImageActions.fetchList(),
    console.log('fetcheando...')
}, 5000);

ReactDOM.render(<ImageGrid />, document.getElementById('container'))