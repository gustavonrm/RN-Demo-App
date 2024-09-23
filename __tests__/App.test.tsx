/**
 * @format
 */

import 'react-native';
import { render } from '@testing-library/react-native';
import PreviewScreen from '../src/screens/PreviewScreen';

it('renders correctly', () => {
  const {getByTestId} = render(
    <PreviewScreen/>);

    expect(getByTestId('enIcon')).not.toBeNull();
});
