import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Hotel } from '../../types/hotel';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationTypes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import style from './style';
import { YELLOW } from '../../constants/colors';

type HotelCardProps = {
  hotel: Hotel;
};

const HotelCard = ({ hotel }: HotelCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      testID={'hotelCardTestId'}
      style={style.container}
      onPress={() => navigation.navigate('Preview', { id: hotel.id })}
    >
      <View style={style.top}>
        <Image
          style={style.image}
          source={{
            uri:
              hotel.gallery[0] ||
              'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930',
          }}
        />
        <View style={style.priceContainer}>
          <Text style={style.priceText}>
            {`${hotel.currency === 'EUR' ? '€' : '$'}${hotel.price}`}
            <Text style={style.priceText2}>{' /person'}</Text>
          </Text>
          <Text style={style.priceText3}>
            {`${hotel.currency === 'EUR' ? '€' : '$'}${hotel.price}`} {'total'}
          </Text>
        </View>
      </View>

      <View style={style.bottom}>
        <Text style={style.text2} numberOfLines={1}>
          HOTEL in {hotel.location.city} - {hotel.location.address}
        </Text>
        <Text style={style.text1}>{hotel.name}</Text>
        <View style={style.row}>
          <View style={style.stars}>
            {Array.from({ length: hotel.stars }).map((_, index) => (
              <FontAwesomeIcon testID={'starTestId'} key={index} icon="star" color={YELLOW} />
            ))}
          </View>
          <Text style={style.text3}> | {hotel.userRating} user rating</Text>
        </View>
        <View style={style.row}>
          <FontAwesomeIcon icon="clock" style={style.icon} />
          <Text style={style.text3}>
            Check in from{' '}
            <Text style={style.text2}>
              {hotel.checkIn.from} to {hotel.checkIn.to}
            </Text>
          </Text>
        </View>
        <View style={style.row}>
          <FontAwesomeIcon icon="clock" style={style.icon} />
          <Text style={style.text3}>
            Check out from{' '}
            <Text style={style.text2}>
              {hotel.checkOut.from} to {hotel.checkOut.to}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;
