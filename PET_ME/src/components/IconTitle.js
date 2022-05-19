import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconTitle = props => {
  const {icon, size, color, title, type} = props;
  return (
    <View style={styles.cont}>
      {type === 'I' ? (
        <Icon name={icon} size={size} color={color} />
      ) : (
        <FontAwesomeIcon icon={icon} size={size} color={color} />
      )}
      <Text style={styles.marginText}>{title}</Text>
    </View>
  );
};

export default IconTitle;

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  marginText: {
    marginLeft: 5,
  },
});
