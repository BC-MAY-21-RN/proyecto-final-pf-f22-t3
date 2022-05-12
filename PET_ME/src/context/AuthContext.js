import React, {useState, createContext} from 'react';
import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {getUserData, addUserFirestore, verifyExistUser} from '../services/usersServices';

export const AuthContext = createContext({
  authUser: undefined,
  login: () => {},
  loginG: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const {children} = props;
  const [authUser, setAuthUser] = useState(undefined);

  async function login(userData) {
    try {
      const dataUser = await getUserData(userData, setAuthUser);
      console.log('dataUser: ', dataUser);
      if (dataUser) {
        setAuthUser(dataUser);
      }
      return true
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function loginG(userGoogle) {
    try {
      const user = {
        email: userGoogle.email,
        name: userGoogle.name,
        photo: userGoogle.photo,
        phone: '4561023591'
      }
      const existUser = await verifyExistUser(user.email);
      if (existUser) {
        setAuthUser(user);
      } else {
        // Se activa el modal para pedir el numero de telefono
        const res = await addUserFirestore(user);
        setAuthUser(user);
      }
      return true;
    } catch (error) {
      return false;
    }
    
  }

  const logout = () => {
    setAuthUser(undefined);
    authFirebase().signOut();
  };
  
  const valueContext = {
    authUser,
    login,
    logout,
    loginG
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
