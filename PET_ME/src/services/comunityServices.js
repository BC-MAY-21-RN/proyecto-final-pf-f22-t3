import firestore from '@react-native-firebase/firestore';

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
