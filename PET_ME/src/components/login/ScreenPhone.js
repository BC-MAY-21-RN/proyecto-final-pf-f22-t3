import { View, Modal, Text, Image, TextInput, StyleSheet, Alert, ActivityIndicator} from 'react-native'
import React, {useState} from 'react'
import colors from '../../utils/colors';
import {loginGoogle} from '../../services/usersServices';
import ButtonPet from '../ButtonPet';
import useAuth from '../../hooks/useAuth';

export default function PhoneNumber(props) {
  const {navigation, route} = props;
  const {user} = route.params;
  const [phone, setPhone] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const {loginG} = useAuth(); 
  const handleSubmit = async () => {
    setIsLoading(true);
    const userFirestore = {
      email: user.email,
      phone: phone,
      name: user.name,
      photo: user.photo
    }
    const res = await loginGoogle(userFirestore);
    if (res) {
      loginG(userFirestore);
      setIsLoading(false);
      navigation.navigate('Home');
    }
    else {
      setIsLoading(false);
      Alert.alert(
        'Error al agregar usuario',
        'Fallo a la hora de iniciar sesión con Google, intentelo nuevamente',
      );
      navigation.navigate('Login');
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={true}
      onRequestClose={() => {
        navigation.goBack();
      }}>
     <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={require('../../assets/logos/Logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Agrega un número de teléfono</Text>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Número de teléfono"
                  keyboardType="numeric"
                  dataDetectorTypes={'phoneNumber'}
                  maxLength={10}
                  onChangeText={text => setPhone(text)}
                />
                {isLoading ? (<ActivityIndicator size="large" color={colors.Orange} />) : (
                <ButtonPet disabled={phone.length < 10} onPressFunction={() => handleSubmit()} text='Continuar' typeButton='D' style={styles.button} />)}
              </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(37,51,52, 0.77 )',
  },
  logo: {position: 'absolute', top: '-30%'},
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: colors.Gray_200,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: 'BebasNeueBold',
    color: colors.Gray_400,
    width: '100%',
    textAlign: 'center',
    paddingTop: 100,
  },
  input: {
    borderColor: colors.Gray_500,
    borderWidth: 2,
    width: 200,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'BebasNeueBold',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'BebasNeueRegular',
    color: colors.Gray_100,
  },
})