import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BusquedaScreen from '../screens/BusquedaScreen';
import ComunidadScreen from '../screens/ComunidadScreen';
import AddPetScreenOne from '../screens/AddPetScreenOne';
import ProfileUserScreen from '../screens/ProfileUserScreen';
import VolunteerScreen from '../screens/VolunteerScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VectorImage from 'react-native-vector-image';
import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const Tab = createMaterialBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      inactiveColor={colors.Gray_400}
      activeColor={colors.Gray_500}
      barStyle={{backgroundColor: colors.Gray_200}}>
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <VectorImage
              style={{...styles.svg, tintColor: color}}
              source={require('../assets/img/animal-shelter.svg')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Comunidad"
        component={ComunidadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
              name="users"
              size={25}
              color={color}
              style={{marginRight: -4}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPet"
        component={AddPetScreenOne}
        options={{
          tabBarLabel: 'Add Pet',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <VectorImage
              style={{...styles.svgPlus, tintColor: color}}
              source={require('../assets/img/plus_2.svg')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Voluntarios"
        component={VolunteerScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="volunteer-activism" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileUserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
              name="user-circle-o"
              size={25}
              color={color}
              style={{marginLeft: -2}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  svg: {
    width: 25,
    height: 25,
  },
  svgPlus: {
    width: 35,
    height: 35,
    marginTop: -8,
  },
});
