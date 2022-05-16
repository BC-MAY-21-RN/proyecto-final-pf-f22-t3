import {Image,StyleSheet,Text,View} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import colors from '../utils/colors';
import StyleBox from '../utils/StyleBox';
import InfoUser from '../utils/InfoUser';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileUser = () => {
  return (
      <BgPaws opacity={0.78}>
        <View style={styles.container}>
          <View style={StyleBox.box_header}>
            <View style={StyleBox.width20}>
              <Image
                style={StyleBox.box_profileimg}
                source={require('../assets/users/1_user.png')}
              />
            </View>
            <View style={StyleBox.width60}>
              <Text style={StyleBox.box_title}> {InfoUser.ProfileData.name} </Text>
              <Text style={StyleBox.box_subtitle}> {InfoUser.ProfileData.email} </Text>
            </View>
            <View style={StyleBox.width20}>
              <Icon name={'sign-out'} size={20} color={colors.Orange}/>
              <Text style={StyleBox.box_little}> {'Cerrar Sesión'} </Text>
            </View>
            <View style={StyleBox.width100}>
              <Text style={StyleBox.box_buttonOrange}> {'Favoritos'} </Text>
              <Text style={StyleBox.box_button}> {'Publicaciones'} </Text>
              <Text style={StyleBox.box_button}> {'Adopciones'} </Text>
              <Text style={StyleBox.box_button}> {'Notificaciones'} </Text>
            </View>
          </View>
          <View style={StyleBox.box_footer}></View>
        </View>
      </BgPaws>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
    margin: 0,
  },
});

const container = StyleSheet.compose(styles.container);

export default ProfileUser