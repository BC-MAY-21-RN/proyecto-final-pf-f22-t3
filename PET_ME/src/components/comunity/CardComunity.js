import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../utils/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { faHeart as heart } from '@fortawesome/free-solid-svg-icons';
import {updateLikes} from '../../services/comunityServices';
import useAuth from '../../hooks/useAuth';

export default function CardComunity(props) {
  const {publication} = props;
  const {id, favs} = publication;
  const [isLike, setIsLike] = useState(false);
  const [newFavs, setNewFavs] = useState(favs.length);
  const {authUser} = useAuth();

  const i = favs.indexOf(authUser.email);

  useEffect(() => {
    if (i !== -1) {
      setIsLike(true);
    }
  }, []);

  const icon = isLike ? heart : faHeart;

  async function addLike() {
    const favsNum = newFavs + 1;
    setNewFavs(favsNum);
    favs.push(authUser.email);
    await updateLikes(id, favs);
    setIsLike(!isLike);
  };

  async function removeLike() {
    const favsNum = newFavs - 1;
    setNewFavs(favsNum);
    favs.splice(i, 1);
    await updateLikes(id, favs);
    setIsLike(!isLike);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlePubli}>
        <Image source={{uri: publication.imgUser}} style={styles.imgUser} />
        <Text style={styles.titleText}>{publication.userName}</Text>
      </View>
      <View style={styles.contentImgPubli}>
        <Image source={{uri: publication.img}} style={styles.imgPubli} />
      </View>
      <View style={styles.containerLikes}>
        <FontAwesomeIcon icon={icon} size={30} color={colors.Orange} onPress={isLike ? removeLike : addLike}/>
        <Text style={styles.textLike}>{newFavs} Me gusta</Text>
      </View>
      <View>
        <Text style={styles.textPubli}>{publication.title}</Text>
        <Text style={styles.textComment}>Ver los 5 comentarios</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
    width: 400,
  },
  titlePubli: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  imgUser: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: colors.Orange,
    borderWidth: 3,
    marginRight: 20,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.Gray_500,
  },
  contentImgPubli: {
    width: '100%',
    height: 200,
  },
  imgPubli: {
    width: '98%',
    height: '100%',
    marginLeft: 10,
  },
  containerLikes: {
    flexDirection: 'row',
    margin: 5,
    marginLeft: 15,
  },
  textLike: {
    fontSize: 18,
    color: colors.Gray_400,
    marginLeft: 15,
  },
  textPubli: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.Gray_500,
    marginLeft: 15,
  },
  textComment: {
    fontSize: 16,
    color: colors.Gray_400,
    marginLeft: 15,
  },
});
