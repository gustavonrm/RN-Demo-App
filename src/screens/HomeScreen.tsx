import React from 'react';
import { ActivityIndicator, Button, Text } from 'react-native';
import { useGetHotelsQuery } from '../redux/apis/hotels.api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  const {isLoading} = useGetHotelsQuery();

  if(isLoading) {return (<ActivityIndicator/>);}

  return (
    <SafeAreaView>
       <Text>{'Home Screen'}</Text>
       <Button
        onPress={() =>  navigation.navigate('Preview')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
    </SafeAreaView>
  );
};

export default HomeScreen;
