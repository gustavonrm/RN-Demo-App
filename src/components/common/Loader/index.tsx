import React from 'react';
import { ActivityIndicator } from 'react-native';
import { PINK } from '../../../constants/colors';
import style from './style';
const Loader = () => {
  return (
    <ActivityIndicator
      style={style.container}
      testID={'loaderTestId'}
      size={'large'}
      color={PINK}
    />
  );
};

export default Loader;
