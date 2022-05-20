import {FlatList} from 'react-native';
import React from 'react';
import CardPet from '../CardPet';

export default function ListPets(props) {
  const {pets} = props;
  return (
    <FlatList
      data={pets}
      nestedScrollEnabled
      keyExtractor={(item, index) => index}
      renderItem={({item}) => <CardPet pet={item} />}
    />
  );
}
