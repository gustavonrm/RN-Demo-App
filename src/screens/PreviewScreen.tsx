import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HotelPreview from '../components/HotelPreview';
import { RouteProp, useRoute } from '@react-navigation/native';
type PreviewScreenRouteProp = RouteProp<{ Preview: { id: number } }, 'Preview'>;

const PreviewScreen = () => {
  const insets = useSafeAreaInsets();
  const styleSafeArea = {
    flex: 1,
    paddingLeft: insets.left,
    paddingRight: insets.right,
    paddingBottom: insets.bottom,
  };
  const { id } = useRoute<PreviewScreenRouteProp>().params;

  return (
    <View style={styleSafeArea}>
      <HotelPreview id={id} />
    </View>
  );
};

export default PreviewScreen;
