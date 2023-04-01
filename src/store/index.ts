import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { name } from 'pckg';
// import * as reducers from 'actions/reducers';

export const compose = composeWithDevTools({ name });

export const persistency = persistReducer(
  { key: name, storage },
  combineReducers({})
);

export const store = createStore(persistency, compose());

export const persistor = persistStore(store);

export default store;
