import React from 'react';
import HotelsList from '../components/HotelsList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const styleSafeArea = { flex: 1, paddingLeft: insets.left, paddingRight: insets.right };

  return (
    <View style={styleSafeArea}>
      <HotelsList />
    </View>
  );
};

export default HomeScreen;
