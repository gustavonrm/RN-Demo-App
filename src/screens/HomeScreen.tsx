import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HotelsList from '../components/HotelsList';

const HomeScreen = () => {

  return (
    <SafeAreaView edges={[ 'left', 'right']} >
      <HotelsList/>
    </SafeAreaView>
  );
};

export default HomeScreen;
