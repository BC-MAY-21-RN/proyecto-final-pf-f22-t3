import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import BgPaws from '../components/BgPaws';
import PickerImage from '../components/PickerImage';
import FieldForm from '../components/FieldForm';
import {Formik} from 'formik';
import ButtonPet from '../components/ButtonPet';
import AddPublicationSchema from '../utils/AddPublicationSchema';
import colors from '../utils/colors';
import {uploadImage} from '../services/petServices';

const initialValues = {
  description: '',
  image: [],
};

export default function AddPublication() {
  const [images, setImages] = useState([]);
  const formikRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const addPublication = async values => {
    setIsLoading(true);
    try {
      const imageUrl = await Promise.all(
        values.image.map(img => {
          return uploadImage(img);
        }),
      ).then(responses => {
        return responses;
      });
      values.image = imageUrl
      console.log(values.image);
    } catch (error) {
      console.log("Error: ", error);
    }
    
  };

  return (
    <BgPaws opacity={0.2}>
      <View style={styles.container}>
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
            onSubmit={values => addPublication(values)}>
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
}

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
    alignItems: 'center',
    justifyContent: 'center',
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
