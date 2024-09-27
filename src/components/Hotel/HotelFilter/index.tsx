import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { PINK, YELLOW } from '../../../constants/colors';
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
        <Filter.Section name={'price'} sort>
          <Filter.Item name={'priceAsc'} value={'asc'}>
            <FontAwesomeIcon color={YELLOW} icon={'arrow-up'} />
          </Filter.Item>
          <Filter.Item name={'priceDesc'} value={'desc'}>
            <FontAwesomeIcon color={YELLOW} icon={'arrow-down'} />
          </Filter.Item>
        </Filter.Section>
        <Filter.Section name={'stars'}>
          <Filter.Item name={'5Stars'} value={5}>
            {multiRender(5, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
          </Filter.Item>
          <Filter.Item name={'4Stars'} value={4}>
            {multiRender(4, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
          </Filter.Item>
          <Filter.Item name={'3Stars'} value={3}>
            {multiRender(3, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
          </Filter.Item>
          <Filter.Item name={'2Stars'} value={2}>
            {multiRender(2, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
          </Filter.Item>
          <Filter.Item name={'1Stars'} value={1}>
            {multiRender(1, <FontAwesomeIcon color={YELLOW} icon={'star'} />)}
          </Filter.Item>
        </Filter.Section>
        <Filter.Section name={'rating'}>
          <Filter.Item name={'ratingGood'} value={[7, 10]}>
            {'Good (7-10)'}
          </Filter.Item>
          <Filter.Item name={'ratingAvg'} value={[3, 7]}>
            {'Average (3-7)'}
          </Filter.Item>
          <Filter.Item name={'ratingBag'} value={[0, 3]}>
            {'Bad (0-3)'}
          </Filter.Item>
        </Filter.Section>
      </Filter.Menu>
    </Filter>
  );
};

export default HotelFilter;
