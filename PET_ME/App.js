import {Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";

import ButtonPet from './src/components/ButtonPet';
import BgPaws from './src/components/BgPaws';
import Title from './src/components/Title';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
