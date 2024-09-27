import React, { useCallback, useState } from 'react';
import { ScrollView, Text, View, Image, Linking, Alert } from 'react-native';
import { selectHotel } from '../../../redux/slices/hotels.slice';
import withError from '../../HOC/withError';
import { useSelector } from 'react-redux';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { PINK, WHITE, YELLOW } from '../../../constants/colors';
import ErrorView from '../../common/ErrorView';
import ActionButton from '../../common/ActionButton';
import TextIcon from '../../common/TextIcon';

type HotelPreviewProps = {
  id: number;
};

const HotelPreview = ({ id }: HotelPreviewProps) => {
  const hotel = useSelector((state) => selectHotel(id)(state));
  const [booked, setBooked] = useState(false);

  if (!hotel) return <ErrorView message={'Error retriving the hotel'} />;

  const startCall = useCallback(
    (phone: string) => () => {
      Linking.openURL(`tel:${phone}`).catch((error) => {
        Alert.alert('Error staring a call!', error);
      });
    },
    []
  );

  const sendEmail = useCallback(
    (email: string) => () => {
      Linking.openURL(`mailto:${email}`).catch((error) => {
        Alert.alert('Error sending an Email!', error);
      });
    },
    []
  );

  return (
    <>
      <ScrollView
        testID="hotelPreviewTestId"
        style={style.container}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView horizontal persistentScrollbar>
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
        <View style={style.body}>
          <Text style={style.title}>{hotel?.name}</Text>
          <View style={style.stars}>
            {Array.from({ length: hotel.stars }).map((_, index) => (
              <FontAwesomeIcon testID={'starTestId'} key={index} icon="star" color={YELLOW} />
            ))}
            <Text style={style.text}>{` | ${hotel.userRating} user rating`}</Text>
          </View>

          <View style={style.divider} />

          <Text style={style.subtitle}>{'Address Information:'}</Text>
          <TextIcon
            icon={'location-dot'}
            text={`${hotel.location.city}, ${hotel.location.address}`}
          />
          <Text style={style.text}>{`Latitude: ${hotel.location.latitude}`}</Text>
          <Text style={style.text}>{`Longitude: ${hotel.location.latitude}`}</Text>
          <TextIcon icon={'clock'} text={`Check in: ${hotel.checkIn.from}-${hotel.checkIn.to}`} />
          <TextIcon
            icon={'clock'}
            text={`Check out: ${hotel.checkOut.from}-${hotel.checkOut.to}`}
          />

          <View style={style.divider} />

          <Text style={style.subtitle}>{'Contact Information:'}</Text>
          <TextIcon icon={'phone'} text={`Phone Number: ${hotel.contact.phoneNumber}`} />
          <TextIcon icon={'envelope'} text={`Email: ${hotel.contact.email}`} />

          <View style={style.actionButtonsContainer}>
            <ActionButton secondary onPress={startCall(hotel.contact.phoneNumber)}>
              <FontAwesomeIcon icon={'phone'} />
            </ActionButton>
            <ActionButton secondary onPress={sendEmail(hotel.contact.email)}>
              <FontAwesomeIcon icon={'envelope'} />
            </ActionButton>
          </View>
          <View>
            <View style={style.divider} />
          </View>
        </View>
      </ScrollView>
      <View style={style.bottomContainer}>
        <View>
          <Text style={{ ...style.subtitle, color: WHITE }}>{`€ ${hotel.price} total`}</Text>
          <Text
            style={{ ...style.text, color: WHITE, fontSize: 12 }}
          >{`€ ${hotel.price} /person`}</Text>
        </View>
        <View style={style.bookButton}>
          <ActionButton secondary onPress={() => setBooked(!booked)}>
            {booked ? (
              <Text style={{ ...style.text, color: PINK }}>{`Cancel Booking`}</Text>
            ) : (
              <Text style={{ ...style.text, color: PINK }}>{`Book Hotel`}</Text>
            )}
          </ActionButton>
        </View>
      </View>
    </>
  );
};

export default withError(HotelPreview, (state, props) => selectHotel(props.id)(state));
