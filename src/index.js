import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App.jsx';
import configureStore from './store/configure-store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App, { store });

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(App, { store });
  });
}
