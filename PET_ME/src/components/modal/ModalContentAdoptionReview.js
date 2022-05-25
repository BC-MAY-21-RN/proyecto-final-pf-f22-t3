import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import IconTitle from '../IconTitle';
import colors from '../../utils/colors';
import ButtonPet from '../ButtonPet';
import {
  faCircleUser,
  faPhone,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import {setAdoptionReview} from '../../services/petServices';
import {useNavigation} from '@react-navigation/native';

const ModalContentAdoptionReview = props => {
  const navigation = useNavigation();
  const [isReviewed, setIsReviewed] = useState(false);
  const {info, setModalVisible} = props;
  const handleReview = async action => {
    const res = await setAdoptionReview(info.post.id, info.id, action);
    setIsReviewed(res);
  };
  return (
    <View style={styles.contentModal}>
      {!isReviewed ? (
        <>
          <View style={styles.marginVertical}>
            <IconTitle
              icon={faCircleUser}
              title={info.user.name}
              size={22}
              color={colors.Gray_400}
            />
            <IconTitle
              icon={faPhone}
              title={info.user.phone}
              size={22}
              color={colors.Gray_400}
            />
            <Pressable
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('DetailsPet', {pet: info.post});
              }}>
              <IconTitle
                icon={faFileLines}
                title={'Ir a publicación'}
                size={22}
                color={colors.Gray_400}
              />
            </Pressable>
          </View>
          <ButtonPet
            onPressFunction={() => {
              handleReview('toaccept');
            }}
            text="APROBAR"
            typeButton="D"
            style={styles.marginVertical}
          />
          <ButtonPet
            onPressFunction={() => handleReview('toreject')}
            text="RECHAZAR"
            typeButton="D"
          />
        </>
      ) : (
        <View style={styles.marginVertical}>
          <Text style={styles.contentText}>
            La revision se actualizó correctamente. Cierra este modal para
            revisar otros procesos
          </Text>
        </View>
      )}
    </View>
  );
};

export default ModalContentAdoptionReview;

const styles = StyleSheet.create({
  marginVertical: {marginVertical: 10},
  contentModal: {
    width: '100%',
  },
  contentText: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_400,
    marginVertical: 40,
  },
  buttonStyle: {
    width: '100%',
    marginVertical: 5,
  },
  textSub: {
    fontSize: 18,
    color: colors.Gray_300,
  },
});
