import {FlatList, Text} from 'react-native';
import React from 'react';
import CardPetAdoptionReview from './CardPetAdoptionReview';

const ListPetAdoptionReview = props => {
  const {adoptions, handleModal} = props;

  return (
    <FlatList
      data={adoptions}
      nestedScrollEnabled
      keyExtractor={(item, index) => index}
      renderItem={({item}) => (
        <CardPetAdoptionReview adoption={item} handleModal={handleModal} />
      )}
    />
  );
};

export default ListPetAdoptionReview;
