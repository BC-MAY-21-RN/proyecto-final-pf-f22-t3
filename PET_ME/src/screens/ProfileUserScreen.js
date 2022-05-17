import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import colors from '../utils/colors';
import StyleBox from '../utils/StyleBox';
import InfoUser from '../utils/InfoUser';
import Icon from 'react-native-vector-icons/FontAwesome';
import useAuth from '../hooks/useAuth';

const ProfileUser = () => {
  const {authUser} = useAuth();
  return (
    <BgPaws opacity={0.78}>
      <View style={styles.container}>
        <View style={StyleBox.box_header}>
          <View style={StyleBox.width20}>
            <Image
              style={StyleBox.box_profileimg}
              source={{uri: authUser.photo}}
            />
          </View>
          <View style={StyleBox.width60}>
            <Text style={StyleBox.box_title}>
              {' '}
              {authUser.name}{' '}
            </Text>
            <Text style={StyleBox.box_subtitle}>
              {' '}
              {authUser.email}{' '}
            </Text>
          </View>
          <View style={StyleBox.width20}>
            <Icon name={'sign-out'} size={20} color={colors.Orange} />
            <Text style={StyleBox.box_little}> {'Cerrar Sesión'} </Text>
          </View>
          <View style={StyleBox.width100}>
            <Text style={StyleBox.box_buttonOrange}> {'Favoritos'} </Text>
            <Text style={StyleBox.box_button}> {'Publicaciones'} </Text>
            <Text style={StyleBox.box_button}> {'Adopciones'} </Text>
            <Text style={StyleBox.box_button}> {'Notificaciones'} </Text>
          </View>
        </View>
        <View style={StyleBox.box_footer} />
      </View>
    </BgPaws>
  );
};

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

export default ProfileUser;
