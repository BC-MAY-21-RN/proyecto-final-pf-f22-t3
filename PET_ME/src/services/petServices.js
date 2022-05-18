import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const savePetPost = async pet => {
  const publishedAt = firestore.Timestamp.fromDate(new Date());
  try {
    await firestore()
      .collection('petpost')
      .add({...pet, publishedAt: publishedAt});
    console.log('Pet added');
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const uploadImage = async image => {
  let currentId = Math.floor(100000 + Math.random() * 90000).toString();
  const reference = storage().ref(currentId + image.fileName);

  // path to existing file on filesystem
  const pathToFile = image.path;

  // uploads file
  const task = reference.putFile(pathToFile);
  try {
    await task;

    const url = await reference.getDownloadURL();

    // console.log('url: ', url);
    return url;
  } catch (e) {
    console.log(e);
  }
};

export const getPetTypes = async setter => {
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
    setter(petTypes);
    // return petTypes;
  } catch (error) {
    console.log(error);
  }
};

export const getDogBreeds = async setter => {
  const dogBreeds = [];
  try {
    await firestore()
      .collection('dogbreed')
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          dogBreeds.push(documentSnapshot.data());
        });
      });
    setter(dogBreeds);
  } catch (error) {
    console.log(error);
  }
};
export const getCatBreeds = async setter => {
  const catBreeds = [];
  try {
    await firestore()
      .collection('catbreed')
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          catBreeds.push(documentSnapshot.data());
        });
      });
    setter(catBreeds);
  } catch (error) {
    console.log(error);
  }
};

// Esta funcion recibe los sgtes props
// limit = cantidad de records a traer
// orderBy = campo por el cual se ordenará la collection
// directionStr = 'desc'o 'asc'
export const getPetPosts = async (limit, orderBy, directionStr = 'desc') => {
  const petposts = [];
  try {
    await firestore()
      .collection('petpost')
      .limit(limit)
      .orderBy(orderBy, directionStr)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          petposts.push(documentSnapshot.data());
        });
      });
    return petposts;
  } catch (error) {
    console.log(error);
  }
};

export const ageFormated = petage => {
  let result = '';
  if (petage.type === 'year') {
    if (Number(petage.value) === 1) {
      result = `${petage.value} año`;
    } else {
      result = `${petage.value} años`;
    }
    return result;
  } else {
    if (Number(petage.value) === 1) {
      result = `${petage.value} mes`;
    } else {
      result = `${petage.value} meses`;
    }
  }
  return result;
};

export const addFilter = (filterStr, getter, setter) => {
  if (getter.includes(filterStr)) {
    const filterActual = getter.filter(type => type !== filterStr);
    setter(filterActual);
  } else {
    // Agregar al state
    const newType = [...getter, filterStr];
    setter(newType);
  }
};
