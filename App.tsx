import React from 'react';
import Main from './src/navigation/Main';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
