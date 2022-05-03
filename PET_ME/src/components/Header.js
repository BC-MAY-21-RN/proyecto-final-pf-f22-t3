import {Image} from 'react-native';
import React from 'react';
import Title from './Title';

const Header = props => {
  return (
    <>
      <Image
        source={require('../assets/logos/Brand.png')}
        style={props.style}
      />
      <Title text={props.title} textType={'title'} />
      <Title
        text={'Ingresa para encontrar tu a mejor amigo'}
        textType={'subTitle'}
      />
    </>
  );
};

export default Header;
