import {View, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import RNBounceable from '@freakycoder/react-native-bounceable';

const ButtonPet = props => {
  const {text, typeButton, onPressFunction, style, disabled = false} = props;
  return (
    <View style={style}>
      <RNBounceable
        disabled={disabled}
        style={
          !disabled
            ? typeButton === 'A'
              ? containerA
              : typeButton === 'B'
              ? containerB
              : typeButton === 'C'
              ? containerC
              : typeButton === 'D'
              ? containerD
              : containerE
            : disableButton
        }
        onPress={onPressFunction}>
        <Text
          style={
            !disabled
              ? typeButton === 'A' || typeButton === 'B'
                ? TextA
                : typeButton === 'E'
                ? TextC
                : TextB
              : DisableText
          }>
          {text}
        </Text>
      </RNBounceable>
    </View>
  );
};

export default ButtonPet;

const styles = StyleSheet.create({
  general: {fontFamily: 'BebasNeueBold', fontSize: 30},
  textA: {color: colors.Gray_400},
  textB: {color: colors.Gray_100},
  textC: {
    color: colors.Orange,
    fontFamily: 'ArchivoNarrow-Regular',
    fontSize: 20,
  },
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
  buttonE: {
    backgroundColor: colors.Gray_100,
  },
  buttonContainer: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonContainerE: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    borderColor: colors.Orange,
    borderWidth: 2,
  },
  disableButton: {
    backgroundColor: '#ABABAB',
  },
  disabletext: {
    color: '#FFFF',
  },
});
const containerA = StyleSheet.compose(styles.buttonA, styles.buttonContainer);
const containerB = StyleSheet.compose(styles.buttonB, styles.buttonContainer);
const containerC = StyleSheet.compose(styles.buttonC, styles.buttonContainer);
const containerD = StyleSheet.compose(styles.buttonD, styles.buttonContainer);
const containerE = StyleSheet.compose(styles.buttonE, styles.buttonContainerE);
const disableButton = StyleSheet.compose(
  styles.disableButton,
  styles.buttonContainer,
);
const DisableText = StyleSheet.compose(styles.general, styles.disabletext);
const TextA = StyleSheet.compose(styles.general, styles.textA);
const TextB = StyleSheet.compose(styles.general, styles.textB);
const TextC = StyleSheet.compose(styles.textC);
