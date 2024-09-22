import React from 'react';
import { useGetHotelsQuery } from '../redux/apis/hotels.api';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './screens.style';
import Loader from '../components/Loader';
import HotelCard from '../components/HotelCard';
import { useSelector } from 'react-redux';
import { selectHotels } from '../redux/slices/hotels.slice';
import { FlatList } from 'react-native';

const HomeScreen = () => {


  const {isLoading} = useGetHotelsQuery();
  const hotels = useSelector(selectHotels);

  const List = <FlatList
  showsVerticalScrollIndicator={ false }
  data={hotels.map((hotel) => hotel)}
  renderItem={({item}) => <HotelCard hotel={item}/>}/>;

  return (
    <SafeAreaView style={style.container}>
        {isLoading ?  <Loader/> : List}
    </SafeAreaView>
  );
};

export default HomeScreen;
