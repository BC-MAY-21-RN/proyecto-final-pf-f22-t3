import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';

const PetGenderIcon = ({petgender, size = 30}) => {
  return (
    <Icon
      name={petgender === 'female' ? 'venus' : 'mars'}
      size={size}
      color={petgender === 'female' ? colors.Pink : colors.Blue}
    />
  );
};

export default PetGenderIcon;
