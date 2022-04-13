import {View, Text, Image} from 'react-native';
import React from 'react';
import colors from './src/utils/colors';
const App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', padding: 20}}>
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
    </View>
  );
};

export default App;
