import React from 'react';
import StartScreen from './src/screens/StartScreen';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  )
};

export default App;
