import {Image, View} from 'react-native';
import React from 'react';
import Title from './Title';

const Header = props => {
  return (
    <View style={props.style}>
      <Image
        source={require('../assets/logos/Brand.png')}
        style={{alignSelf: 'center'}}
      />
      <Title
        style={{marginVertical: 10}}
        text={props.title}
        textType={'title'}
      />
    </View>
  );
};

export default Header;
