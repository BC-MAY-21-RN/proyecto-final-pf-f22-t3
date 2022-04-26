import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDog, faCat, faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import colors from '../../utils/colors';

export default function ListIcons() {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <FontAwesomeIcon icon={faDog} size={30} color={colors.Gray_400} />
      </View>
      <View style={styles.containerIcon}>
        <FontAwesomeIcon icon={faCat} size={30} color={colors.Gray_400} />
      </View>
      <View style={styles.containerTam}>
        <View style={styles.containerIcon}>
          <FontAwesomeIcon icon={faDog} size={18} color={colors.Gray_400} />
        </View>
        <View style={styles.containerIcon}>
          <FontAwesomeIcon icon={faDog} size={24} color={colors.Gray_400} />
        </View>
        <View style={styles.containerIcon}>
          <FontAwesomeIcon icon={faDog} size={30} color={colors.Gray_400} />
        </View>
      </View>
      <View style={styles.containerIcon}>
        <FontAwesomeIcon icon={faMars} size={30} color={colors.Gray_400} />
      </View>
      <View style={styles.containerIcon}>
        <FontAwesomeIcon icon={faVenus} size={30} color={colors.Gray_400} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  containerIcon: {
    backgroundColor: colors.Gray_100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.Gray_400,
    width: 45,
    height: 45,
  },
  containerTam: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.Gray_400,
    padding: 2,
    borderRadius: 8,
  },
});
