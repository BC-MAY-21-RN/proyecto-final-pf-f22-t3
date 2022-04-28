import {View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import CardPet from '../CardPet';

export default function ListPets(props) {
  const {pets} = props;
  return (
    <ScrollView horizontal={false}>
      <FlatList
        data={pets}
        keyExtractor={pets => pets.id}
        renderItem={({item}) => <CardPet pet={item} />}
      />
    </ScrollView>
  );
}
