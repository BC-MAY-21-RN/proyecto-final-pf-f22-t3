import React, {useState, createContext} from 'react';
import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  getUserData,
  addUserFirestore,
  verifyExistUser,
} from '../services/usersServices';

export const AuthContext = createContext({
  authUser: undefined,
  login: () => {},
  loginG: () => {},
  logout: () => {},
  setUser: () => {},
});

export function AuthProvider(props) {
  const {children} = props;
  const [authUser, setAuthUser] = useState(undefined);

  async function login(email) {
    try {
      const dataUser = await getUserData(email);
      if (dataUser) {
        setAuthUser(dataUser);
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function setUser(urlImage) {
    authUser.photo = urlImage;
  }

  async function loginG(user) {
    setAuthUser(user);
  }

  const logout = () => {
    setAuthUser(undefined);
    authFirebase().signOut();
  };

  const valueContext = {
    authUser,
    setUser,
    login,
    logout,
    loginG,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
