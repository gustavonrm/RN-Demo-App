import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

const ErrorView = () => {
  return (
    <View testID={'errorViewTestId'} style={style.container}>
      <Text style={style.text}>{'Error Loading Data'}</Text>
    </View>
  );
};

export default ErrorView;
