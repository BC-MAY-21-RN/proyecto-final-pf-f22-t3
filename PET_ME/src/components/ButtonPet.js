import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const ButtonPet = props => {
  const {text, typeButton, onPressFunction} = props;
  return (
    <Pressable
      style={
        typeButton === 'A'
          ? containerA
          : typeButton === 'B'
          ? containerB
          : typeButton === 'C'
          ? containerC
          : containerD
      }
      onPress={onPressFunction}>
      <Text style={typeButton === 'A' || typeButton === 'B' ? TextA : TextB}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonPet;

const styles = StyleSheet.create({
  general: {fontFamily: 'BebasNeue Bold', fontSize: 25},
  textA: {color: colors.Gray_400},
  textB: {color: colors.Gray_100},
  buttonA: {
    backgroundColor: colors.Gray_100,
  },
  buttonB: {
    backgroundColor: colors.Gray_200,
  },
  buttonC: {
    backgroundColor: colors.Gray_300,
  },
  buttonD: {
    backgroundColor: colors.Gray_400,
  },
  buttonContainer: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
});

const containerA = StyleSheet.compose(styles.buttonA, styles.buttonContainer);
const containerB = StyleSheet.compose(styles.buttonB, styles.buttonContainer);
const containerC = StyleSheet.compose(styles.buttonC, styles.buttonContainer);
const containerD = StyleSheet.compose(styles.buttonD, styles.buttonContainer);
const TextA = StyleSheet.compose(styles.general, styles.textA);
const TextB = StyleSheet.compose(styles.general, styles.textB);
