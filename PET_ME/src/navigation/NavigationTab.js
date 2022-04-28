import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BusquedaScreen from '../screens/BusquedaScreen';
import ComunidadScreen from '../screens/ComunidadScreen';
import PerfilScreen from '../screens/PerfilScreen';
import AddPetScreen from '../screens/AddPetScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import VectorImage from 'react-native-vector-image';
import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const Tab = createMaterialBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
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
            <Icon name="users" size={25} color={color} style={{marginRight: -4}}/>
          ),
        }}
      />      
      <Tab.Screen
        name="AddPet"
        component={AddPetScreen}
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
        name="Busqueda"
        component={BusquedaScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="user-circle-o" size={25} color={color} style={{marginLeft: -2}}/>
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
