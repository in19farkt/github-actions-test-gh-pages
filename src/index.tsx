import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function render(component: React.ReactElement): void {
  ReactDOM.render(component, window.document.getElementById('root'));
}

render(<App />);

/* Hot Module Replacement API */
if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept(['./App'], () => {
    // eslint-disable-next-line global-require
    const NextApp: typeof App = require('./App').default;
    render(<NextApp />);
  });
}
