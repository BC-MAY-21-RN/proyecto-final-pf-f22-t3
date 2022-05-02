import {Pressable} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';
import RNBounceable from '@freakycoder/react-native-bounceable';

const FavButton = props => {
  const {stateInit} = props;
  const [state, setState] = useState(stateInit);

  return (
    <RNBounceable onPress={() => setState(!state)} bounceEffect={10}>
      <Icon
        name={state === false ? 'heart-o' : 'heart'}
        color={colors.Orange}
        size={27}
      />
    </RNBounceable>
  );
};

export default FavButton;
