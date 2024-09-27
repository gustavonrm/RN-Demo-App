import React from 'react';
import Main from './src/navigation/Main';
import { setupStore } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faClock,
  faStar,
  faList,
  faXmark,
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowUp,
  faArrowDown,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

library.add(
  fab,
  faStar,
  faClock,
  faList,
  faXmark,
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowUp,
  faArrowDown,
  faChevronLeft
);

const App = () => {
  return (
    <Provider store={setupStore()}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
