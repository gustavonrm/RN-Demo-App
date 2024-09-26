import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import style from './style';

interface ActionButtonProps {
  children: ReactNode;
  onPress: () => void;
  secondary?: boolean; // Make secondary optional
}

const ActionButton = ({ children, onPress, secondary }: ActionButtonProps) => {
  return (
    <TouchableOpacity style={secondary ? style.button2 : style.button} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default ActionButton;
