import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line no-restricted-imports
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import Application from './application/Application';

const theme = createMuiTheme();

function Root(): React.ReactElement<{}> {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Application />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default Root;
