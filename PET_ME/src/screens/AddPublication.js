import {View, Text, StyleSheet, Image, ActivityIndicator, Alert} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import BgPaws from '../components/BgPaws';
import PickerImage from '../components/PickerImage';
import FieldForm from '../components/FieldForm';
import {Formik} from 'formik';
import ButtonPet from '../components/ButtonPet';
import AddPublicationSchema from '../utils/AddPublicationSchema';
import colors from '../utils/colors';
import {uploadImage} from '../services/petServices';
import useAuth from '../hooks/useAuth';
import {addPublication} from '../services/comunityServices';
import {useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const initialValues = {
  description: '',
  image: [],
};

const AddPublication = () => {
  const [images, setImages] = useState([]);
  const formikRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const {authUser} = useAuth();
  const navigation = useNavigation();
  const user = {
    emailUser: authUser.email,
    name: authUser.name,
    photo: authUser.photo,
  };

  async function addPub(values) {
    setIsLoading(true);
    const imageUrl = await Promise.all(
      values.image.map(img => {
        return uploadImage(img);
      }),
    ).then(responses => {
      return responses;
    });
    values.image = imageUrl;
    const res = await addPublication(values);
    setIsLoading(false);
    if (res) {
      navigation.navigate('Comunidad');
    }
    else {
      alert('Error al publicar');
    }
  }

  return (
    <BgPaws opacity={0.2}>
      <View style={styles.container}>
        <View style={styles.header}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            color="#fff"
            size={40}
            style={{marginLeft: -150, marginTop: 400}}
            onPress={navigation.goBack}
          />
        </View>
        <Image
            source={require('../assets/logos/Brand.png')}
            style={styles.logo}
          />
        <Text style={styles.title}>Agregar publicación</Text>

        <View>
          <Formik
            initialValues={initialValues}
            innerRef={formikRef}
            validateOnMount={true}
            validationSchema={AddPublicationSchema}
            onSubmit={values => addPub({...values, ...user})}>
            {({handleSubmit, values, isValid}) => (
              <View>
                <PickerImage
                  maxSelectedAssets={1}
                  name={'image'}
                  images={images}
                  setImages={setImages}
                  description={'Agrega una imagen a tu publicación'}
                />
                <FieldForm
                  title={'Descripción'}
                  label={'Cuentanos sobre tu publicación'}
                  name={'description'}
                  styleField={'addPet'}
                />
                <ButtonPet
                  text={'Publicar'}
                  typeButton={'B'}
                  style={styles.btnSave}
                  onPressFunction={handleSubmit}
                  disabled={!isValid}
                />
                {isLoading ? (
                  <ActivityIndicator
                    size={50}
                    color={colors.Orange}
                    style={styles.indicator}
                  />
                ) : null}
              </View>
            )}
          </Formik>
        </View>
      </View>
    </BgPaws>
  );
};

export default AddPublication;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
  },
  header: {
    justifyContent: 'flex-end',
    marginTop: -100,
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  btnSave: {
    marginTop: 50,
  },
  indicator: {
    marginTop: 10,
  },
});
