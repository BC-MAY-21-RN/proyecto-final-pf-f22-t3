import firestore from '@react-native-firebase/firestore';
import Uuid from 'react-native-uuid';

export const getPublications = async () => {
  const publications = [];
  try {
    await firestore()
      .collection('comunidad')
      .orderBy('date', 'desc')
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
  try {
    await firestore().collection('comunidad').doc(id).set(publication);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getImageComments = async (email) => {
  let user = '';
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
      return user.photo;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log(error);
    return undefined;
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


export const getPublication = async (id) => {
  const publication = {};
  try {
    await firestore()
      .collection('comunidad')
      .doc(id)
      .get()
      .then(documentSnapshot => {
        publication.data = documentSnapshot.data();
      });
    return publication;
  } catch (error) {
    console.log(error);
    return publication;
  }
}

export const addComments = async (id, comments) => {
  try {
    await firestore()
      .collection('comments')
      .doc(id)
      .set({comments: comments});
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editComments = async (id, comments) => {
  try {
    await firestore().collection('comments').doc(id).update({comments: comments});
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getPublicationComments = async (id) => {
  let commentsData = undefined;
  try {
    await firestore()
      .collection('comments')
      .doc(id)
      .get()
      .then(documentSnapshot => {
        if(documentSnapshot.exists) {
          commentsData = documentSnapshot.data();
        }
      });
    return commentsData;
  } catch (error) {
    console.log("Error getcomments", error);
    return commentsData;
  }
}



