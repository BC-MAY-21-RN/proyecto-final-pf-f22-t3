import {View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import ButtonPet from '../ButtonPet';
import IconTitle from '../IconTitle';
import {startAdoptionProcess} from '../../services/petServices';
import useAuth from '../../hooks/useAuth';

const FooterDetails = props => {
  const DataText = props.info;
  const {setModalVisible, post} = props;
  const {authUser} = useAuth();

  const handleAdoption = async () => {
    setModalVisible(true);
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
        ) : null}
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
