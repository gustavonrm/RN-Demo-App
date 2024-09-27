import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { selectHotel } from '../../../redux/slices/hotels.slice';
import withError from '../../HOC/withError';
import { useSelector } from 'react-redux';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { YELLOW } from '../../../constants/colors';

type HotelPreviewProps = {
  id: number;
};

const HotelPreview = ({ id }: HotelPreviewProps) => {
  const hotel = useSelector((state) => selectHotel(id)(state));

  return (
    <ScrollView testID="hotelPreviewTestId">
      <ScrollView horizontal>
        {hotel?.gallery.map((image, index) => (
          <Image
            key={index}
            style={style.image}
            source={{
              uri:
                image ||
                'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930',
            }}
          />
        ))}
      </ScrollView>
      <Text>{hotel?.name}</Text>
      <View style={style.stars}>
        {Array.from({ length: hotel.stars }).map((_, index) => (
          <FontAwesomeIcon testID={'starTestId'} key={index} icon="star" color={YELLOW} />
        ))}
      </View>
      <Text style={style.text3}> | {hotel.userRating} user rating</Text>
      <Text>{'Address Information:'}</Text>
      <Text>{`${hotel.location.city}, ${hotel.location.address}`}</Text>
      <Text>{`Latitude: ${hotel.location.latitude}`}</Text>
      <Text>{`Longitude: ${hotel.location.latitude}`}</Text>

      <Text>{`Check in: ${hotel.checkIn.from}-${hotel.checkIn.to}`}</Text>
      <Text>{`Check out: ${hotel.checkOut.from}-${hotel.checkOut.to}`}</Text>

      <Text>{'Contact Information:'}</Text>
      <Text>{`Phone Number: ${hotel.contact.phoneNumber}`}</Text>
      <Text>{`Email: ${hotel.contact.email}`}</Text>

      <Text>{`Book Hotel`}</Text>
      <Text>{`€${hotel.price} /person`}</Text>

      <Text>{`€${hotel.price} total`}</Text>
    </ScrollView>
  );
};

export default withError(HotelPreview, (state, props) => selectHotel(props.id)(state));
