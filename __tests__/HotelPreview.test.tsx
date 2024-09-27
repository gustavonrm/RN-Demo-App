import React from 'react';
import 'react-native';
import { render, screen, userEvent } from '@testing-library/react-native';
import HotelCard from '../src/components/Hotel/HotelCard';
import { hotel } from './mocks/hotel';
import HotelPreview from '../src/components/Hotel/HotelPreview';
import { renderWithProviders } from './utils/test-utils';
import { hotels } from './mocks/hotels';
import { setupStore } from '../src/redux/store';
import { setHotels } from '../src/redux/slices/hotels.slice';

describe('HotelCard Element', () => {
  it('renders hotel card correctly', () => {
    const store = setupStore();
    store.dispatch(setHotels(hotels));

    renderWithProviders(<HotelPreview id={hotels[0].id} />, { store });
    expect(screen.getByTestId('hotelPreviewTestId')).toBeTruthy();

    expect(screen.getByText(hotel.name)).toBeTruthy();
    expect(screen.getAllByTestId('starTestId').length).toBe(hotel.stars);
    expect(screen.getByText(`| ${hotel.userRating} user rating`)).toBeTruthy();

    expect(screen.getByText('Address Information:')).toBeTruthy();
    expect(screen.getByText(`${hotel.location.city}, ${hotel.location.address}`)).toBeTruthy();
    expect(screen.getByText(`Latitude: ${hotel.location.latitude}`)).toBeTruthy();
    expect(screen.getByText(`Longitude: ${hotel.location.latitude}`)).toBeTruthy();

    expect(screen.getByText(`Check in: ${hotel.checkIn.from}-${hotel.checkIn.to}`)).toBeTruthy();
    expect(screen.getByText(`Check out: ${hotel.checkOut.from}-${hotel.checkOut.to}`)).toBeTruthy();

    expect(screen.getByText('Contact Information:')).toBeTruthy();
    expect(screen.getByText(`Phone Number: ${hotel.contact.phoneNumber}`)).toBeTruthy();
    expect(screen.getByText(`Email: ${hotel.contact.email}`)).toBeTruthy();

    expect(screen.getByText(`Book Hotel`)).toBeTruthy();
    expect(screen.getByText(`€${hotel.price} /person`)).toBeTruthy();
    expect(screen.getByText(`€${hotel.price} total`)).toBeTruthy();
  });

  it('book hotel', async () => {
    const user = userEvent.setup();
    const store = setupStore();
    store.dispatch(setHotels(hotels));

    renderWithProviders(<HotelPreview id={hotels[0].id} />, { store });
    expect(screen.getByTestId('hotelPreviewTestId')).toBeTruthy();

    expect(screen.getByText(`Book Hotel`)).toBeTruthy();
    await user.press(screen.getByText(`Book Hotel`));
    expect(screen.getByText(`Cancel Booking`)).toBeTruthy();
  });

  it('renders error if no data', () => {
    const store = setupStore();
    store.dispatch(setHotels([]));

    renderWithProviders(<HotelPreview id={999} />, { store });
    expect(screen.getByTestId('errorViewTestId')).toBeTruthy();
  });
});
