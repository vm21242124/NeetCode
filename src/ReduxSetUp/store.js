import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import userSlice from "./userSlice.js";

const persistConfig = {
  key: 'neetcode',
  storage,
}

const userreducer = persistReducer(persistConfig, userSlice.reducer)

export const store = configureStore({
  reducer:{
    user:userreducer
  }
})

export const persistedStore = persistStore(store)