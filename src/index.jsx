import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import App from './views/App';

const render = Component =>(
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('root')
  )
);

render(App)
 
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/App', () => { 
    const NextApp = require('./views/App').default;
    render(App) 
  })
}