/**
 * @format
 */

import 'react-native';
import { render,screen } from '@testing-library/react-native';
import Loader from '../src/components/common/Loader';
import HotelCard from '../src/components/HotelCard';
import { Hotel } from './mocks/hotel';

describe('HotelCard Element', () => {
  it('renders hotel card correctly', () => {
    render(<HotelCard hotel={Hotel}/>);
    expect(screen.getByTestId('hotelCardTestId')).toBeTruthy(); 
    expect(screen.getByText(Hotel.name)).toBeTruthy(); 
  });

  it('stars are correctly rendered', () => {
    render(<HotelCard hotel={Hotel}/>);
    const stars = screen.getAllByTestId('starTestId');
    expect(screen.getAllByTestId('starTestId').length).toBe(Hotel.stars)
  })
});
