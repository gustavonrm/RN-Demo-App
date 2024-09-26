import React from 'react';
import 'react-native';
import { cleanup, screen, waitForElementToBeRemoved } from '@testing-library/react-native';
import HotelsList from '../src/components/Hotel/HotelsList';
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

export const errorHandlers = [
  http.get('https://run.mocky.io/v3/b4593f68-9e29-47a8-bb6d-8137a665ee15', async () => {
    await delay(150);
    return new HttpResponse(null, {
      status: 404,
    });
  }),
];

export const server = setupServer(...handlers);

export const errorServer = setupServer(...errorHandlers);

beforeAll(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.restoreAllMocks();
  cleanup();
});

describe('HotelList Element', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('renders hotel list correctly', async () => {
    renderWithProviders(<HotelsList />);
    expect(screen.getByTestId('loaderTestId')).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId('loaderTestId'));

    expect(await screen.getAllByTestId('hotelCardTestId').length).toBe(10);
  });
});

describe('HotelList Element error', () => {
  beforeAll(() => {
    errorServer.listen();
  });

  afterEach(() => {
    errorServer.resetHandlers();
  });

  afterAll(() => {
    errorServer.close();
  });
  it('renders errors if api fails', async () => {
    renderWithProviders(<HotelsList />);
    expect(screen.getByTestId('loaderTestId')).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId('loaderTestId'));

    expect(screen.getByTestId('errorViewTestId')).toBeTruthy();
  });
});
