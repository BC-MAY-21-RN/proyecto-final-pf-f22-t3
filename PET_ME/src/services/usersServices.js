import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const getUserData = async userData => {
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
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const loginGoogle = async (user) =>{
  try {
    const res = await addUserFirestore(user);
    return true;
  } catch (error) {
    return false;
  }
}

export const editUserFirestore = async (user, imgUrl) => {
  let idUser = '';
  try {
    await firestore()
      .collection('users')
      .where('email', '==', user)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          idUser = documentSnapshot.id;
        });
      });
    await firestore().collection('users').doc(idUser).update({
      photo: imgUrl,
    });
    console.log('User edited');
    let publicaciones = [];
    await firestore()
      .collection('comunidad')
      .where('userEmail', '==', user)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          publicaciones.push(documentSnapshot.id);
        });
      });
    for (let i = 0; i < publicaciones.length; i++) {
      await firestore().collection('comunidad').doc(publicaciones[i]).update({
        imgUser: imgUrl,
      });
    }
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
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('Error verify exist: ', error);
    return false;
  }
};

export const beVolunteer = async email => {
  let idUser = '';
  try {
    await firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          idUser = documentSnapshot.id;
        });
      });
    await firestore()
      .collection('users')
      .doc(idUser)
      .update({volunteer: true})
      .then(() => {
        console.log('User is volunteer now');
      });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
// export const registerRaza = async () => {
//   try {
//     for (let i = 0; i < catbreed.length; i++) {
//       await firestore().collection('dogbreed').add({
//         id: catbreed[i].id,
//         label: catbreed[i].label,
//         value: catbreed[i].value,
//       });
//       console.log('Raza registrada: ', catbreed[i].label);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
