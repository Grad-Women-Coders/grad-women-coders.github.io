import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Ubuntu:300,400,700', 'sans-serif']
  }
});

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
