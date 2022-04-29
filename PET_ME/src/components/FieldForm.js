import {Text, View, TextInput, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useField} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';
import Title from './Title';

const FieldForm = ({label, title, securePass, styleField, ...props}) => {
  const [field, meta, helpers] = useField(props);
  const [showPass, setShowPass] = useState(securePass);
  const [rightIcon, setRightIcon] = useState('eye');

  const handleShowPass = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-slash');
      setShowPass(!showPass);
    } else if (rightIcon === 'eye-slash') {
      setRightIcon('eye');
      setShowPass(!showPass);
    }
  };
  return (
    <View>
      <View>
        {meta.error && meta.touched && (
          <Text style={{color: colors.Orange}}>{meta.error}</Text>
        )}
      </View>
      {styleField === 'addPet' && (
        <Title text={title} textType={'TitleProfile'} />
      )}
      <View style={styleField === 'addPet' ? fieldAddPet : fieldDefault}>
        <TextInput
          {...props}
          secureTextEntry={showPass}
          value={field.value}
          onBlur={() => helpers.setTouched(!meta.touched)}
          placeholder={label}
          placeholderTextColor={
            styleField === 'addPet' ? colors.Gray_300 : colors.Gray_200
          }
          onChangeText={helpers.setValue}
          style={styleField === 'addPet' ? inputTextAddPet : inputTextDefaul}
          keyboardType={props.keyboard}
        />
        {label === 'Contraseña*' && (
          <>
            {props.screen === 'signup' && (
              <Text style={styles.passInfo}>
                Use 8 or more characters with a mix letters, numbers and
                symbols.
              </Text>
            )}
            <Pressable
              onPress={() => {
                handleShowPass();
              }}
              style={styles.iconShowPass}>
              <Icon name={rightIcon} size={20} color={colors.Gray_200} />
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default FieldForm;

const styles = StyleSheet.create({
  field: {
    borderBottomColor: colors.Gray_400,
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  fieldAddPet: {
    backgroundColor: colors.Gray_100,
    borderRadius: 32,
  },
  inputText: {
    fontFamily: 'ArchivoNarrow-Regular',
    fontSize: 18,
  },
  inputTextAddPet: {
    color: colors.Gray_400,
    paddingHorizontal: 25,
    paddingVertical: 13,
  },
  inputTextDefaul: {
    color: colors.Gray_200,
  },
  passInfo: {
    fontSize: 14,
  },
  iconShowPass: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

const inputTextAddPet = StyleSheet.compose(
  styles.inputText,
  styles.inputTextAddPet,
);
const inputTextDefaul = StyleSheet.compose(
  styles.inputText,
  styles.inputTextDefaul,
);
const fieldDefault = StyleSheet.compose(styles.field);
const fieldAddPet = StyleSheet.compose(styles.fieldAddPet);
