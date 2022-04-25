import {Text, View, TextInput, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useField} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';

const FieldForm = ({label, securePass, ...props}) => {
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
      <View style={styles.Field}>
        <TextInput
          {...props}
          secureTextEntry={showPass}
          value={field.value}
          onBlur={() => helpers.setTouched(!meta.touched)}
          placeholder={label}
          placeholderTextColor={colors.Gray_200}
          onChangeText={helpers.setValue}
          style={styles.inputText}
          keyboardType={props.keyboard}
        />
        {label == 'Contraseña*' && (
          <>
            {props.screen == 'signup' && (
              <Text style={{fontSize: 14}}>
                Use 8 or more characters with a mix letters, numbers and
                symbols.
              </Text>
            )}
            <Pressable
              onPress={() => {
                handleShowPass();
              }}
              style={{position: 'absolute', right: 10, top: 10}}>
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
  Field: {
    borderBottomColor: colors.Gray_400,
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  inputText: {
    fontFamily: 'ArchivoNarrow-Regular',
    fontSize: 18,
    color: colors.Gray_200,
  },
});
