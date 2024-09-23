import React from 'react';
import { FlatList} from 'react-native';
import { Hotel } from '../types/hotel';
import HotelCard from '../HotelCard';
import withLoader from '../HOC/withLoader';
import { useGetHotelsQuery } from '../../redux/apis/hotels.api';
import style from './style';

type HotelListProps = {
    data: Hotel[]
}

const HotelsList = ({data}: HotelListProps) => {

    console.log(data);
    const renderItem = ({item}: Hotel) => <HotelCard hotel={item}/>;

    return (<FlatList
        style={style.container}
        showsVerticalScrollIndicator={ false }
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}/>
    );
};

export default withLoader(HotelsList, useGetHotelsQuery);
