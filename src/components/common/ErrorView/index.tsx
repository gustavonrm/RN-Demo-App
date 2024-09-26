import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

type ErrorViewProps = {
  message: string;
};

const ErrorView = ({ message }: ErrorViewProps) => {
  return (
    <View testID={'errorViewTestId'} style={style.container}>
      <Text style={style.text}>{message}</Text>
    </View>
  );
};

export default ErrorView;
