import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const getUserData = async (userData, setAuthUser) => {
    let user = undefined;
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
        console.log('user data: ', user);
      return user;
    } catch (error) {
      console.log(error);
      return user;
    }
}

export const addUserFirestore = async (user) => {
    try {
      await firestore().collection('users').add(user);
      console.log('User added');
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
}

export const verifyExistUser = async (email) =>{
    let user = undefined;
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
      if (user) {
          console.log('User exist');
        return true;
      } else {
            console.log('User not exist');
        return false;
      }
    } catch (error) {
      console.log("Error verify exist: ", error);
      return false;
    }
}

export function registerRaza() {
  (async () => {
    try {
      for (let i = 0; i < catbreed.length; i++) {
        await firestore().collection('catbreed').add({
          name: catbreed[i].name,
          id: catbreed[i].id,
        });
        console.log('Raza registrada: ', catbreed[i].name);
      }
    } catch (error) {
      console.log(error);
    }
  })();
}

const dogbreed = [
  {
    id: '1',
    name: 'Labrador Retriever',
  },
  {
    id: '2',
    name: 'Pastor Alemán',
  },
  {
    id: '3',
    name: 'Golden Retriever',
  },
  {
    id: '4',
    name: 'Bulldog inglés',
  },
  {
    id: '5',
    name: 'Beagle',
  },
  {
    id: '6',
    name: 'Yorkshire Terrier',
  },
  {
    id: '7',
    name: 'Caniche',
  },
  {
    id: '8',
    name: 'Boxer alemán',
  },
  {
    id: '9',
    name: 'Bulldog Francés',
  },
  {
    id: '10',
    name: 'Rottweiler',
  },
  {
    id: '11',
    name: 'Chihuahua',
  },
  {
    id: '12',
    name: 'Pomerania',
  },
  {
    id: '13',
    name: 'Otro',
  },
  {
    id: '99',
    name: 'Mestizo',
  },
];

const catbreed = [
  {
    id: '1',
    name: 'Siamés',
  },
  {
    id: '2',
    name: 'Somalí',
  },
  {
    id: '3',
    name: 'Ragdoll',
  },
  {
    id: '4',
    name: 'Persa',
  },
  {
    id: '5',
    name: 'British Shorthair',
  },
  {
    id: '6',
    name: 'Maine Coon',
  },
  {
    id: '7',
    name: 'Devon Rex',
  },
  {
    id: '8',
    name: 'American Short hair',
  },
  {
    id: '9',
    name: 'Esfinge',
  },
  {
    id: '10',
    name: 'Scottish Fold',
  },
  {
    id: '11',
    name: 'Birmano',
  },
  {
    id: '12',
    name: 'Criollo',
  },
  {
    id: '13',
    name: 'Otro',
  },
  {
    id: '99',
    name: 'Mestizo',
  },
];
