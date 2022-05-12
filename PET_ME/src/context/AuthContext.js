import React, {useState, createContext} from 'react';
import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({
  authUser: undefined,
  login: () => {},
  logout: () => {},
  bookin: undefined,
});

function getUserData(userData, setAuthUser) {
  (async () => {
    try {
      await firestore()
        .collection('users')
        .where('email', '==', userData)
        .get()
        .then(collectionSnapshot => {
          collectionSnapshot.forEach(documentSnapshot => {
            setAuthUser(documentSnapshot.data());
          });
        });
    } catch (error) {
      throw error;
    }
  })();
}

export function AuthProvider(props) {
  const {children} = props;
  const [authUser, setAuthUser] = useState(undefined);
  const [bookin, setBooking] = useState();

  async function login(userData) {
    try {
      const dataUser = await getUserData(userData, setAuthUser);
      return true
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function loginGooglr(user) {
    console.log(user);
  }

  const logout = () => {
    setAuthUser(undefined);
    authFirebase().signOut();
  };
  
  const valueContext = {
    authUser,
    login,
    logout,
    bookin,
    setBooking,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
