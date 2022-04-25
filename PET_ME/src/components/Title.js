import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Title = props => {
  const {text, textType, option} = props;
  return (
    <Text style={textType === 'subTitle' ? subTitle : title}>
      {text}
      {props.option ? (
        <Pressable onPress={() => console.log(`ir a ${props.option}`)}>
          <Text style={styles.option}>{option}</Text>
        </Pressable>
      ) : (
        ' '
      )}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  general: {
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontFamily: 'BebasNeueBold',
    color: colors.Gray_100,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_200,
  },
  option: {
    fontSize: 19,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_100,
    marginLeft: 5,
    fontWeight: 'bold',
    top: 5,
  },
});

const title = StyleSheet.compose(styles.general, styles.title);
const subTitle = StyleSheet.compose(styles.general, styles.subTitle);
