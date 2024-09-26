import React from 'react';
import HotelsList from '../components/HotelsList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Filter from '../components/common/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { YELLOW } from '../constants/colors';

const multiRender = (times: number, element: React.ReactNode) => {
  return Array.from({ length: times }, (_, index) => (
    <React.Fragment key={index}>{element}</React.Fragment>
  ));
};

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const styleSafeArea = { flex: 1, paddingLeft: insets.left, paddingRight: insets.right };

  return (
    <View style={styleSafeArea}>
      <Filter>
        <Filter.Toggle />
        <Filter.Menu>
          <Filter.Section name={'Stars'}>
            <Filter.Item name={'5Stars'}>
              {multiRender(5, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
            </Filter.Item>
            <Filter.Item name={'4Stars'}>
              {multiRender(5, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
            </Filter.Item>
            <Filter.Item name={'3Stars'}>
              {multiRender(5, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
            </Filter.Item>
            <Filter.Item name={'2Stars'}>
              {multiRender(5, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
            </Filter.Item>
            <Filter.Item name={'1Stars'}>
              {multiRender(5, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
            </Filter.Item>
          </Filter.Section>
        </Filter.Menu>
      </Filter>
      <HotelsList />
    </View>
  );
};

export default HomeScreen;
