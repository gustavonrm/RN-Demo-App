import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useGetHotelsQuery } from '../redux/apis/hotel.api';

const Main = () => {

  const {data, error, isLoading} = useGetHotelsQuery();

  console.log(data || error);

  if(isLoading) {return (<ActivityIndicator/>);}

  return (
    <Text>{'RN Demo App'}</Text>
  );
};

export default Main;
