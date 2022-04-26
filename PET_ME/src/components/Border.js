import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Border = props => {
  const {borderType} = props;
  return <View style={styles.border_orange} />;
};

export default Border;

const styles = StyleSheet.create({
  border_orange: {
    borderWidth: 2,
    borderBottomColor: colors.Orange,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 5,
  },
});

const border = StyleSheet.compose(styles.border_orange);
