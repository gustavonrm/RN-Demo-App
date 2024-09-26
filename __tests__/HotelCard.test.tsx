import React from 'react';
import 'react-native';
import { render, screen } from '@testing-library/react-native';
import HotelCard from '../src/components/Hotel/HotelCard';
import { hotel } from './mocks/hotel';

describe('HotelPreview Element', () => {
  it('renders hotel card correctly', () => {
    render(<HotelCard hotel={hotel} />);
    expect(screen.getByTestId('hotelCardTestId')).toBeTruthy();
    expect(screen.getByText(`€${hotel.price} /person`)).toBeTruthy();
    expect(screen.getByText(`€${hotel.price} total`)).toBeTruthy();
    expect(screen.getByText(hotel.name)).toBeTruthy();
    expect(
      screen.getByText(`HOTEL in ${hotel.location.city} - ${hotel.location.address}`)
    ).toBeTruthy();
    expect(screen.getAllByTestId('starTestId').length).toBe(hotel.stars);
    expect(screen.getByText(`| ${hotel.userRating} user rating`)).toBeTruthy();
    expect(
      screen.getByText(`Check in from ${hotel.checkIn.from} to ${hotel.checkIn.to}`)
    ).toBeTruthy();
    expect(
      screen.getByText(`Check out from ${hotel.checkOut.from} to ${hotel.checkOut.to}`)
    ).toBeTruthy();
  });

  it('stars are correctly rendered', () => {
    render(<HotelCard hotel={hotel} />);
    expect(screen.getAllByTestId('starTestId').length).toBe(hotel.stars);
  });
});
