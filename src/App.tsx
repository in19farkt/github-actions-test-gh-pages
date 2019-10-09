import React from 'react';
import pJSON from '../package.json';

function App(): React.ReactElement<{}> {
  return <div>App version is: {pJSON.version}</div>;
}

export default App;
