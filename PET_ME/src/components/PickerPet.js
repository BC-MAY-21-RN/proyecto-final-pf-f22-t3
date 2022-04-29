import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import colors from '../utils/colors';
import Title from './Title';

const PickerPet = props => {
  const {style, items, label} = props;
  const [selectedItem, setSelectedItem] = useState();

  return (
    <View style={style}>
      <Title text={label} textType={'TitleProfile'} />
      <View style={styles.fieldAddPet}>
        <Picker
          {...props}
          style={styles.inputText}
          selectedValue={selectedItem}
          dropdownIconColor={colors.Gray_400}
          numberOfLines={1}
          onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}>
          {items.map(item => (
            <Picker.Item label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default PickerPet;

const styles = StyleSheet.create({
  inputText: {
    fontFamily: 'ArchivoNarrow-Regular',
    fontSize: 18,
    color: colors.Gray_400,
  },

  fieldAddPet: {
    backgroundColor: colors.Gray_100,
    borderRadius: 32,
    paddingHorizontal: 10,
  },
});
