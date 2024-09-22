import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useGetHotelsQuery } from '../redux/apis/hotels.api';
import { SafeAreaView } from 'react-native-safe-area-context';

const PreviewScreen = () => {

  const {isLoading} = useGetHotelsQuery();


  if(isLoading) {return (<ActivityIndicator/>);}

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{'Preview Screen'}</Text>
    </SafeAreaView >
  );
};

export default PreviewScreen;
