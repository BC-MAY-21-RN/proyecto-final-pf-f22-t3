import React from 'react';
import StartScreen from './src/screens/StartScreen';
import DetailsPet from './src/screens/DetailsPet';
import HomeScreen from './src/screens/HomeScreen';
import Navigation from './src/navigation/Navigation';
import AddPetScreenOne from './src/screens/AddPetScreenOne.js';
import AddPetScreenTwo from './src/screens/AddPetScreenTwo';
import InfoPet from './src/utils/InfoPet';
import VolunteerScreen from './src/screens/VolunteerScreen';
const App = () => {
//return <DetailsPet details={InfoPet} />;
  return <VolunteerScreen/>
};

export default App;
