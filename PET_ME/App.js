import {Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


import ButtonPet from './src/components/ButtonPet';
import BgPaws from './src/components/BgPaws';
import Title from './src/components/Title';
const App = () => {
  return (
    <BgPaws opacity={0.78}>
      <Image
        style={{alignSelf: 'center'}}
        source={require('./src/assets/logos/Brand.png')}
      />
      <Title text={'registro'} textType={'title'} />
      <Title
        text={'Ingresa para encontrar tu a mejor amigo'}
        textType={'subTitle'}
      />

      <ButtonPet
        text="Clic Me"
        typeButton="D"
        onPressFunction={() => console.log('my function')}
      />
    <Icon name="rocket" size={30} color="#900" />

    </BgPaws>
  );
};

export default App;
