import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/stored';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigator/appNavigator';
import { loadItems } from './store/Budget_Slice';

const App = () => {
  useEffect(() => {
    store.dispatch(loadItems());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;