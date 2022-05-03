import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import colors from '../utils/colors';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useField} from 'formik';
import FormFieldLabel from './FormFieldLabel';

const InputTextAndPicker = ({style, items, label, ...props}) => {
  const [field, meta, helpers] = useField(props);
  const [typeinput, setTypeinput] = useState('year');
  const [age, setAge] = useState([]);
  useEffect(() => {
    helpers.setValue([{type: typeinput, value: age}]);
  }, [typeinput, age]);

  return (
    <View>
      <FormFieldLabel label={label} meta={meta} styleField={'addPet'} />
      <View style={styles.fieldContainer}>
        <TextInput
          onBlur={() => helpers.setTouched(!meta.touched)}
          placeholder={label}
          placeholderTextColor={colors.Gray_300}
          onChangeText={value => {
            setAge(value);
          }}
          style={inputTextAddPet}
          keyboardType={'numeric'}
        />
        <RNBounceable style={styles.inputPicker}>
          <Picker
            {...props}
            style={styles.inputPickerText}
            selectedValue={typeinput}
            dropdownIconColor={colors.Gray_100}
            onValueChange={(itemValue, itemIndex) => {
              setTypeinput(itemValue);
            }}>
            {items.map((item, index) => (
              <Picker.Item label={item.label} value={item.value} key={index} />
            ))}
          </Picker>
        </RNBounceable>
      </View>
    </View>
  );
};

export default InputTextAndPicker;

const styles = StyleSheet.create({
  fieldContainer: {
    backgroundColor: colors.Gray_100,
    borderRadius: 32,
    paddingLeft: 25,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputPicker: {
    backgroundColor: colors.Orange,
    width: '40%',
    marginVertical: 5,
    borderRadius: 32,
  },
  inputPickerText: {
    marginVertical: -8,
    color: colors.Gray_100,
  },
  inputText: {
    fontFamily: 'ArchivoNarrow-Regular',
    fontSize: 18,
  },
  inputTextAddPet: {
    color: colors.Gray_400,
    width: '40%',
  },
});
const inputTextAddPet = StyleSheet.compose(
  styles.inputText,
  styles.inputTextAddPet,
);
