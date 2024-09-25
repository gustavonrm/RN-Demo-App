import React from 'react';
import { ActivityIndicator, View} from 'react-native';
import { PINK } from '../../../constants/colors';

const Loader = () => {

  return (
  <View  testID={'loaderTestId'}>
      <ActivityIndicator  size={'large'} color={PINK}/>
  </View>
  );
};

export default Loader;
