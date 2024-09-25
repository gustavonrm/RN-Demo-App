import React from 'react';
import Main from './src/navigation/Main';
import { setupStore } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faStar, faClock);

const App = () => {

  return (
    <Provider store={setupStore()}>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
