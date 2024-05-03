import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import budgetReducer from './Budget_Slice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, budgetReducer);

export const store = configureStore({
  reducer: {
    budget: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
