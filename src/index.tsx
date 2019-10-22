import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

function render(component: React.ReactElement): void {
  ReactDOM.render(component, window.document.getElementById('root'));
}

render(<Root />);

/* Hot Module Replacement API */
if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept(['./Root'], () => {
    // eslint-disable-next-line global-require
    const NextApp: typeof Root = require('./Root').default;
    render(<NextApp />);
  });
}
