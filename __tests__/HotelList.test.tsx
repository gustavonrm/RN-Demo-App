import React from 'react';
import 'react-native';
import { cleanup, screen, waitForElementToBeRemoved } from '@testing-library/react-native';
import HotelsList from '../src/components/HotelsList';
import { renderWithProviders } from './utils/test-utils';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/native';
import { hotels } from './mocks/hotels';

export const handlers = [
  http.get('https://run.mocky.io/v3/b4593f68-9e29-47a8-bb6d-8137a665ee15', async () => {
    await delay(150);
    return HttpResponse.json(hotels);
  }),
];
export const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() =>{
  server.listen();
  jest.useFakeTimers();
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() =>{
  server.resetHandlers();
  jest.restoreAllMocks();
  cleanup();
});

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('HotelList Element', () => {
  it('renders hotel list correctly', async () => {
    renderWithProviders(<HotelsList />);
    expect(screen.getByTestId('loaderTestId')).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId('loaderTestId'));

    expect(await screen.getAllByTestId('hotelCardTestId').length).toBe(10);
  });
});
