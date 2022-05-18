import firestore from '@react-native-firebase/firestore';
import useAuth from '../hooks/useAuth';

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
  const publication = {
      favs: 0,
      img: values.image[0],
      imgUser: values.photo,
      userName: values.name,
      title: values.description,
      id: 2,
      date: publishedAt
  };
  try {
    await firestore()
      .collection('comunidad')
      .add(publication);
      console.log("Add post");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  } 
};
