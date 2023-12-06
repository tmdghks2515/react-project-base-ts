import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root', // This is the storage key. You can change it to something more specific to your app.
  storage,
  // Additional configuration options. Check the documentation for more options.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export default store;
export const persistor = persistStore(store);
