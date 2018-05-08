import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import { initSagas } from 'initSagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer /* preloadedState, */,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  initSagas(sagaMiddleware);
  return store;
}

export const store = configureStore();
