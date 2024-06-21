import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
