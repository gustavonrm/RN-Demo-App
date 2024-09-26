import React from 'react';
import HotelsList from '../components/HotelsList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Filter from '../components/common/Filter';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const styleSafeArea = { flex: 1, paddingLeft: insets.left, paddingRight: insets.right };

  return (
    <View style={styleSafeArea}>
      <Filter>
        <Filter.Toggle />
        <Filter.Menu />
      </Filter>
      <HotelsList />
    </View>
  );
};

export default HomeScreen;
