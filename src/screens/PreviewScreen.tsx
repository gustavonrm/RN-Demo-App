import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectHotel } from '../redux/slices/hotels.slice';

type PreviewScreenRouteProp = RouteProp<{ Preview: { id: number } }, 'Preview'>;

const PreviewScreen = () => {
  const { id } = useRoute<PreviewScreenRouteProp>().params;
  const hotel = useSelector(selectHotel(id));

  if (!hotel) {
    return (
      <SafeAreaView>
        <Text>{'Hotel not found'}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>{hotel.name}</Text>
    </SafeAreaView>
  );
};

export default PreviewScreen;
