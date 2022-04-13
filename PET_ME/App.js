import {View, Text, Image} from 'react-native';
import React from 'react';
import colors from './src/utils/colors';
import ButtonPet from './src/components/ButtonPet';
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: 'black',
      }}>
      <Image
        style={{alignSelf: 'center'}}
        source={require('./src/assets/logos/Brand.png')}
      />
      <Text
        style={{
          color: colors.Gray_400,
          fontSize: 50,
          fontFamily: 'ArchivoNarrow-VariableFont_wght',
        }}>
        gray 400
      </Text>
      <Text style={{color: colors.Gray_300, fontSize: 40}}>GRAY 300</Text>
      <Text style={{color: colors.Gray_200, fontSize: 30}}>GRAY 200</Text>
      <Text style={{color: colors.Gray_100, fontSize: 20}}>GRAY 100</Text>
      <Text style={{color: colors.Orange, fontSize: 50}}>ORANGE</Text>
      <ButtonPet
        text="Clic Me"
        typeButton="D"
        onPressFunction={() => console.log('my function')}
      />
    </View>
  );
};

export default App;
