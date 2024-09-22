import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useGetHotelsQuery } from '../redux/apis/hotels.api';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './screens.style';
const PreviewScreen = () => {

  const {isLoading} = useGetHotelsQuery();


  if(isLoading) {return (<ActivityIndicator />);}

  return (
    <SafeAreaView style={style.container}>
        {isLoading ?  <ActivityIndicator /> : <Text>{'Preview Screen'}</Text>}
    </SafeAreaView >
  );
};

export default PreviewScreen;
