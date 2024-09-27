import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HotelPreview from '../components/Hotel/HotelPreview';
import { RouteProp, useRoute } from '@react-navigation/native';
import { WHITE } from '../constants/colors';
type PreviewScreenRouteProp = RouteProp<{ Preview: { id: number } }, 'Preview'>;

const PreviewScreen = () => {
  const insets = useSafeAreaInsets();
  const styleSafeArea = {
    flex: 1,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };
  const { id } = useRoute<PreviewScreenRouteProp>().params;

  return (
    <View style={styleSafeArea}>
      <HotelPreview id={id} />
    </View>
  );
};

export default PreviewScreen;
