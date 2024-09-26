import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { YELLOW } from '../../../constants/colors';
import Filter from '../../common/Filter';

const multiRender = (times: number, element: React.ReactNode) => {
  return Array.from({ length: times }, (_, index) => (
    <React.Fragment key={index}>{element}</React.Fragment>
  ));
};

const HotelFilter = () => {
  return (
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
  );
};

export default HotelFilter;
