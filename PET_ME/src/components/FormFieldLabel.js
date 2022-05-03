import {StyleSheet, View} from 'react-native';
import React from 'react';
import Title from './Title';
import FieldErrors from './FieldErrors';

const FormFieldLabel = props => {
  const {label, meta, styleField} = props;
  return (
    <View style={styles.label}>
      {styleField === 'addPet' && (
        <Title text={label} textType={'TitleProfile'} />
      )}
      <FieldErrors meta={meta} />
    </View>
  );
};

export default FormFieldLabel;

const styles = StyleSheet.create({
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
