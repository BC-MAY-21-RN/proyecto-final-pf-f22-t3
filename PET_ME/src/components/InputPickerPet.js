import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import colors from '../utils/colors';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useField} from 'formik';
import FormFieldLabel from './FormFieldLabel';

const InputPickerPet = ({
  style,
  items,
  label,
  defaultSelect = 'Selecciona uno',
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  items = [{label: defaultSelect, value: null}, ...items];
  return (
    <View style={style}>
      <FormFieldLabel label={label} meta={meta} styleField={'addPet'} />
      <RNBounceable style={styles.fieldAddPet}>
        <Picker
          {...props}
          style={styles.inputText}
          selectedValue={field.value}
          dropdownIconColor={colors.Gray_400}
          onValueChange={(itemValue, itemIndex) => {
            helpers.setValue(itemValue);
          }}>
          {items.map((item, index) => (
            <Picker.Item
              enabled={index !== 0}
              label={item.label}
              value={item.value}
              key={index}
            />
          ))}
        </Picker>
      </RNBounceable>
    </View>
  );
};

export default InputPickerPet;

const styles = StyleSheet.create({
  fieldAddPet: {
    backgroundColor: colors.Gray_100,
    borderRadius: 32,
    paddingHorizontal: 10,
  },
  inputText: {
    fontFamily: 'ArchivoNarrow-Regular',
    fontSize: 18,
    color: colors.Gray_400,
  },
});
