import React from 'react';
import { useGetHotelsQuery } from '../redux/apis/hotels.api';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './screens.style';
import Loader from '../components/common/Loader';
import HotelCard from '../components/HotelCard';
import { useSelector } from 'react-redux';
import { selectHotels } from '../redux/slices/hotels.slice';
import { FlatList } from 'react-native';
import HotelList from '../components/HotelsList';
import HotelsList from '../components/HotelsList';

const HomeScreen = () => {


  // const {isLoading} = useGetHotelsQuery();
  // const hotels = useSelector(selectHotels);


  return (
    <SafeAreaView style={style.container}>
      <HotelsList/>
    </SafeAreaView>
  );
};

export default HomeScreen;
