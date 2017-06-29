import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import cats from './cats.json';
import CatsList from './components/cats-list'

ReactDOM.render(<CatsList cats={ cats } />, document.getElementById('root'));
registerServiceWorker();
