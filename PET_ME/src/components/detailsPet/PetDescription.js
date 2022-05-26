import {View, StyleSheet} from 'react-native';
import React from 'react';
import IconTitle from '../IconTitle';
import colors from '../../utils/colors';
import {
  faDog,
  faCat,
  faLocationDot,
  faPenRuler,
} from '@fortawesome/free-solid-svg-icons';
const petDescription = props => {
  const {raze, size, type, ubication} = props.info;
  return (
    <View style={styles.petDescription}>
      <IconTitle
        icon={type === 'dog' ? faDog : faCat}
        size={20}
        color={colors.Gray_400}
        title={raze}
      />
      <IconTitle
        icon={faLocationDot}
        size={20}
        color={colors.Gray_400}
        title={ubication}
      />
      <IconTitle
        icon={faPenRuler}
        size={20}
        color={colors.Gray_400}
        title={size}
      />
    </View>
  );
};

export default petDescription;

const styles = StyleSheet.create({
  petDescription: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
