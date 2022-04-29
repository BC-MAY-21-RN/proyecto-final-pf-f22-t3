import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../utils/colors';
import Title from './Title';

const Checkbox = props => {
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
          console.log(isChecked);
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
