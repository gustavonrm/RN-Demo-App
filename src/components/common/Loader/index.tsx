import React from 'react';
import { ActivityIndicator} from 'react-native';
import { PINK } from '../../../constants/colors';

const Loader = () => {

  return ( <ActivityIndicator size={'large'} color={PINK}/>
  );
};

export default Loader;
