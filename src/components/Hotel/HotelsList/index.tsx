import React from 'react';
import { FlatList } from 'react-native';
import { Hotel } from '../types/hotel';
import HotelCard from '../HotelCard';
import withLoader from '../../HOC/withLoader';
import { useGetHotelsQuery } from '../../../redux/apis/hotels.api';
import style from './style';
import withError from '../../HOC/withError';
import { selectHotels } from '../../../redux/slices/hotels.slice';
import { useSelector } from 'react-redux';

const HotelsList = () => {
  const hotels = useSelector(selectHotels);

  const renderItem = ({ item }: { item: Hotel }) => <HotelCard hotel={item} />;

  return (
    <FlatList
      style={style.container}
      showsVerticalScrollIndicator={false}
      data={hotels}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default withLoader(withError(HotelsList, selectHotels), useGetHotelsQuery);
