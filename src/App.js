import React from 'react';
import { Provider } from 'react-redux';

import 'mapbox-gl/dist/mapbox-gl.css';

import GlobalStyles from './styles/global';

import Main from './pages/Main';

import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Main />
  </Provider>
);

export default App;
