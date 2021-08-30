import * as React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Home from './screens/Home';

const App = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default App;
