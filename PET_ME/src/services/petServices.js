import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const getPetTypes = async () => {
  const petTypes = [];
  try {
    await firestore()
      .collection('pettype')
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          petTypes.push(documentSnapshot.data());
        });
      });
    return petTypes;
  } catch (error) {
    console.log(error);
  }
};
export const getDogBreeds = async () => {
  const dogBreeds = [];
  try {
    await firestore()
      .collection('dogBreed')
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          dogBreeds.push(documentSnapshot.data());
        });
      });
    return dogBreeds;
  } catch (error) {
    console.log(error);
  }
};
export const getCatBreeds = async () => {
  const catBreeds = [];
  try {
    await firestore()
      .collection('dogBreed')
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          catBreeds.push(documentSnapshot.data());
        });
      });
    return catBreeds;
  } catch (error) {
    console.log(error);
  }
};
