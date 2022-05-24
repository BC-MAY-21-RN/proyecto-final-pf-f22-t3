import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Uuid from 'react-native-uuid';
import useAuth from '../hooks/useAuth';
import {getUserData} from './usersServices';

export const savePetPost = async pet => {
  const publishedAt = firestore.Timestamp.fromDate(new Date());
  const id = Uuid.v1();
  try {
    await firestore()
      .collection('petpost')
      .add({...pet, id: id, publishedAt: publishedAt, status: 'published'});
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
    const postFilter = getPostFilter(petposts);
    return postFilter;
  } catch (error) {
    console.log(error);
  }
};
const getPostFilter = data => {
  const filtered = data.filter(post => post.status === 'published');
  return filtered;
};
export const getMyPetPosts = async userEmail => {
  const myPetposts = [];
  try {
    await firestore()
      .collection('petpost')
      .where('userEmail', '==', userEmail)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          myPetposts.push(documentSnapshot.data());
        });
      });
    return myPetposts;
  } catch (error) {
    console.log(error);
  }
};
export const getAdoptionProcesses = async userEmail => {
  const adoptionProcesses = [];

  try {
    await firestore()
      .collection('adoptionProcesses')
      .where('user.email', '!=', userEmail)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          adoptionProcesses.push(documentSnapshot.data());
        });
      });
    const filteredData = adoptionFilter(adoptionProcesses);
    return filteredData;
  } catch (error) {
    console.log(error);
  }
};

const adoptionFilter = data => {
  const filtered = data.filter(
    adoption => adoption.status === 'reviewRequired',
  );
  return filtered;
};
export const getMyAdoptionProcesses = async userEmail => {
  const adoptionProcesses = [];
  try {
    await firestore()
      .collection('adoptionProcesses')
      .where('user.email', '==', userEmail)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          adoptionProcesses.push(documentSnapshot.data());
        });
      });
    return adoptionProcesses;
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

export const getPetWithFilters = async (searchStr, filters) => {
  const petPost = [];
  try {
    await firestore()
      .collection('petpost')
      .orderBy('location')
      .startAt(searchStr)
      .endAt(searchStr + '\uf8ff')
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          petPost.push(documentSnapshot.data());
        });
      });
    const postFilter = getPostFilter(petPost);
    const dataFiltered = haddleFilters(filters, postFilter);
    return dataFiltered;
  } catch (error) {
    console.log(error);
  }
};

const haddleFilters = (filters, data) => {
  let result = data;
  if (filters.pettype.length > 0) {
    const pettypeFilter = data.filter(pet =>
      filters.pettype.includes(pet.pettype),
    );
    result = pettypeFilter;
  }
  if (filters.petsize.length > 0) {
    const petsizeFilter = result.filter(pet =>
      filters.petsize.includes(pet.petsize),
    );
    result = petsizeFilter;
  }
  if (filters.petgender.length > 0) {
    const petgenderFilter = result.filter(pet =>
      filters.petgender.includes(pet.petgender),
    );
    result = petgenderFilter;
  }
  return result;
};
export const startAdoptionProcess = async (post, user) => {
  const createdAt = firestore.Timestamp.fromDate(new Date());
  const id = Uuid.v1();
  try {
    await firestore().collection('adoptionProcesses').add({
      post: post,
      user: user,
      id: id,
      createdAt: createdAt,
      status: 'reviewRequired',
    });
    console.log('adoption Processes created');
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getPetPostById = async id => {
  var petpostById;
  try {
    await firestore()
      .collection('petpost')
      .where('id', '==', id)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          petpostById = documentSnapshot.data();
        });
      });
    return petpostById;
  } catch (error) {
    console.log(error);
  }
};

export const dateForhumans = mydate => {
  const date = mydate.toDate();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const newDate = date.toLocaleDateString('es-ES', options);
  return newDate;
};

export const setAdoptionReview = async (postId, adoptionId, action) => {
  let adoptionUuid = '';
  let postUuid = '';
  try {
    await firestore()
      .collection('adoptionProcesses')
      .where('id', '==', adoptionId)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          adoptionUuid = documentSnapshot.id;
        });
      });
    await firestore()
      .collection('petpost')
      .where('id', '==', postId)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          postUuid = documentSnapshot.id;
        });
      });

    if (action === 'toaccept') {
      // aceptado
      await firestore()
        .collection('adoptionProcesses')
        .doc(adoptionUuid)
        .update({status: 'completed'})
        .then(() => {
          console.log('adoptionProcesses completed');
        });
      await firestore()
        .collection('petpost')
        .doc(postUuid)
        .update({status: 'completed'})
        .then(() => {
          console.log('petpost completed');
        });
    }
    if (action === 'toreject') {
      // rechazado
      await firestore()
        .collection('adoptionProcesses')
        .doc(adoptionUuid)
        .update({status: 'rejected'})
        .then(() => {
          console.log('adoptionProcesses rejected');
        });
      await firestore()
        .collection('petpost')
        .doc(postUuid)
        .update({status: 'published'})
        .then(() => {
          console.log('petpost is published again');
        });
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const removeDoc = async (collectionName, id) => {
  let doc = '';
  try {
    await firestore()
      .collection(collectionName)
      .where('id', '==', id)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          doc = documentSnapshot.id;
        });
      });

    await firestore()
      .collection(collectionName)
      .doc(doc)
      .delete()
      .then(() => {
        console.log('doc removed');
      });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
