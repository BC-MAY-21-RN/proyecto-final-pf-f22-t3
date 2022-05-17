import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import Title from './Title';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ageFormated} from '../services/petServices';

const Img = ({petPost}) => {
  const {petimages, petname, petage, petgender} = petPost;

  return (
    <View style={styles.container_pet}>
      <Image
        source={{uri: petimages[0]}}
        resizeMode="cover"
        style={styles.img_pet}
      />
      <View style={styles.footerDetails}>
        <View>
          <Title
            style={{marginButton: 0}}
            text={petname}
            textType={'TitleProfile'}
          />
          <Title
            style={{marginButton: 0}}
            text={ageFormated(petage[0])}
            textType={'subTitleProfile'}
          />
        </View>
        <Icon
          name={petgender === 'female' ? 'venus' : 'mars'}
          size={30}
          color={petgender === 'female' ? colors.Pink : colors.Blue}
        />
      </View>
    </View>
  );
};

export default Img;

const styles = StyleSheet.create({
  container_pet: {
    borderWidth: 0,
    borderRadius: 10,
    width: '50%',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  img_pet: {
    borderWidth: 2,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
  footerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});
