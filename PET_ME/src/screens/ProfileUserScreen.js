import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import colors from '../utils/colors';
import StyleBox from '../utils/StyleBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import useAuth from '../hooks/useAuth';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPaperPlane,
  faPenToSquare,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import {uploadImage} from '../services/petServices';
import {editUserFirestore} from '../services/usersServices';
import FavoritesBody from '../components/perfil/Favorites';
import AdoptionsBody from '../components/perfil/Adoptions';
import PublicationsBody from '../components/perfil/Publications';

const ProfileUser = props => {
  const {navigation} = props;
  const {authUser, logout, setUser} = useAuth();
  const [image, setImage] = useState();
  const [imageUser, setImageUser] = useState(authUser.photo);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavoritos, setIsFavoritos] = useState(true);
  const [isPublications, setIsPublications] = useState(false);
  const [isAdoptions, setIsAdoptions] = useState(false);

  const logOut = () => {
    logout();
    navigation.navigate('Login');
  };

  const styleFav = isFavoritos ? styles.active : styles.inactive;
  const stylePub = isPublications ? styles.active : styles.inactive;
  const styleAdo = isAdoptions ? styles.active : styles.inactive;

  const clickFav = () => {
    setIsFavoritos(true);
    setIsPublications(false);
    setIsAdoptions(false);
  };

  const clickPub = () => {
    setIsFavoritos(false);
    setIsPublications(true);
    setIsAdoptions(false);
  };

  const clickAdo = () => {
    setIsFavoritos(false);
    setIsPublications(false);
    setIsAdoptions(true);
  };

  const editImage = async () => {
    try {
      const response = await MultipleImagePicker.openPicker({
        selectedAssets: image,
        maxSelectedAssets: 1,
        isExportThumbnail: true,
        usedCameraButton: false,
        doneTitle: 'Subir',
        selectedColor: 'red',
      });
      if (response) {
        setIsLoading(true);
        const imageUrl = await uploadImage(response[0]);
        const res = await editUserFirestore(authUser.email, imageUrl);
        if (res) {
          setImageUser(imageUrl);
          setUser(imageUrl);
          setImage([]);
        }
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e.code, e.message);
    }
  };

  return (
    <BgPaws opacity={0.78}>
      <View style={styles.container}>
        <View style={StyleBox.box_header}>
          <View style={StyleBox.width20}>
            {isLoading ? (
              <ActivityIndicator
                size={50}
                color={colors.Orange}
                style={styles.indicator}
              />
            ) : (
              <Image
                style={StyleBox.box_profileimg}
                source={{uri: imageUser}}
              />
            )}
            <FontAwesomeIcon
              icon={faCirclePlus}
              size={20}
              color={colors.Orange}
              style={StyleBox.iconEdit}
              onPress={() => editImage()}
            />
          </View>
          <View style={StyleBox.width60}>
            <Text style={StyleBox.box_title}> {authUser.name} </Text>
            <Text style={StyleBox.box_subtitle}> {authUser.email} </Text>
          </View>
          <Pressable style={StyleBox.width20} onPress={() => logOut()}>
            <Icon name={'sign-out'} size={30} color={colors.Orange} />
            <Text style={StyleBox.box_little}> {'Cerrar Sesión'} </Text>
          </Pressable>
          <View style={StyleBox.width100}>
            <Pressable onPress={() => clickFav()} style={StyleBox.button_tab}>
              <Text style={styleFav}> {'Favoritos'} </Text>
            </Pressable>
            <Pressable onPress={() => clickPub()} style={StyleBox.button_tab}>
              <Text style={stylePub}> {'Publicaciones'} </Text>
            </Pressable>
            <Pressable onPress={() => clickAdo()} style={StyleBox.button_tab}>
              <Text style={styleAdo}> {'Adopciones'} </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.containerList}>
          {isFavoritos ? <FavoritesBody /> : null}
          {isPublications ? <PublicationsBody /> : null}
          {isAdoptions ? <AdoptionsBody /> : null}
        </View>
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
    width: '110%',
    marginLeft: -20,
  },
  containerList: {
    width: '100%',
    height: 400,
    paddingHorizontal: 20,
  },
  active: {
    width: '100%',
    color: colors.Gray_100,
    backgroundColor: colors.Orange,
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 15,
    height: 30,
  },
  inactive: {
    color: colors.Gray_500,
    fontSize: 16,
    textAlign: 'center',
  },
});

const container = StyleSheet.compose(styles.container);

export default ProfileUser;
