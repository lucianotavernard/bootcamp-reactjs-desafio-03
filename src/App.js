import React from 'react';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'mapbox-gl/dist/mapbox-gl.css';

import GlobalStyles from './styles/global';

import Main from './pages/Main';

import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Main />
    <ToastContainer />
  </Provider>
);

export default App;
