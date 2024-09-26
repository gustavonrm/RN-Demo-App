import React from 'react';
import { Text } from 'react-native';
import { selectHotel } from '../../redux/slices/hotels.slice';
import withError from '../HOC/withError';
import { useSelector } from 'react-redux';

type HotelPreviewProps = {
  id: number;
};

const HotelPreview = ({ id }: HotelPreviewProps) => {
  const hotel = useSelector((state) => selectHotel(id)(state));

  if (!hotel) {
    return <Text>No hotel found</Text>;
  }

  return <Text>{hotel.name}</Text>;
};

export default withError(HotelPreview, (state, props) => selectHotel(props.id)(state));
