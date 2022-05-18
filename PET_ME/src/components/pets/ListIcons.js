import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDog, faCat, faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import colors from '../../utils/colors';

export default function ListIcons() {
  return (
    <View style={styles.container}>
      <IconsType />
      <IconsTam />
      <IconsGender />
    </View>
  );
}

const IconsType = () => {
  const [typePet, setTypePet] = useState([]);

  const addTypePet = typeStr => {
    if (typePet.includes(typeStr)) {
      const typePetActuales = typePet.filter(type => type !== typeStr);
      setTypePet(typePetActuales);
    } else {
      // Agregar al state
      const newType = [...typePet, typeStr];
      setTypePet(newType);
    }
  };
  return (
    <View style={styles.alingCenter}>
      <Text style={styles.title}>Tipo</Text>
      <View style={styles.containerTipo}>
        <Pressable
          style={[
            styles.containerIcon,
            typePet.includes('dog') ? styles.active : styles.inactive,
          ]}
          onPress={() => addTypePet('dog')}>
          <FontAwesomeIcon
            icon={faDog}
            size={30}
            color={typePet.includes('dog') ? colors.Orange : colors.Gray_400}
          />
        </Pressable>
        <Pressable
          style={[
            styles.containerIcon,
            typePet.includes('cat') ? styles.active : styles.inactive,
          ]}
          onPress={() => addTypePet('cat')}>
          <FontAwesomeIcon
            icon={faCat}
            size={30}
            color={typePet.includes('cat') ? colors.Orange : colors.Gray_400}
          />
        </Pressable>
      </View>
    </View>
  );
};

const IconsTam = () => {
  return (
    <View style={styles.alingCenter}>
      <Text style={styles.title}>Tamaño</Text>
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
    </View>
  );
};

const IconsGender = () => {
  return (
    <View style={styles.alingCenter}>
      <Text style={styles.title}>Sexo</Text>
      <View style={styles.containerGen}>
        <View style={styles.containerIcon}>
          <FontAwesomeIcon icon={faMars} size={30} color={colors.Gray_400} />
        </View>
        <View style={styles.containerIcon}>
          <FontAwesomeIcon icon={faVenus} size={30} color={colors.Gray_400} />
        </View>
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
  alingCenter: {
    alignItems: 'center',
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
    margin: 1,
    width: 45,
    height: 45,
  },
  active: {
    borderColor: colors.Orange,
  },
  inactive: {
    borderColor: colors.Gray_400,
  },
  containerTipo: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.Gray_400,
    borderRadius: 8,
    padding: 2,
  },
  containerTam: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.Gray_400,
    padding: 2,
    borderRadius: 8,
  },
  containerGen: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.Gray_400,
    borderRadius: 8,
    padding: 2,
  },
  title: {
    fontSize: 16,
    color: colors.Gray_100,
    marginBottom: 8,
  },
});
