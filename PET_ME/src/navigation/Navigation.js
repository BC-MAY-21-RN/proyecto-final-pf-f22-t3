import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from './NavigationTab';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
