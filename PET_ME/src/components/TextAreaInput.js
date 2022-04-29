import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Title from './Title';
import colors from '../utils/colors';

const TextAreaInput = props => {
  const {style, placeholder, label} = props;
  return (
    <View style={style}>
      <Title text={label} textType={'TitleProfile'} />
      <TextInput
        {...props}
        multiline={true}
        numberOfLines={10}
        placeholder={placeholder}
        placeholderTextColor={colors.Gray_300}
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
