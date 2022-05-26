import {StyleSheet, View, ActivityIndicator, Alert} from 'react-native';
import React, {useState} from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Title from '../components/Title';
import colors from '../utils/colors';
import {Formik} from 'formik';
import AddPetSchemaTwo from '../utils/AddPetSchemaTwo';
import Checkbox from '../components/Checkbox';
import TextAreaInput from '../components/TextAreaInput';
import InputPickerPet from '../components/InputPickerPet';
import InputTextAndPicker from '../components/InputTextAndPicker';
import {savePetPost, uploadImage} from '../services/petServices';
import ModalPet from '../components/modal/ModalPet';
import ModalContentAddPet from '../components/modal/ModalContentAddPet';
import useAuth from '../hooks/useAuth';

const initialValues = {
  petage: [],
  petsize: '',
  petgender: '',
  sterilized: false,
  vaccinated: false,
  dewormed: false,
  moreinfo: '',
};

const AddPetScreenTwo = ({route, navigation}) => {
  const {params} = route;
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {authUser} = useAuth();
  const userEmail = {userEmail: authUser.email};

  const addPet = async values => {
    setIsLoading(true);
    const imageUrl = await Promise.all(
      values.petimages.map(img => {
        return uploadImage(img);
      }),
    ).then(responses => {
      return responses;
    });
    values.petimages = imageUrl;
    const res = await savePetPost(values);
    setIsLoading(false);
    if (res) {
      setModalVisible(true);
    } else {
      Alert.alert('Error', 'Error al guardar el post');
    }
  };
  return (
    <>
      <BgPaws opacity={0.54} scroll={true}>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.Orange} />
        ) : (
          <>
            <View style={styles.headerContainer}>
              <ButtonPet
                text={'Atras'}
                typeButton={'E'}
                onPressFunction={() => {
                  navigation.goBack();
                }}
              />
              <Title
                style={{marginBottom: 0}}
                text={'2/2'}
                textType={'title'}
              />
            </View>
            <View>
              <Formik
                initialValues={initialValues}
                validateOnMount={true}
                validationSchema={AddPetSchemaTwo}
                onSubmit={values =>
                  addPet({...params, ...values, ...userEmail})
                }>
                {({handleSubmit, isValid}) => (
                  <View style={styles.form}>
                    <InputTextAndPicker
                      label={'Edad'}
                      name={'petage'}
                      style={styles.marginTop10}
                      prompt={'Elige uno'}
                      items={[
                        {label: 'Meses', value: 'month'},
                        {label: 'Años', value: 'year'},
                      ]}
                    />

                    <View style={styles.fieldDouble}>
                      <InputPickerPet
                        label={'Tamaño'}
                        name={'petsize'}
                        style={{width: '45%'}}
                        prompt={'Elige uno'}
                        items={[
                          {label: 'Pequeño', value: 'Pequeño'},
                          {label: 'Mediano', value: 'Mediano'},
                          {label: 'Grande', value: 'Grande'},
                        ]}
                      />
                      <InputPickerPet
                        label={'Sexo'}
                        name={'petgender'}
                        style={{width: '45%'}}
                        prompt={'Elige uno'}
                        items={[
                          {label: 'Hembra', value: 'female'},
                          {label: 'Macho', value: 'male'},
                        ]}
                      />
                    </View>
                    <View style={styles.marginTop10}>
                      <Checkbox
                        label={'Esterilizado'}
                        name={'sterilized'}
                        style={styles.marginTop10}
                      />
                      <Checkbox
                        label={'Vacunado'}
                        name={'vaccinated'}
                        style={styles.marginTop10}
                      />
                      <Checkbox
                        label={'Desparasitado'}
                        name={'dewormed'}
                        style={styles.marginTop10}
                      />
                    </View>
                    <TextAreaInput
                      style={styles.marginTop10}
                      label={'Información adicional'}
                      name={'moreinfo'}
                      placeholder={'Cuentanos mas sobre la mascota'}
                    />
                    <ButtonPet
                      text={'Enviar'}
                      typeButton={'B'}
                      style={styles.nextButtom}
                      onPressFunction={handleSubmit}
                      disabled={!isValid}
                    />
                  </View>
                )}
              </Formik>
            </View>
          </>
        )}
      </BgPaws>
      <ModalPet
        title={'¡Gracias humano!'}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}>
        <ModalContentAddPet />
      </ModalPet>
    </>
  );
};

export default AddPetScreenTwo;

const styles = StyleSheet.create({
  fieldDouble: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 20,
  },
  marginTop10: {marginTop: 10},
  nextButtom: {
    marginTop: 27,
    marginBottom: 20,
  },
  pickImgContainer: {
    paddingVertical: 15,
    backgroundColor: colors.Gray_100,
    borderRadius: 10,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: colors.Gray_400,
    borderWidth: 3,
  },
  pickImgSubTitle: {
    fontSize: 15,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_300,
  },
  pickImgTitle: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_400,
    marginVertical: 10,
  },
});
