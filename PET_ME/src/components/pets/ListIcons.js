import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDog, faCat, faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import colors from '../../utils/colors';
import {addFilter} from '../../services/petServices';

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
  return (
    <View style={styles.alingCenter}>
      <Text style={styles.title}>Tipo</Text>
      <View style={styles.containerTipo}>
        <Pressable
          style={[
            styles.containerIcon,
            typePet.includes('dog') ? styles.active : styles.inactive,
          ]}
          onPress={() => addFilter('dog', typePet, setTypePet)}>
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
          onPress={() => addFilter('cat', typePet, setTypePet)}>
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
  const [petsize, setPetsize] = useState([]);

  return (
    <View style={styles.alingCenter}>
      <Text style={styles.title}>Tamaño</Text>
      <View style={styles.containerTam}>
        <Pressable
          style={[
            styles.containerIcon,
            petsize.includes('small') ? styles.active : styles.inactive,
          ]}
          onPress={() => addFilter('small', petsize, setPetsize)}>
          <FontAwesomeIcon
            icon={faDog}
            size={18}
            color={petsize.includes('small') ? colors.Orange : colors.Gray_400}
          />
        </Pressable>
        <Pressable
          style={[
            styles.containerIcon,
            petsize.includes('medium') ? styles.active : styles.inactive,
          ]}
          onPress={() => addFilter('medium', petsize, setPetsize)}>
          <FontAwesomeIcon
            icon={faDog}
            size={24}
            color={petsize.includes('medium') ? colors.Orange : colors.Gray_400}
          />
        </Pressable>
        <Pressable
          style={[
            styles.containerIcon,
            petsize.includes('big') ? styles.active : styles.inactive,
          ]}
          onPress={() => addFilter('big', petsize, setPetsize)}>
          <FontAwesomeIcon
            icon={faDog}
            size={30}
            color={petsize.includes('big') ? colors.Orange : colors.Gray_400}
          />
        </Pressable>
      </View>
    </View>
  );
};

const IconsGender = () => {
  const [petgender, setPetgender] = useState([]);
  return (
    <View style={styles.alingCenter}>
      <Text style={styles.title}>Sexo</Text>
      <View style={styles.containerGen}>
        <Pressable
          style={[
            styles.containerIcon,
            petgender.includes('male') ? styles.active : styles.inactive,
          ]}
          onPress={() => addFilter('male', petgender, setPetgender)}>
          <FontAwesomeIcon
            icon={faMars}
            size={30}
            color={petgender.includes('male') ? colors.Orange : colors.Gray_400}
          />
        </Pressable>
        <Pressable
          style={[
            styles.containerIcon,
            petgender.includes('female') ? styles.active : styles.inactive,
          ]}
          onPress={() => addFilter('female', petgender, setPetgender)}>
          <FontAwesomeIcon
            icon={faVenus}
            size={30}
            color={
              petgender.includes('female') ? colors.Orange : colors.Gray_400
            }
          />
        </Pressable>
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
