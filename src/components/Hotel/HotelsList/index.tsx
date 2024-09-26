import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Hotel } from '../types/hotel';
import HotelCard from '../HotelCard';
import withLoader from '../../HOC/withLoader';
import { useGetHotelsQuery } from '../../../redux/apis/hotels.api';
import style from './style';
import withError from '../../HOC/withError';
import { selectHotels } from '../../../redux/slices/hotels.slice';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/slices/filters.slice';
import { Text } from 'react-native-svg';
import ErrorView from '../../common/ErrorView';
import Loader from '../../common/Loader';

type Filters = {
  stars?: number;
  sort?: string;
};

const HotelsList = () => {
  const hotels = useSelector(selectHotels);
  const filters = useSelector(selectFilters) as Filters;
  // const [filtering, setFiltering] = useState(false); // Not added because the filtering is very fast and the modal also hides this

  const filteredHotels = useMemo(() => {
    const filterKeys = ['stars', 'sort'];
    const hasFilters = filterKeys.some((key) => key in filters);

    return hotels.filter((hotel) => {
      if (!hasFilters) {
        return true;
      }

      const matchesStars = filters.stars !== undefined ? hotel.stars === filters.stars : true;

      return matchesStars;
    });
  }, [hotels, filters]);

  const renderItem = ({ item }: { item: Hotel }) => {
    return <HotelCard hotel={item} />;
  };

  return (
    <FlatList
      contentContainerStyle={{ flexGrow: 1 }}
      style={style.container}
      showsVerticalScrollIndicator={false}
      data={filteredHotels}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<ErrorView message={'No hotels found'} />}
    />
  );
};

export default withLoader(withError(HotelsList, selectHotels), useGetHotelsQuery);
