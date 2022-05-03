import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {useField} from 'formik';
import FormFieldLabel from './FormFieldLabel';

const TextAreaInput = props => {
  const [field, meta, helpers] = useField(props);
  const {style, placeholder, label} = props;
  return (
    <View style={style}>
      <FormFieldLabel label={label} meta={meta} styleField={'addPet'} />
      <TextInput
        {...props}
        multiline={true}
        numberOfLines={10}
        placeholder={placeholder}
        placeholderTextColor={colors.Gray_300}
        onChangeText={helpers.setValue}
        style={styles.textInput}
      />
    </View>
  );
};

export default TextAreaInput;

const styles = StyleSheet.create({
  textInput: {
    height: 150,
    textAlignVertical: 'top',
    backgroundColor: colors.Gray_100,
    borderRadius: 20,
    padding: 20,
    color: colors.Gray_400,
    fontFamily: 'ArchivoNarrow-Regular',
    fontSize: 18,
  },
});
