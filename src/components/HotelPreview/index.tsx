import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { selectHotel } from '../../redux/slices/hotels.slice';
import withError from '../HOC/withError';
import { useSelector } from 'react-redux';
import style from './style';

type HotelPreviewProps = {
  id: number;
};

const HotelPreview = ({ id }: HotelPreviewProps) => {
  const hotel = useSelector((state) => selectHotel(id)(state));

  console.log(hotel?.gallery[0]);
  return (
    <View>
      <ScrollView horizontal>
        {hotel?.gallery.map((image) => (
          <Image
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
    </View>
  );
};

export default withError(HotelPreview, (state, props) => selectHotel(props.id)(state));
