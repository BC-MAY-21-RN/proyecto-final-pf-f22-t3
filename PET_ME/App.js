import React from 'react';
import StartScreen from './src/screens/StartScreen';
import DetailsPet from './src/screens/DetailsPet';
import HomeScreen from './src/screens/HomeScreen';
import Navigation from './src/navigation/Navigation';
import InfoPet from './src/utils/InfoPet';
const App = () => {
  return <DetailsPet details={InfoPet} />;
};

export default App;
