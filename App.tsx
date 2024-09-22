import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Main from './src/screens/Main';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
    <SafeAreaView >
      <Main/>
    </SafeAreaView>
    </Provider>
  );
};

export default App;
