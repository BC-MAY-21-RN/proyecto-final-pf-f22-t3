import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

export default function CardComunity(props) {
  const {publication} = props;
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
        <FontAwesomeIcon icon={faHeart} size={30} color={colors.Orange} />
        <Text style={styles.textLike}>{publication.favs} Me gusta</Text>
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
