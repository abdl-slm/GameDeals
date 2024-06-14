import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

// Importing Redux Saga middleware and the root saga
import createSagaMiddleWare from 'redux-saga';
import sagaData from './saga';

// Creating an instance of Redux Saga middleware
const sagaMiddleware = createSagaMiddleWare();

// Configuring the Redux store with the root reducer and middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(sagaData);

export default store;