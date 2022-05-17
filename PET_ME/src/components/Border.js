import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Border = () => {
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
    marginBottom: 10,
  },
});

const border = StyleSheet.compose(styles.border_orange);
