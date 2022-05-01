import {Text} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const FieldErrors = props => {
  const {meta} = props;
  return (
    <>
      {meta.error && meta.touched && (
        <Text style={{color: colors.Orange}}>{meta.error}</Text>
      )}
    </>
  );
};

export default FieldErrors;
