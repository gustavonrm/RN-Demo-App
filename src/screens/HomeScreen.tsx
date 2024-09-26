import React from 'react';
import HotelsList from '../components/Hotel/HotelsList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import HotelFilter from '../components/Hotel/HotelFilter';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const styleSafeArea = { flex: 1, paddingLeft: insets.left, paddingRight: insets.right };

  return (
    <View style={styleSafeArea}>
      <HotelFilter />
      <HotelsList />
    </View>
  );
};

export default HomeScreen;
