import React from 'react';
import 'react-native';
import { screen } from '@testing-library/react-native';
import HotelsList from '../src/components/HotelsList';
import { renderWithProviders } from './utils/test-utils';

describe('HotelList Element', () => {

  it('renders hotel list correctly', () => {
    renderWithProviders(<HotelsList />);
    expect(screen.getAllByTestId('hotelCardTestId').length).toBe(10);
  });

});


