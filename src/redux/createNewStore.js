import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import reducer from 'src/redux/reducers';
import rootSaga from 'src/redux/sagas';
/*
  eslint
  no-underscore-dangle: "off"
*/

export default function createNewStore(history) {
  const routerMw = routerMiddleware(history);

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      router: routerReducer,
      ...reducer,
    }),
    {},
    compose(
      applyMiddleware(sagaMiddleware, routerMw),
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  if (module.hot) {
    module.hot.accept(() => {
      /* eslint global-require: "off" */
      store.replaceReducer(require('src/redux/reducers').default);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
