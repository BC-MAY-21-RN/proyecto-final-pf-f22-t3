import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTabs from './NavigationTab';
import StartScreen from '../screens/StartScreen';
import Login from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AddPetScreenOne from '../screens/AddPetScreenOne';
import AddPetScreenTwo from '../screens/AddPetScreenTwo';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPetPartOne"
        component={AddPetScreenOne}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPetPartTwo"
        component={AddPetScreenTwo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
