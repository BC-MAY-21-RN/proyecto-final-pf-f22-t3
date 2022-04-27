import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import Border from '../components/Border';
import ButtonPet from '../components/ButtonPet';
import Img from '../components/Image';
import Title from '../components/Title';

const Start = () => {
  return (
    <BgPaws opacity={0.78}>
      <Image
        style={{alignSelf: 'center'}}
        source={require('../assets/logos/Brand.png')}
      />
      <Title text={'¡BIENVENIDO!'} textType={'title'} />
      <Border style={'border_orange'} />
      <View style={styles.container}>
        <Img
          source={require('../assets/pets/1_pet.png')}
          petName={'WILSON'}
          petAge={'3 años'}
          petGender={'M'}
          imageType={'img_pet'}
          textType={'TitleProfile'}
          textAgeType={'subTitleProfile'}
        />
        <Img
          source={require('../assets/pets/2_pet.png')}
          petName={'PEDILLOS'}
          petAge={'31 años'}
          petGender={'H'}
          imageType={'img_pet'}
          textType={'TitleProfile'}
          textAgeType={'subTitleProfile'}
        />
        <Img
          source={require('../assets/pets/3_pet.png')}
          petName={'FREDDY'}
          petAge={'4 años'}
          petGender={'H'}
          imageType={'img_pet'}
          textType={'TitleProfile'}
          textAgeType={'subTitleProfile'}
        />
        <Img
          source={require('../assets/pets/4_pet.png')}
          petName={'NELSON'}
          petAge={'2 años'}
          petGender={'H'}
          imageType={'img_pet'}
          textType={'TitleProfile'}
          textAgeType={'subTitleProfile'}
        />
      </View>
      <ButtonPet text={'INGRESAR'} typeButton={'B'} />
    </BgPaws>
  );
};
//<Icon name={rightIcon} size={20} color={colors.Gray_200} />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const container = StyleSheet.compose(styles.container);

export default Start;
