import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import style from './style';

type ActionButtonProps = {
  children: ReactNode;
  onPress: () => void;
  secondary?: boolean;
  testID?: string;
};

const ActionButton = ({ children, onPress, secondary, testID }: ActionButtonProps) => {
  return (
    <TouchableOpacity
      style={secondary ? style.button2 : style.button}
      onPress={onPress}
      testID={testID}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ActionButton;
