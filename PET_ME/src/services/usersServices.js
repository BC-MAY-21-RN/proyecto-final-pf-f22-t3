import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const getUserData = async (userData, setAuthUser) => {
  let user;
  try {
    await firestore()
      .collection('users')
      .where('email', '==', userData)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          user = documentSnapshot.data();
        });
      });
    return user;
  } catch (error) {
    console.log(error);
    return user;
  }
};

export const addUserFirestore = async user => {
  try {
    await firestore().collection('users').add(user);
    console.log('User added');
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const verifyExistUser = async email => {
  let user;
  try {
    await firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          user = documentSnapshot.data();
        });
      });
    console.log('usuario g: ', user);
    if (user) {
      console.log('User exist');
      return true;
    } else {
      console.log('User not exist');
      return false;
    }
  } catch (error) {
    console.log('Error verify exist: ', error);
    return false;
  }
};

// export function registerRaza() {
//   (async () => {
//     try {
//       for (let i = 0; i < catbreed.length; i++) {
//         await firestore().collection('catbreed').add({
//           name: catbreed[i].name,
//           id: catbreed[i].id,
//         });
//         console.log('Raza registrada: ', catbreed[i].name);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// }
