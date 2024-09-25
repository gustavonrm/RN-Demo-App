import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectHotel } from '../redux/slices/hotels.slice';
import { useNavigation } from '@react-navigation/native';

type PreviewScreenRouteProp = RouteProp<{ Preview: { id: number } }, 'Preview'>;

const PreviewScreen = () => {
  const navigation = useNavigation();
  const { id } = useRoute<PreviewScreenRouteProp>().params;
  const hotel = useSelector(selectHotel(id));

  useEffect(() => {
    navigation.setOptions({
      headerTitle: hotel?.name || 'Hotel',
    });
  }, [hotel, navigation]);

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
