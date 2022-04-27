import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDog, faCat, faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import colors from '../../utils/colors';

export default function ListIcons() {
  return (
    <>
      <View style={styles.containerLabels}>
        <View style={{width: '28.5%', alignItems: 'center', marginRight: 8}}>
          <Text style={styles.title}>Tipo</Text>
        </View>
        <View style={{width: '39.5%', alignItems: 'center', marginRight: 8}}>
          <Text style={styles.title}>Tamaño</Text>
        </View>
        <View style={{width: '28%', alignItems: 'center'}}>
          <Text style={styles.title}>Tipo</Text>
        </View>
      </View>
      <View style={styles.container}>
        <IconsType />
        <IconsTam />
        <IconsGender />
      </View>
    </>
  );
}

const IconsType = () => {
  return (
    <View style={styles.containerTipo}>
      <View style={styles.containerIcon}>
        <FontAwesomeIcon icon={faDog} size={30} color={colors.Gray_400} />
      </View>
      <View style={styles.containerIcon}>
        <FontAwesomeIcon icon={faCat} size={30} color={colors.Gray_400} />
      </View>
    </View>
  );
};

const IconsTam = () => {
  return (
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
  );
};

const IconsGender = () => {
  return (
    <View style={styles.containerGen}>
      <View style={styles.containerIcon}>
        <FontAwesomeIcon icon={faMars} size={30} color={colors.Gray_400} />
      </View>
      <View style={styles.containerIcon}>
        <FontAwesomeIcon icon={faVenus} size={30} color={colors.Gray_400} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  containerLabels: {
    flexDirection: 'row',
    marginTop: 4,
  },
  containerIcon: {
    backgroundColor: colors.Gray_100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.Gray_400,
    margin: 1,
    width: 45,
    height: 45,
  },
  containerTipo: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.Gray_400,
    borderRadius: 8,
    padding: 2,
    width: '27.5%',
  },
  containerTam: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.Gray_400,
    padding: 2,
    borderRadius: 8,
    width: '39.5%',
  },
  containerGen: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.Gray_400,
    borderRadius: 8,
    padding: 2,
    width: '27.5%',
  },
  title: {
    fontSize: 16,
    color: colors.Gray_100,
  },
});
