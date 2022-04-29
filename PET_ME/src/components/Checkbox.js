<<<<<<< HEAD
import {StyleSheet, View} from 'react-native';
=======
import {StyleSheet, Text, View} from 'react-native';
>>>>>>> 8f25396 (AddPetScreenTwo design done)
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../utils/colors';
import Title from './Title';
<<<<<<< HEAD
import {useField} from 'formik';

const Checkbox = props => {
  const [field, meta, helpers] = useField(props);
=======

const Checkbox = props => {
>>>>>>> 8f25396 (AddPetScreenTwo design done)
  const {label, style} = props;
  return (
    <View style={style}>
      <BouncyCheckbox
        fillColor={colors.Orange}
        unfillColor={colors.Gray_100}
        iconStyle={styles.checkboxIcon}
        textComponent={
          <Title style={{marginLeft: 10}} text={label} textType={'subTitle'} />
        }
        onPress={isChecked => {
<<<<<<< HEAD
          helpers.setValue(isChecked);
=======
          console.log(isChecked);
>>>>>>> 8f25396 (AddPetScreenTwo design done)
        }}
      />
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxIcon: {
    borderRadius: 5,
    borderColor: colors.Gray_200,
  },
});
