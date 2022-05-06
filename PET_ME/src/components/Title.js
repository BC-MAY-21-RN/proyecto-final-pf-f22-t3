import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Title = props => {
  const {text, textType, option, style} = props;
  return (
    <View style={style ? style : styles.container}>
      <Text
        style={
          textType === 'title'
            ? title
            : textType === 'subTitle'
            ? subTitle
            : textType === 'TitleProfile'
            ? TitleProfile
            : textType === 'textDescription'
            ? TextDescription
            : textType === 'name'
            ? name
            : textType === 'subName'
            ? subName
            : subTitleProfile
        }>
        {text}
        {props.option ? (
          <Pressable onPress={() => console.log(`ir a ${props.option}`)}>
            <Text style={styles.option}>{option}</Text>
          </Pressable>
        ) : null}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  general: {
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'BebasNeueBold',
    color: colors.Gray_100,
    width: '100%',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_200,
    width: '100%',
  },
  TitleProfile: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.White,
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 0,
    width: '100%',
  },
  subTitleProfile: {
    fontSize: 15,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.White,
    textAlign: 'left',
    paddingTop: 0,
    width: '80%',
  },
  TextDescription: {
    fontSize: 19,
    fontFamily: 'ArchivoNarrow-Regular',
    textAlign: 'justify',
  },
  option: {
    fontSize: 19,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_100,
    marginLeft: 5,
    fontWeight: 'bold',
    top: 5,
  },
  name: {
    fontFamily: 'ArchivoNarrow-Regular',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subName: {
    fontFamily: 'ArchivoNarrow-Regular',
    fontSize: 13.5,
    fontWeight: 'bold',
  },
});

const title = StyleSheet.compose(styles.general, styles.title);
const subTitle = StyleSheet.compose(styles.general, styles.subTitle);
const TitleProfile = StyleSheet.compose(styles.TitleProfile);
const subTitleProfile = StyleSheet.compose(styles.subTitleProfile);
const TextDescription = StyleSheet.compose(styles.TextDescription);
const name = StyleSheet.compose(styles.name);
const subName = StyleSheet.compose(styles.subName);
