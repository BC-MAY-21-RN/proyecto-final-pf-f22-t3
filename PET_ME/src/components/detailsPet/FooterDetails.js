import {View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import ButtonPet from '../ButtonPet';
import IconTitle from '../IconTitle';
const FooterDetails = props => {
  const DataText = props.info;
  return (
    <View style={styles.cont}>
      <View style={styles.check}>
        {DataText.map(index => {
          return (
            <IconTitle
              icon="check-square"
              size={20}
              color={index.state === true ? colors.Orange : colors.Gray_400}
              title={index.title}
              type="I"
            />
          );
        })}
      </View>
      <View style={styles.contButton}>
        <ButtonPet typeButton={'D'} text="Adoptar" />
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
