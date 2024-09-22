import React, { useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useGetHotelsQuery } from '../redux/apis/hotels.api';
import { useSelector } from 'react-redux';
import { selectHotels } from '../redux/slices/hotels.slice';

const Main = () => {

  const {data, error, isLoading} = useGetHotelsQuery();


  const hotels = useSelector(selectHotels);

// console.log(state.hotels.hotels);
  useEffect(()=>{
    console.log(hotels);
  }, [hotels]);


  if(isLoading) {return (<ActivityIndicator/>);}

  return (
    <Text>{'RN Demo App'}</Text>
  );
};

export default Main;
