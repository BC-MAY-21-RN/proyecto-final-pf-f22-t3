import {Image} from 'react-native';
import React from 'react';
import Title from '../components/Title';

const HeaderLogin = props => {
  return (
    <>
      <Image
        source={require('../assets/logos/Brand.png')}
        style={props.style}
      />
      <Title text={'INICIAR SESIÓN'} textType={'title'} />
      <Title
        text={'Ingresa para encontrar tu a mejor amigo'}
        textType={'subTitle'}
      />
    </>
  );
};

export default HeaderLogin;
