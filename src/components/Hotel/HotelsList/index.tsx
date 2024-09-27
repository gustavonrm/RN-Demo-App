import React, { useMemo, useRef } from 'react';
import { FlatList } from 'react-native';
import { Hotel } from '../types/hotel';
import HotelCard from '../HotelCard';
import withLoader from '../../HOC/withLoader';
import { useGetHotelsQuery } from '../../../redux/apis/hotels.api';
import style from './style';
import withError from '../../HOC/withError';
import { selectHotels } from '../../../redux/slices/hotels.slice';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/slices/filters.slice';
import ErrorView from '../../common/ErrorView';
import useScrollToTop from '../../../hooks/useScrollToTop';

type Filters = {
  stars?: number;
  price?: string;
  rating?: number[];
};

const HotelsList = () => {
  const hotels = useSelector(selectHotels);
  const filters = useSelector(selectFilters) as Filters;

  const flatListRef = useRef<FlatList>(null);

  useScrollToTop(flatListRef, [hotels, filters]);

  const filteredHotels = useMemo(() => {
    const { stars, rating, price } = filters;

    // stars
    const filterByStars = (hotel: Hotel) => {
      if (!stars) {
        return true;
      }

      return stars !== undefined ? hotel.stars === stars : true;
    };

    // rating
    const filterByRating = (hotel: Hotel) => {
      if (!rating) return true;
      return hotel.userRating >= rating[0] && hotel.userRating < rating[1];
    };

    // price
    const sortByPrice = (a: Hotel, b: Hotel) => {
      if (price === 'desc') return b.price - a.price;
      if (price === 'asc') return a.price - b.price;
      return 0;
    };

    let filtered = hotels.filter((hotel) => filterByStars(hotel) && filterByRating(hotel));

    if (price) {
      filtered = filtered.sort(sortByPrice);
    }

    return filtered;
  }, [hotels, filters]);

  const renderItem = ({ item }: { item: Hotel }) => {
    return <HotelCard hotel={item} />;
  };

  return (
    <FlatList
      ref={flatListRef}
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
