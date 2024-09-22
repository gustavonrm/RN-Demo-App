import React from 'react';
import { Image, Text, TouchableOpacity} from 'react-native';
import { Hotel } from '../types/hotel';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationTypes';

type HotelCardProps = {
    hotel: Hotel
}

const HotelCard = ({hotel}: HotelCardProps) => {

const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
  <TouchableOpacity onPress={() => navigation.navigate('Preview', {id: hotel.id})}>
    <Image style={{width: 100,height: 100}} source={{uri: hotel.gallery[0] || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'}}/>
    <Text>{hotel.name}</Text>
    <Text>{hotel.location.city} - {hotel.location.address}</Text>
    <Text>{hotel.price} {hotel.currency}</Text>
    </TouchableOpacity>
  );
};

export default HotelCard;
