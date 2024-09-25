import '@testing-library/react-native/extend-expect';
import './msw.polyfills';

jest.mock('@react-navigation/native', () => {
    return {
      useNavigation: jest.fn().mockReturnValue({
        navigate: jest.fn(),
      }),
    };
  });
