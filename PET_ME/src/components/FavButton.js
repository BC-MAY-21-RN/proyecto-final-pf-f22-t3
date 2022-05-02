import {Pressable} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';

const FavButton = props => {
  const {stateInit} = props;
  const [state, setState] = useState(stateInit);

  return (
    <Pressable onPress={() => setState(!state)}>
      <Icon
        name={state === false ? 'heart-o' : 'heart'}
        color={colors.Orange}
        size={27}
      />
    </Pressable>
  );
};

export default FavButton;
