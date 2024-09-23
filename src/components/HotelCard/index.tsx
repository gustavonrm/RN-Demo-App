import React from 'react';
import { Image, Text, TouchableOpacity, View} from 'react-native';
import { Hotel } from '../../types/hotel';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationTypes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import style from './style';

type HotelCardProps = {
    hotel: Hotel
}

const simpleCurrencyFormatter = (price: string, currency: string) => {
  let currencySymbol = currency === 'EUR' ? '€' : '$';
  return currencySymbol + price;
};

const HotelCard = ({hotel}: HotelCardProps) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
  <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Preview', {id: hotel.id})}>
    <View style={style.top}>
      <Image style={style.image} source={{uri: hotel.gallery[0] || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'}}/>
      <View style={style.priceContainer}>
        <Text style={style.priceText}>
          {`${hotel.currency === 'EUR' ? '€' : '$'}${hotel.price}`}<Text style={style.priceText2}>{' /person'}</Text>
        </Text>
        <Text style={style.priceText3}>
        {`${hotel.currency === 'EUR' ? '€' : '$'}${hotel.price}`} {'total'}
        </Text>
      </View>
    </View>
    <View style={style.bottom}>
      <Text>{hotel.location.city} - {hotel.location.address}</Text>
      <Text>{hotel.name}</Text>
      <FontAwesomeIcon icon="star" />
      <Text>{hotel.stars}</Text><Text>{hotel.userRating}</Text>
      <Text>{hotel.checkIn.from}</Text><Text>{hotel.checkIn.to}</Text><Text>{hotel.checkOut.from}</Text><Text>{hotel.checkOut.to}</Text>
    </View>


    </TouchableOpacity>
  );
};

export default HotelCard;
