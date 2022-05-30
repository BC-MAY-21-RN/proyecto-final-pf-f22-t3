import {View, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import colors from '../../utils/colors';
import ButtonPet from '../ButtonPet';
import IconTitle from '../IconTitle';
import {startAdoptionProcess, removeDoc} from '../../services/petServices';
import useAuth from '../../hooks/useAuth';
import {useNavigation} from '@react-navigation/native';

const FooterDetails = props => {
  const DataText = props.info;
  const {setModalVisible, post} = props;
  const {authUser} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleAdoption = async () => {
    setModalVisible(true);
    await startAdoptionProcess(post, authUser);
  };
  const removePost = async (collection, id) => {
    setIsLoading(true);
    await removeDoc(collection, id);
    setIsLoading(false);
    navigation.goBack();
  };
  const handleRemovePost = async () => {
    Alert.alert(
      'Eliminar',
      'Esta seguro que desea eliminar su publicación de adopcion',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => removePost('petpost', post.id).catch(console.error),
        },
      ],
    );
    await startAdoptionProcess(post, authUser);
  };
  return (
    <View style={styles.cont}>
      <View style={styles.check}>
        {DataText.map((item, index) => {
          return (
            <IconTitle
              icon="check-square"
              size={20}
              color={item.state === true ? colors.Orange : colors.Gray_400}
              title={item.title}
              type="I"
              key={index}
            />
          );
        })}
      </View>
      <View style={styles.contButton}>
        {post.userEmail !== authUser.email ? (
          <ButtonPet
            typeButton={'D'}
            text="Adoptar"
            onPressFunction={handleAdoption}
          />
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <ButtonPet
            typeButton={'C'}
            text="Eliminar"
            onPressFunction={handleRemovePost}
          />
        )}
      </View>
    </View>
  );
};

export default FooterDetails;
const styles = StyleSheet.create({
  cont: {flex: 2, flexDirection: 'row'},
  check: {flex: 2, justifyContent: 'center'},
  contButton: {
    flex: 3,
    justifyContent: 'center',
  },
});
