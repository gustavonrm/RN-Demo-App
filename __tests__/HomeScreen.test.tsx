import React from 'react';
import 'react-native';
import {
  cleanup,
  screen,
  waitForElementToBeRemoved,
  userEvent,
} from '@testing-library/react-native';
import HotelsList from '../src/components/Hotel/HotelsList';
import { renderWithProviders } from './utils/test-utils';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/native';
import { hotels } from './mocks/hotels';
import HomeScreen from '../src/screens/HomeScreen';
import { setupStore } from '../src/redux/store';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

jest.useFakeTimers();

export const handlers = [
  http.get('https://run.mocky.io/v3/b4593f68-9e29-47a8-bb6d-8137a665ee15', async () => {
    await delay(150);
    return HttpResponse.json(hotels);
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  jest.restoreAllMocks();
  cleanup();
});

afterAll(() => {
  server.close();
});

describe('HotelList Element', () => {
  it('renders hotel list correctly', async () => {
    const store = setupStore();

    renderWithProviders(<HomeScreen />, { store });
    expect(screen.getByTestId('loaderTestId')).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId('loaderTestId'));

    expect(await screen.getAllByTestId('hotelCardTestId').length).toBe(10);
  });

  it('renders filters by star correctly', async () => {
    const user = userEvent.setup();
    const store = setupStore();

    renderWithProviders(<HomeScreen />, { store });
    expect(screen.getByTestId('loaderTestId')).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId('loaderTestId'));

    await user.press(screen.getByTestId('filterButtonTestId'));
    await user.press(screen.getByTestId('5StarsFilterTestId'));
    await user.press(screen.getByTestId('applyFilterButtonTestId'));

    expect(await screen.getAllByTestId('hotelCardTestId').length).toBe(3);
  });

  it('renders filters sort by price decrease correctly', async () => {
    const user = userEvent.setup();
    const store = setupStore();

    renderWithProviders(<HomeScreen />, { store });
    expect(screen.getByTestId('loaderTestId')).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId('loaderTestId'));

    await user.press(screen.getByTestId('filterButtonTestId'));
    await user.press(screen.getByTestId('priceDescFilterTestId'));
    await user.press(screen.getByTestId('applyFilterButtonTestId'));

    const hotelCards = screen.getAllByTestId('priceTestId');

    for (let i = 1; i < hotelCards.length; i++) {
      let price1 = parseFloat(hotelCards[i - 1].children[0].toString().replace('€', ''));
      let price2 = parseFloat(hotelCards[i].children[0].toString().replace('€', ''));
      expect(price1).toBeGreaterThanOrEqual(price2);
    }
  });

  it('renders filters filter by average rating correctly', async () => {
    const user = userEvent.setup();
    const store = setupStore();

    renderWithProviders(<HomeScreen />, { store });
    expect(screen.getByTestId('loaderTestId')).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId('loaderTestId'));

    await user.press(screen.getByTestId('filterButtonTestId'));
    await user.press(screen.getByTestId('ratingAvgFilterTestId'));
    await user.press(screen.getByTestId('applyFilterButtonTestId'));

    expect(await screen.getAllByTestId('hotelCardTestId').length).toBe(2);
  });

  it('renders filters sort by price decrease and 4 stars correctly', async () => {
    const user = userEvent.setup();
    const store = setupStore();

    renderWithProviders(<HomeScreen />, { store });
    expect(screen.getByTestId('loaderTestId')).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId('loaderTestId'));

    await user.press(screen.getByTestId('filterButtonTestId'));
    await user.press(screen.getByTestId('4StarsFilterTestId'));
    await user.press(screen.getByTestId('priceDescFilterTestId'));
    await user.press(screen.getByTestId('applyFilterButtonTestId'));

    expect(await screen.getAllByTestId('hotelCardTestId').length).toBe(6);
    const hotelCards = screen.getAllByTestId('priceTestId');

    for (let i = 1; i < hotelCards.length; i++) {
      let price1 = parseFloat(hotelCards[i - 1].children[0].toString().replace('€', ''));
      let price2 = parseFloat(hotelCards[i].children[0].toString().replace('€', ''));
      expect(price1).toBeGreaterThanOrEqual(price2);
    }
  });

  it('snapshot test', () => {
    const store = setupStore();
    expect(renderWithProviders(<HomeScreen />, { store })).toMatchSnapshot();
  });
});
