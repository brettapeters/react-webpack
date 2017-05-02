import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './components/App.jsx';
import { loadCourses } from './actions/course-actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

const store = configureStore();
store.dispatch(loadCourses());

const history = createHistory();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(App);
  });
}
