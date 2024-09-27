import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type TextIconProps = {
  icon: string;
  text: string;
};

const TextIcon = ({ icon, text }: TextIconProps) => {
  return (
    <View style={style.textIconContainer}>
      <FontAwesomeIcon icon={icon} />
      <Text style={style.text}> {text}</Text>
    </View>
  );
};

export default TextIcon;
