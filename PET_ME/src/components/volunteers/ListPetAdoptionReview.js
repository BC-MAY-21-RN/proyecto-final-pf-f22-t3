import {FlatList} from 'react-native';
import React from 'react';
import CardPetAdoptionReview from './CardPetAdoptionReview';

const ListPetAdoptionReview = props => {
  const {pets, onPress} = props;
  return (
    <FlatList
      data={pets}
      nestedScrollEnabled
      keyExtractor={(item, index) => index}
      renderItem={({item}) => (
        <CardPetAdoptionReview pet={item} onPress={() => onPress(item)} />
      )}
    />
  );
};

export default ListPetAdoptionReview;
