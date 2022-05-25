import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Title from '../components/Title';
import {Formik} from 'formik';
import AddPetSchema from '../utils/AddPetSchema';
import FieldForm from '../components/FieldForm';
import InputPickerPet from '../components/InputPickerPet';
import PickerImage from '../components/PickerImage';
import {useNavigation} from '@react-navigation/native';
import {getPetTypes, getDogBreeds, getCatBreeds} from '../services/petServices';

const initialValues = {
  petname: '',
  location: '',
  pettype: '',
  petbreed: '',
  petimages: [],
};
const AddPetScreenOne = () => {
  const navigation = useNavigation();
  const [petTypes, setPetTypes] = useState([]);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [catBreeds, setCatBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const formikRef = useRef(null);

  useEffect(() => {
    getPetTypes(setPetTypes);
    getDogBreeds(setDogBreeds);
    getCatBreeds(setCatBreeds);
  }, []);

  const resetForm = () => {
    formikRef.current.resetForm();
    setImages([]);
  };
  const nextForm = values => {
    navigation.navigate('AddPetPartTwo', values);
  };
  return (
    <BgPaws opacity={0.54} scroll={true}>
      <View style={styles.headerContainer}>
        <ButtonPet
          text={'Cancelar'}
          typeButton={'E'}
          onPressFunction={() => {
            resetForm();
            navigation.navigate('Inicio');
          }}
        />
        <Title style={styles.pagination} text={'1/2'} textType={'title'} />
      </View>
      <View style={styles.marginBottom20}>
        <Formik
          initialValues={initialValues}
          innerRef={formikRef}
          validateOnMount={true}
          validationSchema={AddPetSchema}
          onSubmit={values => nextForm(values)}>
          {({handleSubmit, values, isValid}) => (
            <View>
              <PickerImage
                maxSelectedAssets={3}
                name={'petimages'}
                images={images}
                setImages={setImages}
                description={'Agrega imágenes de tu mascota'}
              />
              <FieldForm
                title={'Nombre'}
                label={'Ingresa el nombre de tu mascota'}
                name={'petname'}
                styleField={'addPet'}
              />
              <FieldForm
                title={'Ciudad'}
                label={'Lugar donde se encuentra'}
                name={'location'}
                styleField={'addPet'}
              />
              <InputPickerPet
                label={'Tipo de mascota'}
                defaultSelect={'Elige un tipo de mascota'}
                name={'pettype'}
                style={styles.marginTop10}
                prompt={'Selecciona tipo'}
                items={petTypes}
              />
              <InputPickerPet
                label={'Raza'}
                defaultSelect={'Elige la raza de tu mascota'}
                name={'petbreed'}
                style={styles.marginTop10}
                prompt={'Selecciona raza'}
                items={values.pettype === 'dog' ? dogBreeds : catBreeds}
              />
              <ButtonPet
                text={'Siguiente'}
                typeButton={'B'}
                style={styles.nextButtom}
                onPressFunction={handleSubmit}
                disabled={!isValid}
              />
            </View>
          )}
        </Formik>
      </View>
    </BgPaws>
  );
};
export default AddPetScreenOne;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 20,
  },
  nextButtom: {
    marginTop: 27,
  },
  marginBottom20: {marginBottom: 20},
  pagination: {marginBottom: 0},
  imgItem: {height: 70, width: 70, borderRadius: 10},
});
