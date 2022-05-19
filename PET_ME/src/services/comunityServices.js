import firestore from '@react-native-firebase/firestore';
import Uuid from 'react-native-uuid';

export const getPublications = async () => {
  const publications = [];
  try {
    await firestore()
      .collection('comunidad')
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          publications.push(documentSnapshot.data());
        });
      });
    return publications;
  } catch (error) {
    console.log(error);
    return publications;
  }
};

export const addPublication = async (values) => {
  const publishedAt = firestore.Timestamp.fromDate(new Date());
  id = Uuid.v1();
  const publication = {
      favs: [],
      img: values.image[0],
      imgUser: values.photo,
      userName: values.name,
      userEmail: values.emailUser,
      title: values.description,
      id: id,
      date: publishedAt
  };
  console.log('publication: ', publication);
  try {
    await firestore().collection('comunidad').doc(id).set(publication);
    console.log("Add post");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateLikes = async (id, favs) => {
  try {
    await firestore()
      .collection('comunidad')
      .doc(id)
      .update({favs: favs});
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
