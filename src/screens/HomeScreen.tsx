import React from 'react';
import { Button, Text } from 'react-native';
import { useGetHotelsQuery } from '../redux/apis/hotels.api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import style from './screens.style';
import Loader from '../components/Loader';

const HomeScreen = () => {

  const navigation = useNavigation();

  const {isLoading} = useGetHotelsQuery();

  const body = <><Text>{'Home Screen'}</Text>
  <Button
   onPress={() =>  navigation.navigate('Preview')}
   title="Learn More"
   color="#841584"
   accessibilityLabel="Learn more about this purple button"
   />
   </>;

  return (
    <SafeAreaView style={style.container}>
        {isLoading ?  <Loader/> : body}
    </SafeAreaView>
  );
};

export default HomeScreen;
